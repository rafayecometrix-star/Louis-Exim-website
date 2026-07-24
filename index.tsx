import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ShieldCheck,
  Sparkles,
  Gift,
  Factory,
  Scissors,
  PenTool,
  Layers,
  Wrench,
  Paintbrush,
  ClipboardCheck,
  Package,
  Ship,
  Globe,
  Award,
  Users,
  Cpu,
  Leaf,
  Handshake,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  HardHat,
  KeyRound,
  BadgeCheck,
  Stamp,
  Recycle,
  Building2,
  Truck,
  Boxes,
  Calendar,
  Briefcase,
  MapPinned,
  Search,
  X,
  Menu,
  MessageCircle,
  Eye,
  Info,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { submitContact } from "./contact.functions";
import heroImage from "./hero-leather.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Louis Exim — Premium Leather Goods & Safety Shoes | Kanpur, India" },
      {
        name: "description",
        content:
          "Manufacturer & exporter of premium leather belts, handcrafted accessories and safety footwear. OEM & private label. Global shipping to USA, UK, Germany, Canada, Australia, UAE.",
      },
      { property: "og:title", content: "Louis Exim — Quality You Wear, We Build" },
      {
        property: "og:description",
        content:
          "Premium leather goods & safety shoes manufacturer from Kanpur, India. Crafting excellence. Delivering trust.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------- Product data ---------------- */

type Product = { name: string; article: string; note?: string; swatch: string };
type Category = {
  id: string;
  name: string;
  tagline: string;
  highlights?: string[];
  slogan?: string;
  products: Product[];
};

const CATEGORIES: Category[] = [
  {
    id: "casual",
    name: "Casual Belts",
    tagline:
      "Style, comfort and durability for everyday wear. Crafted from premium quality leather to complement your daily look.",
    products: [
      { name: "Navy Blue Casual Belt", article: "260701", note: "Ideal for everyday casual style", swatch: "#1e2a4a" },
      { name: "Burgundy Casual Belt", article: "260702", note: "Rich color for casual style", swatch: "#6b1f2a" },
      { name: "Tan Casual Belt", article: "260703", swatch: "#a97142" },
      { name: "Black Casual Belt", article: "260704", swatch: "#1a1a1a" },
      { name: "Cognac Casual Belt", article: "260705", swatch: "#8a4a24" },
      { name: "Chocolate Casual Belt", article: "260706", swatch: "#3d2116" },
    ],
  },
  {
    id: "reversible",
    name: "Formal Reversible Belts",
    tagline: "Two styles in one. Designed for versatility, crafted for elegance.",
    slogan: "One belt. Two looks. Always impeccable.",
    highlights: [
      "Croco, Lizard & Exotic Texture Embossing",
      "Hand Burnished & Hand-Painted Edges",
      "Personalized Buckles & Logo Branding",
      "OEM & Private Label Manufacturing",
      "Gift Packaging Available",
    ],
    products: [
      { name: "Textured Brown Reversible Belt", article: "260707", swatch: "#5a3a24" },
      { name: "Classic Black Reversible Belt", article: "260708", swatch: "#0f0f0f" },
      { name: "Pebble Navy Reversible Belt", article: "260709", swatch: "#152244" },
      { name: "Croco Brown Reversible Belt", article: "260710", swatch: "#4b2c17" },
      { name: "Stitched Brown Reversible Belt", article: "260711", swatch: "#6d442a" },
      { name: "Croco Black Reversible Belt", article: "260712", swatch: "#151515" },
    ],
  },
  {
    id: "formal",
    name: "Formal Belts",
    tagline:
      "Elevate formal attire with premium handcrafted leather belts made for the modern gentleman.",
    highlights: [
      "Premium Handcrafted Leather",
      "Hand-Burnished & Hand-Painted Edges",
      "Custom Thread Options",
      "Personalized Buckles & Logo Branding",
      "OEM & Private Label Manufacturing",
      "Gift Packaging Available",
    ],
    products: [
      { name: "Cognac Croco Embossed Leather Belt", article: "260713", swatch: "#8a4a24" },
      { name: "Classic Stitch Premium Leather Belt", article: "260714", swatch: "#2c1a10" },
      { name: "Pebble Brown Grain Leather Belt", article: "260715", swatch: "#5a3520" },
      { name: "Executive Stripe Premium Leather Belt", article: "260716", swatch: "#1a1a1a" },
      { name: "Jet Black Smooth Leather Belt", article: "260717", swatch: "#0a0a0a" },
      { name: "Midnight Blue Brushed Leather Belt", article: "260718", swatch: "#0f1a3a" },
    ],
  },
  {
    id: "beaded",
    name: "Handmade Beaded Belts",
    tagline:
      "Tradition meets craftsmanship. Meticulously handcrafted with premium leather and intricate beadwork.",
    slogan: "Handcrafted details, timeless style.",
    highlights: [
      "Handmade Beaded Craftsmanship",
      "Intricate & Durable Beadwork",
      "Authentic Genuine Leather & Dye",
      "MOQ: 5,000 pcs",
      "OEM & Private Label",
    ],
    products: [
      { name: "Desert Sunset Handmade Beaded Belt", article: "260719", note: "Bold floral tooled leather", swatch: "#c9622e" },
      { name: "Turquoise Trail Handmade Beaded Belt", article: "260720", note: "Classic turquoise beadwork", swatch: "#2a8ea3" },
      { name: "Violet Spirit Handmade Beaded Belt", article: "260721", swatch: "#5b2a6b" },
      { name: "Navajo Pride Handmade Beaded Belt", article: "260722a", note: "Authentic genuine leather", swatch: "#8a3a2a" },
      { name: "Earth Heritage Handmade Beaded Belt", article: "260722", swatch: "#6a4a2e" },
      { name: "Western Beaded Belt", article: "260723", note: "Hand artisan beadwork with western touch", swatch: "#3d2116" },
      { name: "Prairie Beaded Belt", article: "260724", swatch: "#a97142" },
    ],
  },
  {
    id: "tooled",
    name: "Hand-Tooled Belts",
    tagline:
      "Hand-tooled by skilled artisans — intricate designs, deep carvings and fine detailing built for timeless style.",
    slogan: "Handcrafted art. Timeless impression.",
    highlights: [
      "Premium Genuine Leather",
      "Intricate Floral & Western Patterns",
      "Antique Finish Buckles",
      "MOQ: 5,000 pcs",
    ],
    products: [
      { name: "Classic Brown Handcrafted Tooling Belt", article: "260725", note: "Perfect tooling with rich detail", swatch: "#5a341c" },
      { name: "Forest Green Handcrafted Tooling Belt", article: "260726", note: "Deep carved leather design", swatch: "#274031" },
      { name: "Sunflower Handcrafted Tooling Belt", article: "260727", note: "Bright sunflower tones, hand-painted", swatch: "#c99a1f" },
      { name: "Western Tan Heritage Tooling Belt", article: "260728", swatch: "#a97142" },
      { name: "Floral Midnight Navy Tooling Belt", article: "260729", note: "Elegant deep design", swatch: "#101f4a" },
      { name: "Antique Cognac Tooling Belt", article: "260730", swatch: "#8a4a24" },
    ],
  },
  {
    id: "braided",
    name: "Hand-Braided Belts",
    tagline:
      "Hand-braided by skilled artisans — superior craftsmanship, durability and timeless style.",
    slogan: "Handcrafted art. Timeless impression.",
    highlights: [
      "Premium Genuine Leather",
      "Strong & Durable Construction",
      "Antique Finish Buckles & Metal Alloy",
      "OEM & Private Label",
    ],
    products: [
      { name: "Navy Blue Hand-Braided Belt", article: "260731", note: "Classic navy braided belt", swatch: "#152244" },
      { name: "Black & Tan Hand-Braided Belt", article: "260732", note: "Two-tone black & tan braid", swatch: "#1a1a1a" },
      { name: "Black Hand-Braided Belt", article: "260734", swatch: "#0a0a0a" },
      { name: "Tan Hand-Braided Belt", article: "260735", note: "Warm tan braided belt", swatch: "#a97142" },
      { name: "Brown & Burgundy Hand-Braided Belt", article: "260733", note: "Rich brown & burgundy braid", swatch: "#5a2222" },
      { name: "Blue & Brown Hand-Braided Belt", article: "260736", note: "Navy & brown braid", swatch: "#25324f" },
    ],
  },
  {
    id: "polo",
    name: "Polo (Gaucho) Belts",
    tagline:
      "Inspired by Argentine gauchos — premium leather with vibrant hand-woven patterns for timeless everyday wear.",
    slogan: "Crafted with tradition. Designed for modern style.",
    highlights: [
      "Handcrafted by Skilled Artisans",
      "Authentic Argentine Polo Designs",
      "Hand-Woven Patterns",
      "OEM & Private Label",
      "Worldwide Export",
    ],
    products: [
      { name: "Sky Blue Classic Gaucho", article: "260737", note: "Black leather with sky-blue Gaucho pattern", swatch: "#4a9bd1" },
      { name: "Heritage Cream Gaucho", article: "260738", note: "Cream & burgundy geometric design", swatch: "#d9c9a3" },
      { name: "Patriot Red Gaucho", article: "260739", note: "Bold red, navy & white pattern", swatch: "#a12227" },
      { name: "Monochrome Black Gaucho", article: "260740", note: "Minimal black-and-white design", swatch: "#111111" },
      { name: "Desert Brown Gaucho", article: "260741", note: "Warm earthy tones", swatch: "#7a4b2e" },
      { name: "Midnight Navy Gaucho", article: "260742", note: "Navy, white & red weaving", swatch: "#0d1a3a" },
    ],
  },
  {
    id: "open-upper",
    name: "Safety Shoes — Open Upper",
    tagline:
      "Engineered for safety. Designed for comfort. Protection, durability and breathability for the working day.",
    highlights: [
      "Maximum Protection",
      "Breathable Comfort",
      "OEM & Private Label",
      "Custom Logo",
    ],
    products: [
      { name: "Velcro Strap Model", article: "260743", swatch: "#1a1a1a" },
      { name: "Industrial Lace Model", article: "260744", swatch: "#2a2a2a" },
      { name: "Reinforced Toe Model", article: "260745", swatch: "#3a2a1a" },
      { name: "Padded Tongue Model", article: "260746", swatch: "#5a3520" },
      { name: "Heavy Duty Model", article: "260747", swatch: "#1a1a1a" },
      { name: "Premium Stitch Model", article: "260748", swatch: "#0f1a3a" },
    ],
  },
  {
    id: "strobel-upper",
    name: "Safety Shoes — Strobel Upper",
    tagline:
      "Lightweight, flexible and durable Strobel construction — all-day comfort with maximum protection.",
    highlights: [
      "Slip-Resistant Sole",
      "Oil & Chemical Resistant",
      "Lightweight & Flexible",
      "Global Shipping",
    ],
    products: [
      { name: "Black Red Model", article: "260749", swatch: "#1a1a1a" },
      { name: "Navy Stitch Model", article: "260750", swatch: "#152244" },
      { name: "Navy Plain Model", article: "260751", swatch: "#101f4a" },
      { name: "Plain Model", article: "260752", swatch: "#2a2a2a" },
      { name: "Sport Safety Model", article: "260753", swatch: "#3a3a3a" },
      { name: "Executive Safety Model", article: "260754", swatch: "#1a1a2a" },
      { name: "All-Terrain Model", article: "260756", swatch: "#3d2116" },
    ],
  },
  {
    id: "keychains",
    name: "Leather Key Chains",
    tagline:
      "Elegance, durability and practicality. Premium leather with precision stitching — perfect for personal use or promotional gifting.",
    highlights: [
      "Genuine Leather Design",
      "Custom Logo & Branding",
      "Custom Size, Color & Finish",
      "Global Shipping Worldwide",
    ],
    products: [
      { name: "Classic Leather Strap Key Chain", article: "KC-01", swatch: "#5a3520" },
      { name: "Teardrop Key Chain", article: "KC-02", swatch: "#8a4a24" },
      { name: "Loop Hook Key Chain", article: "KC-03", swatch: "#1a1a1a" },
      { name: "Rectangle Key Chain", article: "KC-04", swatch: "#3d2116" },
      { name: "Metal Plate Key Chain", article: "KC-05", swatch: "#152244" },
    ],
  },
];

const CORE_VALUES = [
  { icon: Award, title: "Quality Excellence", desc: "Business conducted with quality, precision and reliability." },
  { icon: ShieldCheck, title: "Integrity", desc: "Ethical sourcing and conscious business conduct." },
  { icon: Sparkles, title: "Innovation", desc: "Continuous innovation across products and processes." },
  { icon: Handshake, title: "Customer Commitment", desc: "Delivering exceptional customer experiences." },
  { icon: Leaf, title: "Sustainability", desc: "Responsible and environmentally conscious operations." },
  { icon: CheckCircle2, title: "Reliability", desc: "Delivering on time, every time." },
];

const PROCESS_STEPS = [
  { icon: Layers, title: "Leather Selection", desc: "Sourcing premium genuine leather; inspected for grain and quality." },
  { icon: Scissors, title: "Leather Cutting", desc: "Precision cutting with minimal wastage and accurate dimensions." },
  { icon: PenTool, title: "Edge Processing", desc: "Smooth trimming and finishing for a refined edge profile." },
  { icon: Sparkles, title: "Embossing & Branding", desc: "Logo embossing and custom brand impressions." },
  { icon: Wrench, title: "Stitching", desc: "High-strength thread with precision stitching, inspected every batch." },
  { icon: Cpu, title: "Buckle Assembly", desc: "Secure fitting with nickel-free, rust-resistant hardware." },
  { icon: Paintbrush, title: "Edge Painting & Finishing", desc: "Multiple coats of edge paint and premium polishing." },
  { icon: ClipboardCheck, title: "Quality Inspection", desc: "100% inspection of size, stitching, buckle, finish and branding." },
  { icon: Package, title: "Packaging", desc: "Dust bags, gift boxes, poly bags — private label and OEM." },
  { icon: Ship, title: "Export & Dispatch", desc: "Secure carton packing and timely worldwide shipment." },
];

const WHY_CHOOSE = [
  { icon: Layers, label: "Premium Genuine Leather" },
  { icon: Factory, label: "Advanced Manufacturing Facility" },
  { icon: Briefcase, label: "OEM & Private Label Services" },
  { icon: Boxes, label: "Large-Scale Production (50,000+ Pieces)" },
  { icon: Truck, label: "On-Time Global Delivery" },
];

const CERTIFICATIONS = [
  { icon: BadgeCheck, title: "CE Certified", desc: "European conformity for safety & quality." },
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Certified quality management system." },
  { icon: Award, title: "ASTM F2413", desc: "Compliant safety footwear standard." },
  { icon: Stamp, title: "SNI Certified", desc: "Indonesian National Standard certified." },
  { icon: Recycle, title: "RoHS Compliant", desc: "Restricted hazardous substances." },
];

const PRODUCT_GROUPS = [
  {
    id: "belts",
    name: "Belts",
    icon: CircleDot,
    tagline: "Seven signature belt collections — from everyday casual to hand-tooled artistry.",
    categoryIds: ["casual", "formal", "reversible", "beaded", "tooled", "braided", "polo"],
  },
  {
    id: "shoes",
    name: "Safety Shoes",
    icon: HardHat,
    tagline: "Engineered safety footwear built for protection, comfort and long shifts.",
    categoryIds: ["open-upper", "strobel-upper"],
  },
  {
    id: "keychains",
    name: "Key Chains",
    icon: KeyRound,
    tagline: "Premium leather key chains — perfect for personal use or promotional gifting.",
    categoryIds: ["keychains"],
  },
] as const;

const MARKETS = ["USA", "UK", "Germany", "Canada", "Australia", "UAE"];

const WORK_WITH_US = [
  { icon: Award, title: "Premium Quality", desc: "Finest materials and exceptional craftsmanship." },
  { icon: Zap, title: "Advanced Technology", desc: "Modern machinery for precision and efficiency." },
  { icon: Users, title: "Client Focused", desc: "Reliable service and long-term partnerships." },
  { icon: Globe, title: "Global Standards", desc: "International quality standards at every stage." },
];

/* ---------------- Components ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();
  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

function Marquee() {
  const phrase = "QUALITY  •  CRAFTSMANSHIP  •  RELIABILITY  •  CUSTOMER SATISFACTION  •  ";
  return (
    <div className="overflow-hidden border-y border-navy/10 bg-[var(--navy)] py-4">
      <div className="marquee-track flex whitespace-nowrap text-[var(--tan)]">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0">
            {Array.from({ length: 6 }).map((__, j) => (
              <span
                key={j}
                className="mx-8 text-sm font-semibold tracking-[0.32em]"
              >
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Eyebrow({ inverse = false }: { inverse?: boolean }) {
  return (
    <p className={inverse ? "eyebrow-inverse" : "eyebrow"}>
      Crafting Excellence. Delivering Trust.
    </p>
  );
}

function BeltSwatch({ color, name }: { color: string; name?: string }) {
  return (
    <div className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#EFEBE4] to-[#E3DDD5] p-4 transition-all duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.06)_100%)]" />
      {/* Belt Strip */}
      <div className="relative flex w-full max-w-[88%] items-center justify-between">
        <div
          className="relative h-7 w-full rounded-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.25)] border-y border-[rgba(255,255,255,0.15)] flex items-center px-2 transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ background: color }}
        >
          {/* Subtle leather grain & stitch lines */}
          <div className="absolute inset-x-0 top-[2px] h-[1px] border-b border-dashed border-[rgba(255,255,255,0.3)] opacity-70" />
          <div className="absolute inset-x-0 bottom-[2px] h-[1px] border-b border-dashed border-[rgba(255,255,255,0.3)] opacity-70" />
          <div className="flex gap-4">
            <div className="h-1 w-1 rounded-full bg-black/40" />
            <div className="h-1 w-1 rounded-full bg-black/40" />
            <div className="h-1 w-1 rounded-full bg-black/40" />
          </div>
        </div>
        {/* Buckle */}
        <div className="absolute right-0 h-9 w-9 rounded-md border-4 border-[#D4AF37] bg-gradient-to-br from-[#E6C65A] via-[#C59B27] to-[#8C6D13] shadow-md flex items-center justify-center">
          <div className="h-4 w-1 bg-[#4A3B0F] rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-[var(--navy)]/80 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[var(--tan)] backdrop-blur opacity-90 group-hover:opacity-100">
        <Eye className="h-3 w-3" /> Quick View
      </div>
    </div>
  );
}

function ShoeSwatch({ color }: { color: string }) {
  return (
    <div className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#EFEBE4] to-[#E3DDD5] p-4 transition-all duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.06)_100%)]" />
      <svg viewBox="0 0 140 70" className="h-28 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md">
        <path
          d="M10 50 C 25 24, 65 14, 92 24 L 118 28 C 130 30, 135 40, 128 52 L 24 56 C 14 56, 8 54, 10 50 Z"
          fill={color}
          stroke="#000000"
          strokeWidth="0.5"
        />
        {/* Steel toe reinforcement marker */}
        <path d="M 98 26 C 115 28, 125 38, 124 50 L 105 52 Z" fill="rgba(255,255,255,0.15)" />
        {/* Outsole */}
        <rect x="8" y="54" width="120" height="8" rx="3" fill="#151515" />
        <line x1="15" y1="58" x2="120" y2="58" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-[var(--navy)]/80 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[var(--tan)] backdrop-blur opacity-90 group-hover:opacity-100">
        <Eye className="h-3 w-3" /> Quick View
      </div>
    </div>
  );
}

function KeychainSwatch({ color }: { color: string }) {
  return (
    <div className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#EFEBE4] to-[#E3DDD5] p-4 transition-all duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.06)_100%)]" />
      <div className="flex flex-col items-center gap-1 transition-transform duration-300 group-hover:scale-105">
        <div className="h-7 w-7 rounded-full border-[3px] border-[#C59B27] bg-gradient-to-br from-[#E6C65A] to-[#8C6D13] shadow-sm flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-white/40" />
        </div>
        <div className="h-2 w-2 rounded-full bg-[#8C6D13]" />
        <div
          className="h-16 w-8 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-white/20 relative flex items-center justify-center"
          style={{ background: color }}
        >
          <div className="absolute inset-x-1 top-1 bottom-1 border border-dashed border-white/30 rounded-sm" />
          <span className="text-[7px] font-bold text-white/70 tracking-tighter">LOUIS EXIM</span>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-[var(--navy)]/80 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[var(--tan)] backdrop-blur opacity-90 group-hover:opacity-100">
        <Eye className="h-3 w-3" /> Quick View
      </div>
    </div>
  );
}

function ProductVisual({ categoryId, color }: { categoryId: string; color: string }) {
  if (categoryId === "open-upper" || categoryId === "strobel-upper") return <ShoeSwatch color={color} />;
  if (categoryId === "keychains") return <KeychainSwatch color={color} />;
  return <BeltSwatch color={color} />;
}

/* ---------------- Nav Component with Mobile Drawer ---------------- */

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    ["About", "about"],
    ["Vision", "vision"],
    ["Process", "process"],
    ["Products", "products"],
    ["Global", "global"],
    ["Certifications", "certifications"],
    ["Contact", "contact"],
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--navy)]/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2 text-[var(--cream)]">
          <span className="font-display text-xl font-bold tracking-wide">LOUIS EXIM</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--tan)] sm:inline">
            Kanpur, India
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="group relative text-sm font-medium text-[var(--cream)]/80 transition hover:text-[var(--tan)]"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--tan)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://wa.me/919569601581?text=Hello%20Louis%20Exim,%20I%20am%20interested%20in%20your%20leather%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--tan)] hover:text-white transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[var(--tan)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tan)] transition hover:bg-[var(--tan)] hover:text-[var(--navy)]"
          >
            Request Quote <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-[var(--cream)] hover:text-[var(--tan)] md:hidden focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col justify-between bg-[var(--navy)]/98 p-6 backdrop-blur-xl md:hidden animate-in slide-in-from-top-4 duration-300 border-t border-white/10">
          <nav className="flex flex-col gap-4">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/10 pb-3 text-lg font-medium text-[var(--cream)] hover:text-[var(--tan)]"
              >
                <span>{label}</span>
                <ChevronRight className="h-5 w-5 text-[var(--tan)]" />
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://wa.me/919569601581?text=Hello%20Louis%20Exim,%20I%20am%20interested%20in%20your%20leather%20products."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold uppercase tracking-wider text-white rounded-sm shadow-md"
            >
              <MessageCircle className="h-5 w-5" /> Direct WhatsApp Inquiry
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[var(--tan)] py-3.5 text-sm font-semibold uppercase tracking-wider text-[var(--navy)] rounded-sm shadow-md"
            >
              Request a Formal Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--navy)] text-[var(--cream)]"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1080}
          className="kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(1,24,68,0.94) 0%, rgba(1,24,68,0.82) 45%, rgba(1,24,68,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(1,24,68,0.25) 0%, transparent 30%, rgba(1,24,68,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-40 md:pb-40 md:pt-48">
        <div className="max-w-3xl">
          <p className="fade-up eyebrow-inverse" style={{ animationDelay: "0.05s" }}>
            Crafting Excellence. Delivering Trust.
          </p>
          <h1
            className="fade-up mt-6 font-display text-5xl leading-[1.05] md:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            Quality You Wear,
            <br />
            <span className="italic text-[var(--tan)]">We Build.</span>
          </h1>
          <p
            className="fade-up mt-6 max-w-xl text-lg text-[var(--cream)]/85"
            style={{ animationDelay: "0.4s" }}
          >
            Louis Exim is a Kanpur-based manufacturer & exporter of premium leather
            goods and safety footwear — engineered for global markets with skilled
            craftsmanship and modern production.
          </p>
          <div
            className="fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[var(--tan)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--navy)] transition hover:bg-[var(--cream)]"
            >
              Get a Quote{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border border-[var(--cream)]/50 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--cream)] transition hover:border-[var(--tan)] hover:text-[var(--tan)]"
            >
              Explore Products
            </a>
          </div>
          <div
            className="fade-up mt-14 grid max-w-2xl grid-cols-2 gap-6 text-sm text-[var(--cream)]/80 sm:grid-cols-4"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { icon: Layers, label: "Premium Materials" },
              { icon: ShieldCheck, label: "Strong & Durable" },
              { icon: Sparkles, label: "Expertly Crafted" },
              { icon: Globe, label: "Global Markets" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 border-l border-[var(--tan)]/50 pl-3">
                <Icon className="h-4 w-4 text-[var(--tan)]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: ShieldCheck, title: "Durable", desc: "Built to last with premium quality materials." },
    { icon: Sparkles, title: "Stylish Design", desc: "Premium craftsmanship with a refined, timeless look." },
    { icon: Gift, title: "Perfect Gift", desc: "Elegantly packaged — the perfect gift for any occasion." },
  ];
  const stats = [
    ["Year Established", "2023"],
    ["Business Type", "Manufacturer"],
    ["MOQ", "5,000 pcs"],
    ["Export Markets", "6+ Countries"],
  ] as const;
  return (
    <section id="about" className="bg-[var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Eyebrow />
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A trusted name in premium leather goods & safety footwear.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <p className="text-lg leading-relaxed text-[var(--ink)]/80">
              Louis Exim is a trusted manufacturer and exporter of premium leather goods
              and safety footwear. With a strong commitment to quality, craftsmanship
              and customer satisfaction, we have built a reputation for delivering
              products that combine durability, style and functionality.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {cards.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-md"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <Icon className="h-6 w-6 text-[var(--navy)]" />
                  <h3 className="mt-4 font-display text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink)]/70">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-16 grid grid-cols-2 divide-x divide-[var(--tan)]/40 border-y border-[var(--tan)]/40 py-8 md:grid-cols-4">
            {stats.map(([label, value], i) => {
              const Icon = [Calendar, Building2, Boxes, MapPinned][i];
              return (
                <div key={label} className="px-4 text-center">
                  {Icon && <Icon className="mx-auto mb-2 h-5 w-5 text-[var(--tan)]" />}
              <div className="font-display text-3xl text-[var(--navy)] md:text-4xl">{value}</div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)]/60">
                {label}
              </div>
            </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <Eyebrow />
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Vision & Mission</h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal className="border-l-2 border-[var(--tan)] bg-[var(--cream)] p-10">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[var(--navy)]" />
              <p className="eyebrow">Our Vision</p>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-[var(--ink)]/85">
              To become a globally recognized manufacturer and exporter of premium
              leather accessories and safety footwear by delivering innovative,
              sustainable and world-class products that exceed customer expectations.
            </p>
          </Reveal>
          <Reveal delay={120} className="border-l-2 border-[var(--navy)] bg-[var(--navy)] p-10 text-[var(--cream)]">
            <div className="flex items-center gap-3">
              <Handshake className="h-5 w-5 text-[var(--tan)]" />
              <p className="eyebrow-inverse">Our Mission</p>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-[var(--cream)]/85">
              To manufacture and export high-quality leather and safety footwear
              that meets international standards — delivered through skilled
              craftsmanship, advanced processes, strict quality control and
              reliable on-time delivery.
            </p>
          </Reveal>
        </div>

        <div className="mt-24">
          <p className="eyebrow text-center">Our Core Values</p>
          <h3 className="mt-3 text-center font-display text-3xl md:text-4xl">
            What we stand for
          </h3>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 70}
                className="group flex gap-4 border border-[var(--border)] bg-[var(--cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--navy)] text-[var(--tan)] transition group-hover:bg-[var(--tan)] group-hover:text-[var(--navy)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg">{title}</h4>
                  <p className="mt-1 text-sm text-[var(--ink)]/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-[var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Eyebrow />
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Manufacturing Process</h2>
            <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/75">
              Every leather belt is manufactured through a carefully controlled process
              that combines skilled craftsmanship with modern production techniques —
              monitored at each stage for superior quality, durability and international
              export standards.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="border border-[var(--navy)] bg-white p-6">
              <p className="eyebrow">Why Choose Louis Exim</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--ink)]/85">
                {WHY_CHOOSE.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex gap-2">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--navy)]" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-[var(--tan)]/40 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={(i % 5) * 70}
              className="relative flex flex-col bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-[var(--tan)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-9 w-9 items-center justify-center bg-[var(--navy)]/5 text-[var(--navy)]">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="mt-6 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-[var(--ink)]/70">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products({ onSelectInquiry }: { onSelectInquiry?: (productName: string, categoryName: string) => void }) {
  const [group, setGroup] = useState<string>(PRODUCT_GROUPS[0].id);
  const activeGroup = PRODUCT_GROUPS.find((g) => g.id === group)!;
  const subCategories = activeGroup.categoryIds
    .map((id) => CATEGORIES.find((c) => c.id === id)!)
    .filter(Boolean);
  const [active, setActive] = useState<string>(subCategories[0].id);
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<{ product: any; categoryName: string } | null>(null);

  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const groupsRef = useRef<Array<HTMLButtonElement | null>>([]);

  // When group changes, snap to first sub-category and clear filter.
  useEffect(() => {
    setActive(subCategories[0].id);
    setQuery("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  const cat = subCategories.find((c) => c.id === active) ?? subCategories[0];
  const q = query.trim().toLowerCase();
  const isSearching = q.length > 0;

  // Search across the whole active group; otherwise show the active sub-category only.
  const searchResults = isSearching
    ? subCategories.flatMap((c) =>
        c.products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.article.toLowerCase().includes(q),
          )
          .map((p) => ({ ...p, _categoryId: c.id, _categoryName: c.name })),
      )
    : [];

  const handleGroupKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const last = PRODUCT_GROUPS.length - 1;
    const next =
      e.key === "ArrowRight" ? (idx + 1) % (last + 1)
      : e.key === "ArrowLeft" ? (idx - 1 + last + 1) % (last + 1)
      : e.key === "Home" ? 0 : last;
    const target = PRODUCT_GROUPS[next];
    setGroup(target.id);
    groupsRef.current[next]?.focus();
  };

  const handleTabKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const last = subCategories.length - 1;
    const next =
      e.key === "ArrowRight" ? (idx + 1) % (last + 1)
      : e.key === "ArrowLeft" ? (idx - 1 + last + 1) % (last + 1)
      : e.key === "Home" ? 0 : last;
    const target = subCategories[next];
    setActive(target.id);
    tabsRef.current[next]?.focus();
  };

  const handleInquiryTrigger = (productName: string, article: string) => {
    if (onSelectInquiry) {
      onSelectInquiry(productName, cat.name);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <Eyebrow />
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Our Products</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--ink)]/75">
            A wide range of premium leather products crafted with precision, designed
            for durability and made to meet international standards.
          </p>
        </Reveal>

        {/* Top-level category cards */}
        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Product categories"
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {PRODUCT_GROUPS.map((g, i) => {
              const Icon = g.icon;
              const isActive = group === g.id;
              return (
                <button
                  key={g.id}
                  ref={(el) => { groupsRef.current[i] = el; }}
                  role="tab"
                  id={`group-tab-${g.id}`}
                  aria-selected={isActive}
                  aria-controls={`group-panel-${g.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setGroup(g.id)}
                  onKeyDown={(e) => handleGroupKey(e, i)}
                  className={
                    "group relative flex min-h-[88px] items-center gap-4 border p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
                    (isActive
                      ? "border-[var(--navy)] bg-[var(--navy)] text-[var(--cream)] shadow-lg"
                      : "border-[var(--border)] bg-[var(--cream)] text-[var(--ink)] hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-md")
                  }
                >
                  <div
                    className={
                      "flex h-14 w-14 shrink-0 items-center justify-center transition " +
                      (isActive
                        ? "bg-[var(--tan)] text-[var(--navy)]"
                        : "bg-[var(--navy)] text-[var(--tan)]")
                    }
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p
                      className={
                        "text-[10px] font-semibold uppercase tracking-[0.22em] " +
                        (isActive ? "text-[var(--tan)]" : "text-[var(--ink)]/50")
                      }
                    >
                      Category
                    </p>
                    <h3 className="mt-1 font-display text-2xl leading-tight">
                      {g.name}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Search / quick filter */}
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label htmlFor="product-search" className="sr-only">
            Search products by name or article number
          </label>
          <div className="relative w-full sm:max-w-md">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink)]/50"
            />
            <input
              id="product-search"
              type="search"
              inputMode="search"
              autoComplete="off"
              placeholder={`Search ${activeGroup.name.toLowerCase()} by name or article #`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 w-full border border-[var(--border)] bg-[var(--cream)] pl-10 pr-10 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/50 focus:border-[var(--navy)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-[var(--ink)]/60 hover:text-[var(--navy)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {isSearching && (
            <p aria-live="polite" className="text-xs text-[var(--ink)]/60">
              {searchResults.length} result{searchResults.length === 1 ? "" : "s"} in {activeGroup.name}
            </p>
          )}
        </div>

        {/* Sub-tabs (skip when only one or when searching) */}
        {subCategories.length > 1 && !isSearching && (
          <div
            key={`tabs-${group}`}
            role="tablist"
            aria-label={`${activeGroup.name} sub-categories`}
            className="fade-up mt-8 flex flex-wrap justify-center gap-2 border-y border-[var(--tan)]/40 py-3"
          >
            {subCategories.map((c, i) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  ref={(el) => { tabsRef.current[i] = el; }}
                  role="tab"
                  id={`subtab-${c.id}`}
                  aria-selected={isActive}
                  aria-controls={`subpanel-${c.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(c.id)}
                  onKeyDown={(e) => handleTabKey(e, i)}
                  className={
                    "min-h-11 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
                    (isActive
                      ? "bg-[var(--navy)] text-[var(--cream)]"
                      : "text-[var(--ink)]/70 hover:text-[var(--navy)]")
                  }
                >
                  {c.name.replace(/^Safety Shoes — /, "")}
                </button>
              );
            })}
          </div>
        )}

        {isSearching ? (
          <div
            id={`group-panel-${activeGroup.id}`}
            role="tabpanel"
            aria-labelledby={`group-tab-${activeGroup.id}`}
            className="fade-up mt-12"
          >
            {searchResults.length === 0 ? (
              <div className="border border-dashed border-[var(--border)] bg-[var(--cream)] p-12 text-center">
                <p className="text-sm text-[var(--ink)]/70">
                  No products in {activeGroup.name} match "{query}".
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--navy)] underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {searchResults.map((p) => (
                  <article
                    key={`${p._categoryId}-${p.article}`}
                    onClick={() => setSelectedProduct({ product: p, categoryName: p._categoryName })}
                    className="group cursor-pointer border border-[var(--border)] bg-[var(--cream)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-xl"
                  >
                    <ProductVisual categoryId={p._categoryId} color={p.swatch} />
                    <div className="border-t border-[var(--border)] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink)]/50">
                        {p._categoryName}
                      </p>
                      <h4 className="mt-1 font-display text-base leading-tight">{p.name}</h4>
                      <span className="mt-2 block font-mono text-xs uppercase tracking-widest text-[var(--ink)]/50">
                        Art. {p.article}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ) : (
        <div
          key={`panel-${cat.id}`}
          id={`subpanel-${cat.id}`}
          role="tabpanel"
          aria-labelledby={`subtab-${cat.id}`}
          className="fade-up mt-12 grid gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <h3 className="font-display text-3xl md:text-4xl">{cat.name}</h3>
            <p className="mt-4 text-[var(--ink)]/75">{cat.tagline}</p>
            {cat.slogan && (
              <p className="mt-6 border-l-2 border-[var(--tan)] pl-4 font-display text-lg italic text-[var(--navy)]">
                {cat.slogan}
              </p>
            )}
            {cat.highlights && (
              <ul className="mt-6 space-y-2 text-sm text-[var(--ink)]/80">
                {cat.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--navy)]" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.products.map((p) => (
                <article
                  key={p.article}
                  onClick={() => setSelectedProduct({ product: { ...p, _categoryId: cat.id }, categoryName: cat.name })}
                  className="group cursor-pointer border border-[var(--border)] bg-[var(--cream)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-xl"
                >
                  <ProductVisual categoryId={cat.id} color={p.swatch} />
                  <div className="border-t border-[var(--border)] p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display text-base leading-tight">{p.name}</h4>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="font-mono uppercase tracking-widest text-[var(--ink)]/50">
                        Art. {p.article}
                      </span>
                    </div>
                    {p.note && (
                      <p className="mt-3 text-xs text-[var(--ink)]/60">{p.note}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>

      {/* Render Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct.product}
          categoryName={selectedProduct.categoryName}
          onClose={() => setSelectedProduct(null)}
          onSelectInquiry={handleInquiryTrigger}
        />
      )}
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="bg-[var(--navy)] py-20 text-[var(--cream)] md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow-inverse">Certifications & Compliance</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Built to international standards.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--cream)]/75">
            Independently certified and compliant with the standards trusted by
            importers, safety authorities and retailers worldwide.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CERTIFICATIONS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="group flex flex-col items-center border border-[var(--tan)]/25 bg-[var(--navy-2)] p-6 text-center transition hover:-translate-y-1 hover:border-[var(--tan)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--tan)]/40 text-[var(--tan)] transition group-hover:bg-[var(--tan)] group-hover:text-[var(--navy)]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-lg">{title}</h3>
              <p className="mt-2 text-xs text-[var(--cream)]/70">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalReach() {
  return (
    <section id="global" className="bg-[var(--navy)] py-24 text-[var(--cream)] md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <p className="eyebrow-inverse">Global Reach</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Trusted by importers across six continents.
            </h2>
            <p className="mt-4 text-[var(--cream)]/75">
              From Kanpur to the world — we deliver export-grade leather goods and
              safety footwear with complete documentation and on-time dispatch.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {MARKETS.map((m) => (
                <div
                  key={m}
                  className="flex flex-col items-center gap-3 border border-[var(--tan)]/25 bg-[var(--navy-2)] px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--tan)]"
                >
                  <Globe className="h-6 w-6 text-[var(--tan)]" />
                  <span className="font-display text-lg">{m}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyWorkWithUs() {
  return (
    <section className="bg-[var(--cream)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <Eyebrow />
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Why Work With Us</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_WITH_US.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="group flex flex-col border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-[var(--navy)] text-[var(--tan)] transition group-hover:bg-[var(--tan)] group-hover:text-[var(--navy)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-[var(--ink)]/70">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    const fd = new FormData(e.currentTarget);
    try {
      await submit({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          company: String(fd.get("company") || ""),
          inquiry_type: String(fd.get("inquiry_type") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputCls =
    "w-full border border-[var(--cream)]/25 bg-[var(--navy-2)] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--cream)]/40 focus:border-[var(--tan)] focus:outline-none";

  return (
    <section id="contact" className="bg-[var(--navy)] py-24 text-[var(--cream)] md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="eyebrow-inverse">Crafting Excellence. Delivering Trust.</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--cream)]/75">
            Louis Exim is a trusted manufacturer of premium leather goods and safety
            shoe uppers, committed to quality, innovation and long-term partnerships
            worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "+91 9569601581", href: "tel:+919569601581" },
              { icon: Mail, label: "Email", value: "info@louisexim.in", href: "mailto:info@louisexim.in" },
              { icon: Globe, label: "Website", value: "www.louisexim.in", href: "https://www.louisexim.in" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 border-b border-[var(--cream)]/15 pb-6 transition hover:border-[var(--tan)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--tan)]/50 text-[var(--tan)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--tan)]">
                    {label}
                  </p>
                  <p className="mt-1 text-base">{value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--tan)]/50 text-[var(--tan)]">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--tan)]">
                    Office
                  </p>
                  <p className="mt-1 text-[var(--cream)]/85">
                    680-C/16, Ganga Vihar, Jajmau, Kanpur - 208010, India
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--tan)]">
                    Factory
                  </p>
                  <p className="mt-1 text-[var(--cream)]/85">
                    Arazi No. 974, 975, 976, Pewandi, Jajmau, Kanpur - 208010 (U.P.), India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-7 space-y-4 border border-[var(--cream)]/15 bg-[var(--navy-2)]/60 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required maxLength={200} placeholder="Full name *" className={inputCls} />
              <input name="email" type="email" required maxLength={320} placeholder="Email *" className={inputCls} />
              <input name="phone" maxLength={50} placeholder="Phone" className={inputCls} />
              <input name="company" maxLength={200} placeholder="Company" className={inputCls} />
            </div>
            <select name="inquiry_type" defaultValue="" className={inputCls}>
              <option value="" disabled>
                Product category / inquiry type
              </option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
              <option value="OEM & Private Label">OEM & Private Label</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
            <textarea
              name="message"
              required
              maxLength={5000}
              rows={5}
              placeholder="Your inquiry *"
              className={inputCls}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 bg-[var(--tan)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--navy)] transition hover:bg-[var(--cream)] disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Inquiry"}
              <ArrowRight className="h-4 w-4" />
            </button>
            {status === "success" && (
              <p className="text-sm text-[var(--tan)]">
                Thank you — we've received your inquiry and will be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-300">{errMsg || "Something went wrong. Please try again."}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-10 text-[var(--cream)]/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="font-display text-lg text-[var(--cream)]">LOUIS EXIM</div>
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--tan)]">
          Crafting Excellence. Delivering Trust.
        </p>
        <p className="text-xs text-[var(--cream)]/60">
          © {new Date().getFullYear()} Louis Exim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

type ProductModalProps = {
  product: any;
  categoryName: string;
  onClose: () => void;
  onSelectInquiry: (productName: string, article: string) => void;
};

function ProductModal({ product, categoryName, onClose, onSelectInquiry }: ProductModalProps) {
  if (!product) return null;

  const whatsappMsg = encodeURIComponent(
    `Hello Louis Exim, I am interested in inquiring about ${product.name} (Article #${product.article}). Please share pricing and export details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-hidden bg-[var(--cream)] border border-[var(--tan)] shadow-2xl rounded-sm">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] text-[var(--tan)] hover:bg-black transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-12">
          {/* Visual Swatch Side */}
          <div className="md:col-span-5 bg-[var(--tan-soft)] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[var(--border)]">
            <div className="w-full">
              <ProductVisual categoryId={product._categoryId || "casual"} color={product.swatch} />
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-[var(--navy)] text-[var(--tan)] text-[10px] font-semibold tracking-widest uppercase rounded-full">
                  Article #{product.article}
                </span>
              </div>
            </div>
          </div>

          {/* Product Details Side */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--navy)]">
                {categoryName}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-[var(--navy)]">
                {product.name}
              </h3>
              {product.note && (
                <p className="mt-2 text-sm text-[var(--ink)]/80 italic border-l-2 border-[var(--tan)] pl-3">
                  "{product.note}"
                </p>
              )}

              {/* Specs & Features Grid */}
              <div className="mt-6 space-y-3 text-xs text-[var(--ink)]/85">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--ink)]/60">Material:</span>
                  <span className="font-semibold text-[var(--navy)]">100% Genuine Grain Leather</span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--ink)]/60">Hardware & Finish:</span>
                  <span className="font-semibold text-[var(--navy)]">Nickel-Free Rust Resistant Alloy</span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--ink)]/60">OEM & Private Label:</span>
                  <span className="font-semibold text-[var(--navy)] font-mono">Custom Logo Available</span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--ink)]/60">Minimum Order Quantity:</span>
                  <span className="font-semibold text-[var(--navy)]">5,000 Pcs (Export Lot)</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[var(--ink)]/60">Origin:</span>
                  <span className="font-semibold text-[var(--navy)]">Kanpur, India</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onSelectInquiry(product.name, product.article);
                  onClose();
                }}
                className="flex items-center justify-center gap-2 w-full bg-[var(--navy)] py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tan)] hover:bg-[var(--navy-2)] transition shadow-sm"
              >
                Inquire For Bulk Order <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`https://wa.me/919569601581?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-[#25D366] bg-[#25D366]/10 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#1E7E34] hover:bg-[#25D366] hover:text-white transition"
              >
                <MessageCircle className="h-4 w-4" /> Instant WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppFloatingCTA() {
  return (
    <a
      href="https://wa.me/919569601581?text=Hello%20Louis%20Exim,%20I%20am%20interested%20in%20your%20leather%20products."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Louis Exim on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition hover:scale-105 pulse-cta"
    >
      <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
      <span className="hidden text-xs font-bold uppercase tracking-wider md:inline-block">
        Quick Inquiry
      </span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Marquee />
        <Vision />
        <Process />
        <Marquee />
        <Products />
        <GlobalReach />
        <Certifications />
        <WhyWorkWithUs />
        <Marquee />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingCTA />
    </div>
  );
}
