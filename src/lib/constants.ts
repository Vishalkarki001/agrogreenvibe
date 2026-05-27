// Company ki saari basic information aur navigation ek hi jagah.
// Kabhi bhi naam, contact ya address badalna ho to bas yahin change karo.

import type { NavLink } from "@/types";

export const COMPANY = {
  name: "Agro Greenvibe India Private Limited",
  shortName: "Agro Greenvibe",
  tagline: "Growing Greener Spaces, With Precision.",
  description:
    "Agro Greenvibe India Pvt. Ltd. landscaping, gardening aur green-space design ke specialists hain. Ham terrace gardens se lekar large parks aur ponds tak — har green dream ko reality banate hain, sustainable aur professional tarike se.",
  foundedYear: 2018,
  // Website par dikhne wala email (.env wale GMAIL_USER se match karta hai).
  // Naya email aaye to yahan badal dena.
  email: "ranveerji610@gmail.com",
  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  address: "Ground Floor, Plot 023, Agro Greenvibe India, Rudrapur, Udham Singh Nagar 263153, Uttarakhand, India",
  city: "Rudrapur, Uttarakhand",
  hours: {
    weekdays: "Mon – Fri: 8:00 AM – 7:00 PM",
    saturday: "Saturday: 9:00 AM – 5:00 PM",
    sunday: "Sunday: By Appointment",
  },
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
