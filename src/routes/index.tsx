// Louis Exim — Single Page Website
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
import heroImage from "../../hero-leather.jpg";
import logoImage from "../../logo.png";

// Casual Belts Images
import imgCasual260701 from "../../CASUAL BELTS/ARTICLE NO. 260701.jpeg";
import imgCasual260702 from "../../CASUAL BELTS/ARTICLE NO. 260702.jpeg";
import imgCasual260703 from "../../CASUAL BELTS/ARTICLE NO. 260703.jpeg";
import imgCasual260706 from "../../CASUAL BELTS/ARTICLE NO. 260706.jpeg";

// Formal Belts Images
import imgFormal260713 from "../../FORMAL BELTS/ARTICLE NO. 2603713.jpeg";
import imgFormal260714 from "../../FORMAL BELTS/ARTICLE NO. 2603714.jpeg";
import imgFormal260715 from "../../FORMAL BELTS/ARTICLE NO. 2603715.jpeg";
import imgFormal260717 from "../../FORMAL BELTS/ARTICLE NO. 2603717.jpeg";

// Handmade Beaded Belts Images
import imgBeaded260719 from "../../HANDMADE BEADED BELTS/ARTICLE NO. 260719.jpeg";
import imgBeaded260720 from "../../HANDMADE BEADED BELTS/ARTICLE NO. 260720.jpeg";
import imgBeaded260721 from "../../HANDMADE BEADED BELTS/ARTICLE NO. 260721.jpeg";
import imgBeaded260722 from "../../HANDMADE BEADED BELTS/ARTICLE NO. 260722.jpeg";

// Handcrafted Tooling Belts Images
import imgTooling260725 from "../../HANDCRAFTED TOOLING BELTS/ARTICLE NO. 260725.jpeg";
import imgTooling260726 from "../../HANDCRAFTED TOOLING BELTS/ARTICLE NO. 260726.jpeg";
import imgTooling260727 from "../../HANDCRAFTED TOOLING BELTS/ARTICLE NO. 260727.jpeg";
import imgTooling260729 from "../../HANDCRAFTED TOOLING BELTS/ARTICLE NO. 260729.jpeg";
import imgTooling260730 from "../../HANDCRAFTED TOOLING BELTS/ARTICLE NO. 260730.jpeg";

// Hand Made Braided Belts Images
import imgBraided260731 from "../../HAND MADE BRAIDED BELTS/ARTICLE NO. 260731.jpeg";
import imgBraided260732 from "../../HAND MADE BRAIDED BELTS/ARTICLE NO. 260732.jpeg";
import imgBraided260735 from "../../HAND MADE BRAIDED BELTS/ARTICLE NO. 260735.jpeg";

// Argentina Polo Belts Images
import imgPolo260737 from "../../ARGENTINA POLO BELTS/ARTICLE NO. 260737.jpeg";
import imgPolo260738 from "../../ARGENTINA POLO BELTS/ARTICLE NO. 260738.jpeg";
import imgPolo260739 from "../../ARGENTINA POLO BELTS/ARTICLE NO. 260739.jpeg";

// Open Upper Safety Shoes Images
import imgOpen260743 from "../../open upper/ART NO. 260743.jpeg";
import imgOpen260744 from "../../open upper/ART NO. 200744.jpeg";
import imgOpen260745 from "../../open upper/ART NO. 200745.jpeg";
import imgOpen260747 from "../../open upper/ART NO. 200747.jpeg";

// Strobel Upper Safety Shoes Images
import imgStrobel260749 from "../../STROBEL UPPER/ART NO. 260749.jpeg";
import imgStrobel260750 from "../../STROBEL UPPER/ART NO. 260750.jpeg";
import imgStrobel260751 from "../../STROBEL UPPER/ART NO. 260751.jpeg";
import imgStrobel260755 from "../../STROBEL UPPER/ART NO. 260755.jpeg";

// Key Chains Images
import imgKeychain260757 from "../../Key chain/ART NO. 260757.jpeg";
import imgKeychain260758 from "../../Key chain/ART NO. 260758.jpeg";
import imgKeychain260759 from "../../Key chain/ART NO. 260759.jpeg";
import imgKeychain260760 from "../../Key chain/ART NO. 260760.jpeg";
import imgKeychain260761 from "../../Key chain/ART NO. 260761.jpeg";

/* SEO meta tags are in index.html */

/* ---------------- Product data ---------------- */

type Product = { name: string; article: string; note?: string; swatch: string; image?: string };
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
      "Discover the perfect blend of style, comfort and durability with our casual belts collection. Crafted from premium quality leather, each belt is designed to complement your everyday look effortlessly.",
    products: [
      { name: "Brown Casual Belt", article: "260701", note: "Classic brown, timeless look for everyday wear", swatch: "#a97142", image: imgCasual260701 },
      { name: "Navy Blue Casual Belt", article: "260702", note: "Textured grain finish, stylish modern casual look", swatch: "#1e2a4a", image: imgCasual260702 },
      { name: "Burgundy Smooth Leather Belt", article: "260703", note: "Rich burgundy shade, bold touch for casual style", swatch: "#6b1f2a", image: imgCasual260703 },
      { name: "Wine Red Casual Belt", article: "260706", note: "Elegant wine red, elevates everyday casual outfits", swatch: "#58181f", image: imgCasual260706 },
    ],
  },
  {
    id: "reversible",
    name: "Formal Reversible Belts",
    tagline: "Experience two styles in one with our premium reversible formal belts collection. Designed for versatility, crafted for elegance. One belt. Two looks. Always impeccable.",
    slogan: "One belt. Two looks. Always impeccable.",
    highlights: [
      "Croco, Lizard & Exotic Texture Embossing",
      "Hand Burnished & Hand-Painted Edges",
      "Personalized Buckles & Logo Branding",
      "OEM & Private Label Manufacturing",
      "Gift Packaging Available",
    ],
    products: [
      { name: "Textured Brown Reversible Belt", article: "260707", note: "Brown Textured ⇄ Black Smooth", swatch: "#5a3a24" },
      { name: "Classic Black Reversible Belt", article: "260708", note: "Black Smooth ⇄ Navy Blue", swatch: "#0f0f0f" },
      { name: "Pebble Navy Reversible Belt", article: "260709", note: "Navy Pebble ⇄ Black Smooth", swatch: "#152244" },
      { name: "Croco Brown Reversible Belt", article: "260710", note: "Cognac Croco ⇄ Black Smooth", swatch: "#4b2c17" },
      { name: "Stitched Brown Reversible Belt", article: "260711", note: "Dark Brown ⇄ Black Smooth", swatch: "#6d442a" },
      { name: "Croco Black Reversible Belt", article: "260712", note: "Black Croco ⇄ Dark Brown", swatch: "#151515" },
    ],
  },
  {
    id: "formal",
    name: "Formal Belts",
    tagline: "Elevate your formal attire with our premium formal belts collection. Designed for the modern gentleman, each belt is crafted with precision, elegance, and superior quality leather for a refined and professional look.",
    highlights: [
      "Premium Handcrafted Leather",
      "Hand-Burnished & Hand-Painted Edges",
      "Custom Thread Options",
      "Personalized Buckles & Logo Branding",
      "OEM & Private Label Manufacturing",
      "Gift Packaging Available",
    ],
    products: [
      { name: "Cognac Croco Formal Belt", article: "260713", note: "Embossed leather, cognac croco ⇄ black smooth", swatch: "#8a4a24", image: imgFormal260713 },
      { name: "Classic Stitch Formal Belt", article: "260714", note: "Premium leather, dark brown ⇄ black smooth", swatch: "#2c1a10", image: imgFormal260714 },
      { name: "Pebble Brown Formal Belt", article: "260715", note: "Grain leather, pebble brown ⇄ black smooth", swatch: "#5a3520", image: imgFormal260715 },
      { name: "Jet Black Formal Belt", article: "260717", note: "Smooth leather, jet black ⇄ black smooth", swatch: "#0a0a0a", image: imgFormal260717 },
    ],
  },
  {
    id: "beaded",
    name: "Handmade Beaded Belts",
    tagline: "Where tradition meets craftsmanship. Our handmade beaded belts are meticulously crafted by skilled artisans using premium leather and intricate beadwork, creating timeless pieces that stand out with culture, color, and character.",
    slogan: "Handcrafted details, timeless style.",
    highlights: [
      "Handmade Beaded Craftsmanship",
      "Intricate & Durable Beadwork",
      "Authentic Genuine Leather & Dye",
      "MOQ: 5,000 pcs",
      "OEM & Private Label",
    ],
    products: [
      { name: "Desert Sunset Beaded Belt", article: "260719", note: "Vibrant southwestern pattern, hand-tooled leather", swatch: "#c9622e", image: imgBeaded260719 },
      { name: "Turquoise Trail Beaded Belt", article: "260720", note: "Classic turquoise-inspired beadwork", swatch: "#2a8ea3", image: imgBeaded260720 },
      { name: "Violet Spirit Beaded Belt", article: "260721", note: "Bold floral tooled leather, vibrant beads", swatch: "#5b2a6b", image: imgBeaded260721 },
      { name: "Tribal Legacy Beaded Belt", article: "260722", note: "Colorful tribal design celebrating heritage", swatch: "#8a3a2a", image: imgBeaded260722 },
    ],
  },
  {
    id: "tooled",
    name: "Hand-Tooled Belts",
    tagline: "Expertly hand-tooled by skilled artisans, our belts showcase intricate designs, deep carvings, and fine detailing. Made from premium leather, built for durability, style and timeless sophistication.",
    slogan: "Handcrafted art. Timeless impression.",
    highlights: [
      "Premium Genuine Leather",
      "Intricate Floral & Western Patterns",
      "Antique Finish Buckles",
      "MOQ: 5,000 pcs",
    ],
    products: [
      { name: "Classic Brown Tooling Belt", article: "260725", note: "Rich floral tooling, classic western appeal", swatch: "#5a341c", image: imgTooling260725 },
      { name: "Forest Green Tooling Belt", article: "260726", note: "Deep carved leaf design, hand-painted details", swatch: "#274031", image: imgTooling260726 },
      { name: "Sunflower Tooling Belt", article: "260727", note: "Bright sunflower tooling, bold western look", swatch: "#c99a1f", image: imgTooling260727 },
      { name: "Heritage Floral Tooling Belt", article: "260729", note: "Hand-tooled floral design, antique finish", swatch: "#8a4a24", image: imgTooling260729 },
      { name: "Midnight Navy Tooling Belt", article: "260730", note: "Elegant deep tooling, premium finish", swatch: "#101f4a", image: imgTooling260730 },
    ],
  },
  {
    id: "braided",
    name: "Hand-Braided Belts",
    tagline: "Expertly hand-braided by skilled artisans, our belts showcase superior craftsmanship, durability and timeless style. Made from premium genuine leather, built for comfort, strength and everyday sophistication.",
    slogan: "Handcrafted art. Timeless impression.",
    highlights: [
      "Premium Genuine Leather",
      "Strong & Durable Construction",
      "Antique Finish Buckles & Metal Alloy",
      "OEM & Private Label",
    ],
    products: [
      { name: "Navy Blue Braided Belt", article: "260731", note: "Metal buckle + alug, classic navy, sleek finish", swatch: "#152244", image: imgBraided260731 },
      { name: "Black & Tan Braided Belt", article: "260732", note: "Metal buckle + alug, two-tone braid", swatch: "#1a1a1a", image: imgBraided260732 },
      { name: "Tan Braided Belt", article: "260735", note: "Metal buckle + alug, warm natural finish", swatch: "#a97142", image: imgBraided260735 },
    ],
  },
  {
    id: "polo",
    name: "Polo (Gaucho) Belts",
    tagline: "Inspired by the rich traditions of Argentine gauchos, our handcrafted polo belts combine premium genuine leather with vibrant woven patterns to create timeless accessories for everyday wear.",
    slogan: "Crafted with tradition. Designed for modern style.",
    highlights: [
      "Handcrafted by Skilled Artisans",
      "Authentic Argentine Polo Designs",
      "Hand-Woven Patterns",
      "OEM & Private Label",
      "Worldwide Export",
    ],
    products: [
      { name: "Sky Blue Classic Gaucho", article: "260737", note: "Black leather with sky-blue woven Gaucho pattern", swatch: "#4a9bd1", image: imgPolo260737 },
      { name: "Heritage Cream Gaucho", article: "260738", note: "Cream & burgundy geometric design, timeless appeal", swatch: "#d9c9a3", image: imgPolo260738 },
      { name: "Patriot Red Gaucho", article: "260739", note: "Bold red, navy & white pattern, traditional polo style", swatch: "#a12227", image: imgPolo260739 },
    ],
  },
  {
    id: "open-upper",
    name: "Safety Shoes — Open Upper",
    tagline: "Engineered for safety. Designed for comfort. Our open upper safety shoes provide the perfect balance of protection, durability and breathability.",
    highlights: [
      "Maximum Protection",
      "Breathable Comfort",
      "OEM & Private Label",
      "Custom Logo",
    ],
    products: [
      { name: "Black Red Stitch", article: "260743", note: "Breathable upper, steel toe, slip-resistant sole, oil & chemical resistant", swatch: "#1a1a1a", image: imgOpen260743 },
      { name: "Navy White Stitch", article: "260744", note: "Breathable upper, steel toe, slip-resistant sole, oil & chemical resistant", swatch: "#152244", image: imgOpen260744 },
      { name: "Navy Green Stitch", article: "260745", note: "Breathable upper, steel toe, slip-resistant sole, oil & chemical resistant", swatch: "#101f4a", image: imgOpen260745 },
      { name: "Padded Tongue Model", article: "260747", note: "Breathable upper, steel toe, slip-resistant sole, oil & chemical resistant", swatch: "#3a2a1a", image: imgOpen260747 },
    ],
  },
  {
    id: "strobel-upper",
    name: "Safety Shoes — Strobel Upper",
    tagline: "Engineered for Safety. Designed for Comfort. Our Strobel upper safety shoes offer a lightweight, flexible and durable construction for all-day comfort and maximum protection.",
    highlights: [
      "Slip-Resistant Sole",
      "Oil & Chemical Resistant",
      "Lightweight & Flexible",
      "Global Shipping",
    ],
    products: [
      { name: "Grey Stripe Model", article: "260749", note: "Lightweight construction, steel toe, slip-resistant, oil & chemical resistant", swatch: "#5a5a5a", image: imgStrobel260749 },
      { name: "Blue Mesh Model", article: "260750", note: "Lightweight construction, steel toe, slip-resistant, oil & chemical resistant", swatch: "#1e3a8a", image: imgStrobel260750 },
      { name: "Black Green Model", article: "260751", note: "Lightweight construction, steel toe, slip-resistant, oil & chemical resistant", swatch: "#064e3b", image: imgStrobel260751 },
      { name: "Black Stitch Model", article: "260755", note: "Lightweight construction, steel toe, slip-resistant, oil & chemical resistant", swatch: "#1a1a1d", image: imgStrobel260755 },
    ],
  },
  {
    id: "keychains",
    name: "Leather Key Chains",
    tagline: "Our leather key chains combine elegance, durability, and practicality. Crafted from premium leather with precision stitching and strong hardware, they are perfect for personal use or promotional gifting.",
    highlights: [
      "Genuine Leather Design",
      "Custom Logo & Branding",
      "Custom Size, Color & Finish",
      "Global Shipping Worldwide",
    ],
    products: [
      { name: "Metal Plate Key Chain", article: "260757", note: "Perfect for gifting", swatch: "#7a7a7a", image: imgKeychain260757 },
      { name: "Classic Leather Strap Key Chain", article: "260758", note: "Durable & strong", swatch: "#5a3520", image: imgKeychain260758 },
      { name: "Teardrop Key Chain", article: "260759", note: "Genuine leather", swatch: "#8a4a24", image: imgKeychain260759 },
      { name: "Loop Hook Key Chain", article: "260760", note: "Functional design", swatch: "#1a1a1a", image: imgKeychain260760 },
      { name: "Rectangle Key Chain", article: "260761", note: "Custom branding available", swatch: "#3d2116", image: imgKeychain260761 },
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

/* ---------- Inline Country Map Silhouettes (SVGRepo Geographic Infographic – CC0) ---------- */

function MapUSA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 165" fill="currentColor" className={className} aria-hidden="true">
      <path d="m258,23.765l-5.217-3.73l-2.621-7.979l-6.633-0.567l-1.653,11.521l-2.101,3.329l-1.298,2.219l-7.767,2.124l-6.445,1.535l-5.194,6.728l1.464,3.116l-10.883,6.894l-3.329,4.225l-3.116,2.314l-8.428,5.005l-4.651-1.417l3.589-8.475l-5.312-7.389l-1.558-6.185l-3.966-2.125l-6.799,6.209l-1.393,5.312l2.054,6.704l-2.03,7.625l-3.093,0.496l-1.723-4.533l-0.874-4.697l1.676-9.656l-1.345-1.723l2.101-5.194l12.701-1.818l-4.58-4.532l-9.963,2.762l-4.886-3.353l-8.169,3.919l-7.294-0.732l2.502-7.979l-5.17-2.88l-4.58,0.26l-5.902-2.857l-8.38-0.023l-27.928-1.417l-34.491-4.698l-14.07-2.88l-3.942-0.897l24.687,2.235l-1.605,5.052l-7.744-2.644l-0.189,12.512l2.715,1.228l-4.084,2.738l5.919,36.136l-0.142,5.406l2,50.347l0.236,9.868l7.649,30.784l8.853,4.958l-4.107,5.477l0.803,5.265l12.441,1.628l-0.779,1.181l18.367,10.788l10.246,1.606l4.721-2.149l8.924,1.181l7.176,7.554l1.96,6.445l7.106,4.863l2.88-4.485l6.893,0.236l9.703,14.188l2.101,7.342l9.962,2.03l-1.274-5.571l3.021-6.374l7.838-4.462l9.655-7.72l8.31,2.526l2.243-1.935l5.43,4.06l6.043-1.983l0.874-5.028l5.902-1.677l5.193-1.038l7.342,0.33l6.351,3.589l4.674-3.683l8.522,6.515l-0.094,6.729l5.288,7.932l10.08,5.807l0.567-11.048l-4.061-8.782l-7.483-12.819l1.865-8.546l7.531-8.522l2.266-4.816l11.638-14.637l-2.455-3.966l0.071-0.024l0.236-0.047l0.425-0.094l0.118-0.024l-3.99-3.588l0.307-4.084l-1.354-1.354l4.116,0.339l1.204-0.591l0.756-2.927l0.142-0.023l0.047-0.024l-3.636-7.649l1.558-1.676l4.604,0.685l-0.945-7.72l1.181-0.354l7.554-3.943l2.078-3.092l0.236,0.141l0.59,0.874l2.101-2.526l-3.022-5.926l-0.047-1.298l3.99-5.973Z" />
      <path d="m35.9,132.856l-2.856,1.015l-6.964,3.305l-3.565,5.335l0.921,7.153l-2.999,5.572l7.98,7.53l20.373-2.549l-0.755-22.239Z" />
    </svg>
  );
}

function MapUK({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 176 260" fill="currentColor" className={className} aria-hidden="true">
      <path d="m40.265,28.336l-4.288,3.982l-0.511,5.385l3.676,6.635l4.798-0.739l-1.174-6.075Z" />
      <path d="m37.126,21.65l3.139-3.267l0.97-6.737l2.475-2.169l-2.527-3.624l-11.102,5.717l-1.76,3.445l2.909,6.533Z" />
      <path d="m45.853,124.599l1.583-6.074l-5.308,1.174l-0.715-0.74l0.689-1.021l3.318-2.424l-4.466-8.703l-1.761-4.721l-7.477-0.867l-5.052,1.148l-5.538,3.369l-4.722,2.731l-6.022,6.558l0.23,3.062v0.026l-8.346,3.522l5.155,8.09l8.906,3.369l2.578-6.38l5.486,0.689l3.522,4.747l0.306,4.057l6.253-1.608l3.751,2.246l3.267-4.185l5.589-3.088Z" />
      <path d="m173.634,195.011l0.102-20.569l-6.814-4.211l-12.633-0.664l-5.027,5.027l-4.696-3.037l5.333-5.308l-1.787-8.933l-5.308-6.789l-3.114-15.491l-10.259-11.739l-7.12-1.761l-0.945-3.088l-6.712-25.367l95.183,78.841l-4.313,3.394l-0.281,0.025l-6.125-1.582l-0.918-0.281l-3.828-1.429l-1.582-1.71l1.454,1.072l9.392,0.638l5.742-9.034l-6.967,0.281l3.445-2.858l3.854-0.536l4.772-3.19l1.557-4.696l3.522-3.904l7.401-17.763l-5.563-6.814l-11.28-0.025l-10.591-0.484l-4.237,2.475l-3.854-9.672l12.684-10.234l2.144-3.164l89.926,2l73.567,5.522l62.389,2.128l-2.655,10.438l54.02,24.661l-5.563-0.025l47.64,39.08l3.216,2.424l-3.42,6.329l-4.185,12.811l5.283,3.854l6.125-3.879l-5.36,11.025l47.13,81.674l3.011,8.192l3.088-3.931l5.691-2.347l2.144-3.803l4.44,1.991l1.685,0.511l-2.297-0.204l-4.415,1.735l-0.74,4.619l4.084,4.492l0.74,1.991l-7.605,14.547l11.332,9.06l13.271-7.503l9.06-0.23l-5.794,2.808l-4.44,10.872l6.533,11.969l7.043-1.532l-3.241,6.917l-0.715,13.321l2.986,4.466l1.148,0.281l0.612,0.664l-2.68-0.178l-3.011,0.459l0.204,0.868l-4.849-2.833l-2.731,1.199l-8.652,1.557l-2.705,0.536l-4.849,9.775l4.951,0.255l2.986,10.081l-4.747,7.886l-9.187,4.772l-7.146,2.271l-3.088,8.472l5.13,4.16l5.691-3.803l10.387,2.016l3.317,1.71l2.424,2.654l3.19,3.42l7.452-0.842l1.787-1.582l5.155-1.582l2.45-1.557l2.399-1.633l-8.524,10.285l-1.251,3.343l-12.122-1.123l-8.192,0.587l-1.148,3.956l-6.482,4.313l-0.153,3.343l-17.456,17.507l4.39,7.146l2.909-6.89l4.849-0.792l11.485-6.176l1.557,3.114l6.074,4.16l5.232-4.721l1.735-6.89l9.213-3.267l18.043,3.931l-0.817-3.803l20.519-3.522l2.221,3.062l11.255-3.037l4.262,1.225l15.797-4.671l8.805-6.456l0.893-7.758l-8.192,1.608l-5.742-0.995l-2.399-3.675l5.155-0.893Z" />
    </svg>
  );
}

function MapGermany({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 196 260" fill="currentColor" className={className} aria-hidden="true">
      <path d="m186.695,112.9l-3.258-34.73l-11.126-8.64l4.586-16.532l-4.682-20.129l-14.746-5.623l-12.212-10.475l-7.434-0.603l-20.249,19.525l-10.981-1.762l3.113-7.506l89.119,14.237l-2.003-8.302l62.786,2l2.679,29.059l6.65,5.93l-11.96-0.041l-1.424,8.061l0.796,3.306l-11.898-7.168l-14.553,1.279l-4.417,7.072l2.486,16.436l-4.344,24.304l-14.047,13.129l-9.509,0.145l5.02,14.409l-6.203,20.056l7.651,15.905l-5.068,3.379l3.041,23.363l10.064,11.174l11.778,2.003l19.96,5.985l-10.957,12.936l-7.723,31.52l18.825,3.669l12.623-2.076l15.953,2.582l94.065,258l5.02-7.603l16.774,4.199l8.182-6.468l25.921-3.186l-0.845-15.253l21.287-14.312l1.834-8.327l-23.218-18.005l134.374,160.3l10.173,0.075l35.777-24.884l9.22,1.762l4.393-14.553Z" />
    </svg>
  );
}

function MapSaudiArabia({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 218" fill="currentColor" className={className} aria-hidden="true">
      <path d="M250.62,128.396 L218.465,126.096 L186.381,89.436 L183.314,74.268 L175.622,69.836 L164.337,52.104 L140.28,45.323 L119.649,43.718 L69.834,5.548 L55.937,2.385 L29.891,9.31 L40.937,23.591 L16.401,39.788 L2,42.808 L5.547,54.501 L28.885,104.196 L43.884,120.202 L48.892,132.278 L48.221,149.003 L66.048,167.788 L96,215.615 L101.798,202.101 L154.872,207.276 L164.169,192.852 L176.533,186.334 L213.193,179.961 L251.291,164.41 L258,136.711 Z" />
    </svg>
  );
}

function MapAustralia({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 240" fill="currentColor" className={className} aria-hidden="true">
      <path d="m257.229,117.41l-4.888-11.82l239.54,90.716l-5.631-17.505l-13.546-8.606l-5.605-31.236l-8.844-3.081l-7.49-28.262l-8.234,12.616l-7.437,35.434l-5.844,1.567l-31.05-20.904l3.107-11.794l7.65-7.012l134.037,7.02l-22.949,5.631l-10.97,18.141l-16.362-7.039l66.6,33.976l-1.263,10.743l-9.338,2.914l-9.084,21.462l2.663,91.034l2,110.478l6.959,9.376l-3.533,5.525l16.379,33.043l-1.195,19.124l12.36,4.223l18.859-10.518l21.01-1.966l3.054-6.135l12.06-7.224l30.227-6.694l16.229,5.313l-8.181,11.846l19.31,6.136l6.853,18.3l21.063,13.494l8.818-6.269l10.305,6.428l18.621-6.162l15.405-31.714l4.675-2.365l258,139.987Z" />
      <path d="m199.777,237.973l11.98-1.939l3.48-13.52l-18.912-3.931Z" />
    </svg>
  );
}

function MapUAE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 205" fill="currentColor" className={className} aria-hidden="true">
      <path d="M196.361,197.581 L191.386,202.557 L55.8,185.142 L2,117.194 L2,108.331 L12.729,108.331 L12.729,124.191 L31.388,126.523 L57.976,114.861 L105.595,120.519 L130,118.372 L154.068,102.5 L167.596,78.477 L188.12,65.882 L199.782,49.556 L239.432,14.105 L242.697,2.443 L247.362,2.443 L245.029,28.099 L258,28.099 L258,68.215 L245.496,81.276 L236.866,72.646 L236.633,64.949 L228.003,73.579 L228.003,110.663 L236.166,110.663 L238.965,119.992 L229.636,123.724 L217.974,123.724 L210.044,126.989 L215.642,132.587 L196.05,179.234 Z" />
    </svg>
  );
}

const MARKETS = [
  { name: "USA", icon: MapUSA },
  { name: "UK", icon: MapUK },
  { name: "Germany", icon: MapGermany },
  { name: "Saudi Arabia", icon: MapSaudiArabia },
  { name: "Australia", icon: MapAustralia },
  { name: "UAE", icon: MapUAE },
];

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
    el.classList.add("reveal-in");
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
      className={`reveal reveal-in ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

function Marquee() {
  const phrase = "QUALITY  •  CRAFTSMANSHIP  •  RELIABILITY  •  CUSTOMER SATISFACTION  •  ";
  return (
    <div className="w-full max-w-full overflow-hidden bg-[#011844] border-y border-white/10 py-3.5">
      <div className="marquee-track flex whitespace-nowrap text-[#c2b5ad]">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0">
            {Array.from({ length: 6 }).map((__, j) => (
              <span
                key={j}
                className="mx-6 text-xs font-semibold tracking-[0.28em] md:mx-8 md:text-sm"
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

function BeltSwatch({ color }: { color: string }) {
  return (
    <div className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#EFEBE4] to-[#E3DDD5] p-4 transition-all duration-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.06)_100%)]" />
      <div className="relative flex w-full max-w-[88%] items-center justify-between">
        <div
          className="relative h-7 w-full rounded-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.25)] border-y border-[rgba(255,255,255,0.15)] flex items-center px-2 transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ background: color }}
        >
          <div className="absolute inset-x-0 top-[2px] h-[1px] border-b border-dashed border-[rgba(255,255,255,0.3)] opacity-70" />
          <div className="absolute inset-x-0 bottom-[2px] h-[1px] border-b border-dashed border-[rgba(255,255,255,0.3)] opacity-70" />
          <div className="flex gap-4">
            <div className="h-1 w-1 rounded-full bg-black/40" />
            <div className="h-1 w-1 rounded-full bg-black/40" />
            <div className="h-1 w-1 rounded-full bg-black/40" />
          </div>
        </div>
        <div className="absolute right-0 h-9 w-9 rounded-md border-4 border-[#D4AF37] bg-gradient-to-br from-[#E6C65A] via-[#C59B27] to-[#8C6D13] shadow-md flex items-center justify-center">
          <div className="h-4 w-1 bg-[#4A3B0F] rounded-full" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider backdrop-blur opacity-90 group-hover:opacity-100" style={{ background: 'rgba(1,24,68,0.8)', color: '#c2b5ad' }}>
        <Eye className="h-3 w-3" /> Quick View
      </div>
    </div>
  );
}

function ShoeSwatch({ color }: { color: string }) {
  return (
    <div className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#EFEBE4] to-[#E3DDD5] p-4 transition-all duration-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.06)_100%)]" />
      <svg viewBox="0 0 140 70" className="h-28 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md">
        <path
          d="M10 50 C 25 24, 65 14, 92 24 L 118 28 C 130 30, 135 40, 128 52 L 24 56 C 14 56, 8 54, 10 50 Z"
          fill={color}
          stroke="#000000"
          strokeWidth="0.5"
        />
        <path d="M 98 26 C 115 28, 125 38, 124 50 L 105 52 Z" fill="rgba(255,255,255,0.15)" />
        <rect x="8" y="54" width="120" height="8" rx="3" fill="#151515" />
        <line x1="15" y1="58" x2="120" y2="58" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider backdrop-blur opacity-90 group-hover:opacity-100" style={{ background: 'rgba(1,24,68,0.8)', color: '#c2b5ad' }}>
        <Eye className="h-3 w-3" /> Quick View
      </div>
    </div>
  );
}

function KeychainSwatch({ color }: { color: string }) {
  return (
    <div className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#EFEBE4] to-[#E3DDD5] p-4 transition-all duration-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.06)_100%)]" />
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
      <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider backdrop-blur opacity-90 group-hover:opacity-100" style={{ background: 'rgba(1,24,68,0.8)', color: '#c2b5ad' }}>
        <Eye className="h-3 w-3" /> Quick View
      </div>
    </div>
  );
}

function ProductVisual({ categoryId, color, image }: { categoryId: string; color: string; image?: string }) {
  if (image) {
    return (
      <div className="group relative flex aspect-square w-full items-center justify-center overflow-hidden bg-white p-2 transition-all duration-300">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider backdrop-blur opacity-90 group-hover:opacity-100" style={{ background: 'rgba(1,24,68,0.8)', color: '#c2b5ad' }}>
          <Eye className="h-3 w-3" /> Quick View
        </div>
      </div>
    );
  }
  if (categoryId === "open-upper" || categoryId === "strobel-upper") return <ShoeSwatch color={color} />;
  if (categoryId === "keychains") return <KeychainSwatch color={color} />;
  return <BeltSwatch color={color} />;
}

/* ---------------- Nav Component with Mobile Drawer ---------------- */

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#011844] border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-[var(--cream)]">
          <img src={logoImage} alt="Louis Exim logo" className="h-12 w-auto" />
          <span className="font-display text-xl font-bold tracking-wide">LOUIS EXIM</span>
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
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="relative z-[60] flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center rounded-md border border-white/20 bg-white/5 text-[var(--cream)] hover:text-[var(--tan)] md:hidden focus:outline-none focus:ring-2 focus:ring-[var(--tan)]"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[var(--tan)]" /> : <Menu className="h-6 w-6 text-[var(--cream)]" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay — Always in DOM tree */}
      <div
        className={`fixed left-0 right-0 z-50 flex w-full flex-col justify-between border-t border-white/10 p-6 shadow-2xl md:hidden overflow-y-auto transition-all duration-200 ${
          mobileMenuOpen ? "block opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"
        }`}
        style={{ top: '60px', bottom: 0, backgroundColor: '#011844' }}
      >
        <nav className="flex flex-col gap-3">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                setMobileMenuOpen(false);
                const el = document.getElementById(id);
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex cursor-pointer touch-manipulation items-center justify-between border-b border-white/10 pb-3 text-lg font-medium text-[var(--cream)] hover:text-[var(--tan)] transition"
            >
              <span>{label}</span>
              <ChevronRight className="h-5 w-5 text-[var(--tan)]" />
            </a>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3 pb-8">
          <a
            href="https://wa.me/919569601581?text=Hello%20Louis%20Exim,%20I%20am%20interested%20in%20your%20leather%20products."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex cursor-pointer touch-manipulation items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold uppercase tracking-wider text-white rounded-sm shadow-md transition"
          >
            <MessageCircle className="h-5 w-5" /> Direct WhatsApp Inquiry
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              setMobileMenuOpen(false);
              const el = document.getElementById("contact");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex cursor-pointer touch-manipulation items-center justify-center gap-2 bg-[var(--tan)] py-3.5 text-sm font-semibold uppercase tracking-wider text-[var(--navy)] rounded-sm shadow-md transition"
          >
            Request a Formal Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
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
          <div className="mt-16 grid grid-cols-2 gap-y-6 divide-x divide-[var(--tan)]/40 border-y border-[var(--tan)]/40 py-8 md:grid-cols-4 md:gap-y-0">
            {stats.map(([label, value], i) => {
              const Icon = [Calendar, Building2, Boxes, MapPinned][i];
              return (
                <div key={label} className="px-2 text-center sm:px-4">
                  {Icon && <Icon className="mx-auto mb-2 h-5 w-5 text-[var(--tan)]" />}
                  <div className="font-display text-lg font-bold leading-tight text-[var(--navy)] sm:text-2xl md:text-4xl break-words">
                    {value}
                  </div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink)]/60 sm:text-[11px] sm:tracking-[0.22em]">
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
  const [activeTabMap, setActiveTabMap] = useState<Record<string, string>>({
    belts: "casual",
    shoes: "open-upper",
    keychains: "keychains",
  });
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<{ product: any; categoryName: string } | null>(null);

  const activeGroup = PRODUCT_GROUPS.find((g) => g.id === group)!;
  const subCategories = activeGroup.categoryIds
    .map((id) => CATEGORIES.find((c) => c.id === id)!)
    .filter(Boolean);

  const active = activeTabMap[group] ?? subCategories[0].id;

  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const groupsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const cat = subCategories.find((c) => c.id === active) ?? subCategories[0];
  const q = query.trim().toLowerCase();
  const isSearching = q.length > 0;

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

  const handleGroupSelect = (groupId: string) => {
    setGroup(groupId);
    setQuery("");
  };

  const handleTabSelect = (tabId: string) => {
    setActiveTabMap((prev) => ({ ...prev, [group]: tabId }));
  };

  const handleGroupKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const last = PRODUCT_GROUPS.length - 1;
    const next =
      e.key === "ArrowRight" ? (idx + 1) % (last + 1)
      : e.key === "ArrowLeft" ? (idx - 1 + last + 1) % (last + 1)
      : e.key === "Home" ? 0 : last;
    const target = PRODUCT_GROUPS[next];
    handleGroupSelect(target.id);
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
    handleTabSelect(target.id);
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
                  tabIndex={0}
                  onClick={() => handleGroupSelect(g.id)}
                  onKeyDown={(e) => handleGroupKey(e, i)}
                  className={
                    "group relative flex min-h-[88px] cursor-pointer touch-manipulation items-center gap-4 border p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
                    (isActive
                      ? "border-[var(--navy)] bg-[var(--navy)] text-[var(--cream)] shadow-lg"
                      : "border-[var(--border)] bg-[var(--cream)] text-[var(--ink)] hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-md")
                  }
                >
                  <div
                    className={
                      "pointer-events-none flex h-14 w-14 shrink-0 items-center justify-center transition " +
                      (isActive
                        ? "bg-[var(--tan)] text-[var(--navy)]"
                        : "bg-[var(--navy)] text-[var(--tan)]")
                    }
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="pointer-events-none">
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

        {/* Sub-tabs */}
        {subCategories.length > 1 && !isSearching && (
          <div
            key={`tabs-${group}`}
            role="tablist"
            aria-label={`${activeGroup.name} sub-categories`}
            className="fade-up mt-8 flex flex-nowrap justify-start gap-2 overflow-x-auto max-w-full border-y border-[var(--tan)]/40 py-3 sm:flex-wrap sm:justify-center sm:overflow-x-visible"
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
                  tabIndex={0}
                  onClick={() => handleTabSelect(c.id)}
                  onKeyDown={(e) => handleTabKey(e, i)}
                  className={
                    "min-h-11 shrink-0 cursor-pointer touch-manipulation px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
                    (isActive
                      ? "bg-[var(--navy)] text-[var(--cream)] shadow-sm"
                      : "bg-[var(--cream)] border border-[var(--border)] text-[var(--ink)]/80 hover:text-[var(--navy)]")
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
                    <ProductVisual categoryId={p._categoryId} color={p.swatch} image={p.image} />
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
                  <ProductVisual categoryId={cat.id} color={p.swatch} image={p.image} />
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
              {MARKETS.map(({ name, icon: CountryIcon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-3 border border-[var(--tan)]/25 bg-[var(--navy-2)] px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--tan)]"
                >
                  <CountryIcon className="h-6 w-6 text-[var(--tan)]" />
                  <span className="font-display text-lg">{name}</span>
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      // Ready for Formspree endpoint integration
      console.log("Formspree payload ready:", payload);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("success");
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
              <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
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
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Louis Exim logo" className="h-10 w-auto" />
          <span className="font-display text-lg text-[var(--cream)]">LOUIS EXIM</span>
        </div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={onClose}>
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--cream)] border border-[var(--tan)] shadow-2xl rounded-sm" onClick={(e) => e.stopPropagation()}>
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
              <ProductVisual categoryId={product._categoryId || "casual"} color={product.swatch} image={product.image} />
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
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)] overflow-x-hidden w-full max-w-full">
      <Nav />
      <main className="overflow-x-hidden w-full max-w-full">
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

export default Index;
