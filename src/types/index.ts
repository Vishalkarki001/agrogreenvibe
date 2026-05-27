// Shared TypeScript types for the Agro Greenvibe website.
// Saari data files aur components yahin se types import karte hain.

import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

/** Service detail page ke gallery ka ek image slot. */
export interface GalleryImage {
  /**
   * Image ka path public/ folder se. Jaise: "/images/services/landscaping/1.jpg"
   * Jab tak asli image na ho, component ek styled placeholder dikhata hai.
   */
  src: string;
  alt: string;
  caption?: string;
}

/** Ek "What we offer" point jo service detail page par dikhta hai. */
export interface ServiceHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** Poora service category — homepage card + uska apna detail page. */
export interface Service {
  slug: string; // URL ke liye, jaise "landscaping"
  /** public/services/<imageFolder>/ — yahan se images auto-load hoti hain. */
  imageFolder: string;
  title: string;
  emoji: string;
  icon: LucideIcon;
  tagline: string;
  /** Short text — homepage/cards ke liye. */
  excerpt: string;
  /** Detail page ke intro paragraphs. */
  intro: string[];
  /** "What's included" highlights. */
  highlights: ServiceHighlight[];
  /** Quick bullet points. */
  features: string[];
  /** Gallery (4-5 images). Abhi placeholders — images baad mein. */
  gallery: GalleryImage[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number; // 1 - 5
}

export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}
