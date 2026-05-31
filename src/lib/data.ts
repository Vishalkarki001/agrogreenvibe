// General website content: stats, "why choose us" features, process steps,
// testimonials aur contact details. Naye items add karne ke liye sirf inhi
// arrays mein entry badhao — components automatically render kar denge.

import {
  Leaf,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Recycle,
  Award,
  Users,
  Smile,
  TreePine,
  CalendarDays,
  PhoneCall,
  Mail,
  MapPin,
  Search,
  PencilRuler,
  Hammer,
  Sparkles,
} from "lucide-react";
import type {
  Feature,
  Stat,
  ProcessStep,
  Testimonial,
  ContactDetail,
} from "@/types";
import { COMPANY } from "./constants";

// ---------------------------------------------------------------------------
// STATS — homepage counters
// ---------------------------------------------------------------------------
export const STATS: Stat[] = [
  { value: "18", label: "Projects Completed", icon: TreePine },
  { value: "15", label: "Happy Clients", icon: Smile },
  { value: "4", label: "Years of Experience", icon: CalendarDays },
  { value: "100%", label: "Eco-Friendly Work", icon: Leaf },
];

// ---------------------------------------------------------------------------
// WHY CHOOSE US — feature cards
// ---------------------------------------------------------------------------
export const FEATURES: Feature[] = [
  {
    title: "Experienced & Licensed Team",
    description:
      "Skilled landscapers, gardeners and horticulturists with years of hands-on expertise on every project.",
    icon: Award,
  },
  {
    title: "Eco-Friendly Approach",
    description:
      "Sustainable practices, organic inputs and water-smart designs that respect the environment.",
    icon: Recycle,
  },
  {
    title: "On-Time, Every Time",
    description:
      "We respect your schedule and deliver projects on the timeline we promise — no surprises.",
    icon: Clock,
  },
  {
    title: "Quality Guaranteed",
    description:
      "Premium plants, materials and workmanship, backed by our satisfaction guarantee.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Solutions",
    description:
      "Every space is unique. We design around your vision, site and budget — never one-size-fits-all.",
    icon: Leaf,
  },
  {
    title: "End-to-End Service",
    description:
      "From first sketch to final bloom and ongoing care, we handle it all under one roof.",
    icon: HeartHandshake,
  },
];

// ---------------------------------------------------------------------------
// PROCESS — "How we work" steps
// ---------------------------------------------------------------------------
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We visit your site, understand your vision, and assess soil, sunlight and space.",
    icon: Search,
  },
  {
    step: 2,
    title: "Design & Quote",
    description:
      "You receive a tailored design concept with a clear, transparent quote — no hidden costs.",
    icon: PencilRuler,
  },
  {
    step: 3,
    title: "Build & Plant",
    description:
      "Our team brings the design to life with quality materials, plants and skilled craftsmanship.",
    icon: Hammer,
  },
  {
    step: 4,
    title: "Care & Maintain",
    description:
      "We keep your green space thriving with flexible maintenance plans and ongoing support.",
    icon: Sparkles,
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS — client reviews
// ---------------------------------------------------------------------------
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rohan Mehta",
    role: "Villa Owner",
    location: "Rudrapur, Udham Singh Nagar",
    quote:
      "Agro Greenvibe transformed our dull backyard into a stunning landscape. The 3D design helped us picture everything before work even started. Truly professional team!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Apartment Resident",
    location: "Kashipur, Uttarakhand",
    quote:
      "My terrace garden is now my favourite spot in the house. They handled waterproofing, planters and even an irrigation system. Zero leaks, all green. Highly recommended!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Anil Deshmukh",
    role: "Society Chairman",
    location: "Haldwani, Uttarakhand",
    quote:
      "Our society park was completed on time and within budget. The walking track and play area are loved by everyone. Maintenance has been hassle-free ever since.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Sneha Kulkarni",
    role: "Homeowner",
    location: "Kichha, Udham Singh Nagar",
    quote:
      "The koi pond they built is the centrepiece of our garden. Crystal-clear water and so peaceful. Their maintenance team is prompt and reliable.",
    rating: 4,
  },
];

// ---------------------------------------------------------------------------
// CONTACT DETAILS — contact page & footer
// ---------------------------------------------------------------------------
export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: PhoneCall,
    label: "Call Us",
    value: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: COMPANY.address,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: `${COMPANY.hours.weekdays} • ${COMPANY.hours.saturday}`,
  },
];

// Company core values — about page
export const VALUES: Feature[] = [
  {
    title: "Sustainability First",
    description:
      "We build green spaces that give back to the planet — water-wise, organic and waste-conscious.",
    icon: Recycle,
  },
  {
    title: "Craftsmanship",
    description:
      "Attention to every detail, from the soil up. We treat each project as if it were our own.",
    icon: Award,
  },
  {
    title: "People & Community",
    description:
      "We create spaces where families, neighbours and nature come together to thrive.",
    icon: Users,
  },
];
