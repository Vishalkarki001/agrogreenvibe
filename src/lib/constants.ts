// Company ki saari basic information aur navigation ek hi jagah.
// Kabhi bhi naam, contact ya address badalna ho to bas yahin change karo.

import type { NavLink } from "@/types";

export const COMPANY = {
  name: "Agro Greenvibe India Private Limited",
  shortName: "Agro Greenvibe",
  tagline: "Growing Greener Spaces, With Precision.",
  description:
    "Agro Greenvibe India Pvt. Ltd. specialises in landscaping, gardening and green-space design. From cozy terrace gardens to sprawling parks and ponds, we turn every green dream into a beautiful reality — sustainably and professionally.",
  foundedYear: 2018,
  // Website par dikhne wala email (.env wale GMAIL_USER/CONTACT_TO se match).
  email: "agrogreenvibeindia@gmail.com",
  phone: "+91 88688 57255",
  phoneDisplay: "+91 88688 57255",
  whatsapp: "+91 88688 57255",
  address: "Ground Floor, Plot 023, Agro Greenvibe India, Rudrapur, Udham Singh Nagar 263153, Uttarakhand, India",
  city: "Rudrapur, Uttarakhand",
  hours: {
    weekdays: "Mon – Fri: 8:00 AM – 7:00 PM",
    saturday: "Saturday: 9:00 AM – 5:00 PM",
    sunday: "Sunday: By Appointment",
  },
} as const;

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/message/W7COP3PRDZJQI1",
  facebook: "https://www.facebook.com/share/1DoEreTpjM/",
  instagram:
    "https://www.instagram.com/agrogreenvibeindia?igsh=MTE4dm5qOXRtN2h1Zg==",
  linkedin:
    "https://www.linkedin.com/in/agro-greenvibe-india-067130413?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  youtube: "https://www.youtube.com/channel/UCFhy_FnBJJ2LmTvcJ3p7Ygw",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
