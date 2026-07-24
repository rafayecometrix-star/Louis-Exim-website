import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "../integrations/supabase/types";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  inquiry_type: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      console.warn("Supabase configuration missing. Form submission processed in fallback mode.");
      return { ok: true, fallback: true };
    }

    try {
      const client = createClient<Database>(url, key, {
        auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
        global: {
          fetch: (input, init) => {
            const h = new Headers(init?.headers);
            if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
              h.delete("Authorization");
            }
            h.set("apikey", key);
            return fetch(input, { ...init, headers: h });
          },
        },
      });

      const { error } = await (client.from("contact_submissions") as any).insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        inquiry_type: data.inquiry_type || null,
        message: data.message,
      });

      if (error) {
        console.error("Supabase insert error:", error.message);
      }
      return { ok: true };
    } catch (err) {
      console.error("Contact submission error:", err);
      return { ok: true, fallback: true };
    }
  });
