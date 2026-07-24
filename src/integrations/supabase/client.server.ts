// Supabase removed — Formspree will be used for form submissions
export const supabaseAdmin = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getClaims: async () => ({ data: { claims: null }, error: null }),
  },
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
  }),
} as any;
