// ===========================================================================
// SERVICES DATA — Agro Greenvibe ki 6 service categories ka poora content.
//
// Har service ka apna detail page banta hai: /services/<slug>
// Images automatically load hoti hain `imageFolder` se:
//   public/services/<imageFolder>/  (jaise: landscaping, terrace_gardening ...)
// Aap bas us folder mein images (1,2,3...) daalein — wo khud dikhne lagengi.
// `gallery` neeche sirf fallback placeholder hai (jab folder khaali ho).
// ===========================================================================

import {
  Trees,
  Sprout,
  Flower2,
  Leaf,
  Shovel,
  Droplets,
  Waves,
  Fish,
  Building2,
  Sun,
  Sparkles,
  Wrench,
  Scissors,
  Ruler,
  Lightbulb,
  ShieldCheck,
  Recycle,
  Bug,
  Carrot,
  Salad,
  Mountain,
  Home,
} from "lucide-react";
import type { Service } from "@/types";

// Helper: fallback placeholder gallery (jab folder mein asli image na ho).
function gallery(slug: string, alts: string[]) {
  return alts.map((alt, i) => ({
    src: `/images/services/${slug}/${i + 1}.jpg`,
    alt,
    caption: alt,
  }));
}

export const SERVICES: Service[] = [
  // -------------------------------------------------------------------------
  // 1. LANDSCAPING
  // -------------------------------------------------------------------------
  {
    slug: "landscaping",
    imageFolder: "landscaping",
    // High-quality image ko featured slot par pin karte hain
    featuredImage: "/services/landscaping/image (11).jpeg",
    title: "Landscaping",
    emoji: "🌳",
    icon: Trees,
    tagline: "Designing outdoor spaces that breathe life into your property.",
    excerpt:
      "Complete landscape design and build — from concept drawings to lush, finished gardens that elevate any home, villa or commercial space.",
    intro: [
      "A great landscape is more than just plants and pathways — it is an experience. At **Agro Greenvibe**, our landscape designers blend natural beauty with smart design to create outdoor spaces that are stunning, functional and built to last.",
      "Whether you are starting from bare ground or reimagining an existing yard, we handle the entire journey: site analysis, concept design, soil preparation, hardscaping, planting and the finishing touches that make a space truly yours.",
    ],
    highlights: [
      {
        title: "Custom Landscape Design",
        description:
          "Detailed concept plans and layouts tailored to your taste, your space and your budget.",
        icon: Ruler,
      },
      {
        title: "Hardscaping & Pathways",
        description:
          "Patios, walkways, retaining walls and decorative stonework that give your landscape structure.",
        icon: Shovel,
      },
      {
        title: "Premium Planting",
        description:
          "Hand-picked, climate-suited plants, trees and lawns for healthy, long-lasting greenery.",
        icon: Leaf,
      },
      {
        title: "Outdoor Lighting",
        description:
          "Energy-efficient landscape lighting that makes your garden glow beautifully after sunset.",
        icon: Lightbulb,
      },
    ],
    features: [
      "Site survey & soil assessment",
      "Landscape design & 3D layout",
      "Lawn installation & turfing",
      "Retaining walls & paving",
      "Tree & shrub plantation",
      "Decorative rockeries & features",
    ],
    gallery: gallery("landscaping", [
      "Landscape transformation",
      "Stone garden pathway",
      "Modern villa landscape",
      "Lush lawn installation",
      "Evening landscape lighting",
    ]),
  },

  // -------------------------------------------------------------------------
  // 2. TERRACE GARDENING
  // -------------------------------------------------------------------------
  {
    slug: "terrace-gardening",
    imageFolder: "terrace_gardening",
    title: "Terrace Gardening",
    emoji: "🪴",
    icon: Building2,
    tagline: "Turn your rooftop into a green, breathable escape.",
    excerpt:
      "Smart, lightweight terrace and rooftop gardens — perfect for city homes craving a touch of nature.",
    intro: [
      "No backyard? No problem. Your terrace or balcony can become a **lush green retreat** right above the city. We design space-smart rooftop gardens that stay light on your structure and heavy on greenery.",
      "From waterproofing and drainage to vertical gardens and cozy seating, we engineer every detail so your terrace stays beautiful, leak-free and low-maintenance for years.",
    ],
    highlights: [
      {
        title: "Waterproofing & Drainage",
        description:
          "Proper waterproofing and drainage layers so your rooftop stays protected and leak-free.",
        icon: ShieldCheck,
      },
      {
        title: "Vertical & Container Gardens",
        description:
          "Space-saving vertical walls and modular planters that pack maximum green into minimum space.",
        icon: Building2,
      },
      {
        title: "Green Seating Zones",
        description:
          "Comfortable, beautiful sit-out areas surrounded by greenery — your private rooftop escape.",
        icon: Sun,
      },
      {
        title: "Smart Irrigation",
        description:
          "Automated drip irrigation that keeps your terrace garden thriving with minimal effort.",
        icon: Droplets,
      },
    ],
    features: [
      "Lightweight soil & planters",
      "Waterproofing & drainage setup",
      "Vertical garden walls",
      "Container & raised beds",
      "Drip irrigation systems",
      "Seating & decor integration",
    ],
    gallery: gallery("terrace-gardening", [
      "Green rooftop terrace garden",
      "Vertical garden wall",
      "Terrace planters",
      "Cozy terrace seating",
      "Rooftop drip irrigation",
    ]),
  },

  // -------------------------------------------------------------------------
  // 3. MINI & LARGE PARKS
  // -------------------------------------------------------------------------
  {
    slug: "parks",
    imageFolder: "mini_and_large_park",
    // High-quality image ko featured slot par pin karte hain
    featuredImage: "/services/mini_and_large_park/image (3).jpeg",
    title: "Mini & Large Parks",
    emoji: "🏞️",
    icon: Mountain,
    tagline: "Public green spaces designed for communities to enjoy.",
    excerpt:
      "End-to-end park development — from neighbourhood pocket parks to large community and township parks.",
    intro: [
      "Parks are the green heart of every community. We design and build **inviting, sustainable parks** of every scale — from compact pocket parks for residential societies to sprawling township and public parks.",
      "Our team handles the full scope: master planning, lawns and tree cover, walking tracks, play zones, seating, and the irrigation and maintenance systems that keep it all green for generations.",
    ],
    highlights: [
      {
        title: "Master Planning",
        description:
          "Thoughtful layouts that balance open lawns, shaded zones, pathways and activity areas.",
        icon: Ruler,
      },
      {
        title: "Walking & Jogging Tracks",
        description:
          "Durable, well-drained tracks designed for comfort and year-round use.",
        icon: Trees,
      },
      {
        title: "Play & Seating Zones",
        description:
          "Family-friendly play areas, benches and gathering spaces built for safety and comfort.",
        icon: Sun,
      },
      {
        title: "Smart Irrigation",
        description:
          "Automated, water-efficient irrigation that keeps large green areas healthy with minimal waste.",
        icon: Droplets,
      },
    ],
    features: [
      "Park master planning & design",
      "Large-scale lawn & tree cover",
      "Walking & jogging tracks",
      "Children's play areas",
      "Benches, gazebos & seating",
      "Automated irrigation systems",
    ],
    gallery: gallery("parks", [
      "Community park with lawns",
      "Tree-lined jogging track",
      "Children's play area",
      "Shaded seating gazebo",
      "Township park view",
    ]),
  },

  // -------------------------------------------------------------------------
  // 4. NATURAL & ARTIFICIAL PONDS
  // -------------------------------------------------------------------------
  {
    slug: "ponds",
    imageFolder: "natural_ponding",
    title: "Natural & Artificial Ponds",
    emoji: "💧",
    icon: Waves,
    tagline: "Tranquil water features that bring calm and life to any space.",
    excerpt:
      "Custom natural and artificial ponds, fountains and waterfalls — beautiful, balanced and easy to maintain.",
    intro: [
      "Few things transform a space like the sound and shimmer of water. We design and build both **natural-style and artificial ponds**, fountains and waterfalls that become the serene centrepiece of any garden, courtyard or park.",
      "From koi ponds to formal water features, we engineer the right filtration, lining and plant balance so your pond stays crystal-clear and thriving — not a maintenance headache.",
    ],
    highlights: [
      {
        title: "Natural & Artificial Ponds",
        description:
          "Natural-look or formal ponds shaped to your space, with proper lining and depth for a healthy ecosystem.",
        icon: Waves,
      },
      {
        title: "Fountains & Waterfalls",
        description:
          "Elegant fountains and cascading waterfalls that add movement, sound and a cooling effect.",
        icon: Droplets,
      },
      {
        title: "Koi & Aquatic Life",
        description:
          "Safe, well-balanced habitats for koi, fish and aquatic plants to flourish.",
        icon: Fish,
      },
      {
        title: "Filtration & Upkeep",
        description:
          "Reliable filtration systems and maintenance plans that keep the water clean and clear.",
        icon: ShieldCheck,
      },
    ],
    features: [
      "Natural & artificial pond design",
      "Fountains & waterfalls",
      "Koi & fish ponds",
      "Filtration & aeration systems",
      "Aquatic plant landscaping",
      "Pond cleaning & maintenance",
    ],
    gallery: gallery("ponds", [
      "Natural-style garden pond",
      "Cascading waterfall",
      "Koi fish pond",
      "Courtyard fountain",
      "Aquatic plants",
    ]),
  },

  // -------------------------------------------------------------------------
  // 5. KITCHEN GARDENING
  // -------------------------------------------------------------------------
  {
    slug: "kitchen-gardening",
    imageFolder: "kitchen_gardening",
    title: "Kitchen Gardening",
    emoji: "🥬",
    icon: Carrot,
    tagline: "Grow your own fresh, organic vegetables and herbs at home.",
    excerpt:
      "Set up a thriving organic kitchen garden — fresh vegetables, herbs and greens, grown right at your home.",
    intro: [
      "Nothing beats the taste of vegetables you've grown yourself. We help you set up a **productive organic kitchen garden** in your backyard, terrace or balcony — so fresh, chemical-free produce is always just a few steps away.",
      "From raised beds and the right soil mix to seasonal crop planning and organic care, we make home-grown food simple, healthy and rewarding for the whole family.",
    ],
    highlights: [
      {
        title: "Raised Beds & Planters",
        description:
          "Well-built raised beds and containers with the perfect soil mix for healthy, high-yield crops.",
        icon: Salad,
      },
      {
        title: "Seasonal Crop Planning",
        description:
          "The right vegetables and herbs for each season, planned for a steady, year-round harvest.",
        icon: Sprout,
      },
      {
        title: "100% Organic Care",
        description:
          "Compost, organic nutrients and natural pest control — completely chemical-free produce.",
        icon: Leaf,
      },
      {
        title: "Easy Pest Protection",
        description:
          "Safe, eco-friendly methods to keep pests away without harming your food or soil.",
        icon: Bug,
      },
    ],
    features: [
      "Raised beds & grow bags",
      "Organic soil & compost setup",
      "Seasonal vegetable & herb planting",
      "Drip & self-watering systems",
      "Organic pest management",
      "Harvest guidance & upkeep",
    ],
    gallery: gallery("kitchen-gardening", [
      "Home vegetable garden",
      "Raised vegetable beds",
      "Fresh organic herbs",
      "Leafy greens harvest",
      "Backyard kitchen garden",
    ]),
  },

  // -------------------------------------------------------------------------
  // 6. ARANYA COTTAGES
  // -------------------------------------------------------------------------
  {
    slug: "aranya-cottages",
    imageFolder: "aranya_cottages",
    // High-quality image ko featured slot par pin karte hain (clearer dikhti hai)
    featuredImage: "/services/aranya_cottages/image (1).webp",
    title: "Aranya Cottages",
    emoji: "🏡",
    icon: Home,
    tagline: "Crafting nature-inspired cottages and serene garden retreats.",
    excerpt:
      "Beautiful eco-friendly cottages and forest retreats — designed and built in harmony with the land they sit on.",
    intro: [
      "**Aranya Cottages** brings the calm of the forest right to your doorstep. From bespoke garden cottages and weekend retreats to nature-inspired guest cabins, we design and build serene living spaces that blend seamlessly with the landscape around them.",
      "Every cottage is crafted with **sustainable materials**, thoughtful design and a deep respect for the environment — so you get a comfortable, beautiful escape that feels like a natural part of its surroundings.",
    ],
    highlights: [
      {
        title: "Bespoke Cottage Design",
        description:
          "Custom architectural plans tailored to your land, your taste and your idea of the perfect retreat.",
        icon: Ruler,
      },
      {
        title: "Eco-Friendly Materials",
        description:
          "Sustainably sourced wood, stone and natural finishes that age gracefully and tread lightly on the earth.",
        icon: Leaf,
      },
      {
        title: "Nature-Integrated Layouts",
        description:
          "Designs that frame views, capture sunlight and bring the garden inside through thoughtful openings.",
        icon: Trees,
      },
      {
        title: "Comfort & Privacy",
        description:
          "Cozy, well-insulated interiors with modern comforts — a true retreat from the everyday rush.",
        icon: ShieldCheck,
      },
    ],
    features: [
      "Custom cottage architecture",
      "Eco-friendly construction",
      "Landscape integration",
      "Interior finishing & decor",
      "Outdoor decks & sit-outs",
      "Turnkey project delivery",
    ],
    gallery: gallery("aranya-cottages", [
      "Aranya cottage exterior",
      "Cottage among trees",
      "Wooden cottage facade",
      "Cozy cottage interior",
      "Outdoor cottage deck",
    ]),
  },

  // -------------------------------------------------------------------------
  // 7. OTHER GARDENING SERVICES
  // -------------------------------------------------------------------------
  {
    slug: "other-services",
    imageFolder: "other_gardening_services",
    title: "Other Gardening Services",
    emoji: "✨",
    icon: Sparkles,
    tagline: "Everything else your green space might need — handled by experts.",
    excerpt:
      "Tree care, lawn maintenance, garden clean-ups, seasonal planting and more — the complete green-space toolkit.",
    intro: [
      "Beyond our core offerings, Agro Greenvibe is your **one-stop partner** for all things green. Whatever your outdoor space needs, our experienced team is ready with the right tools and know-how.",
      "From regular maintenance and tree care to seasonal clean-ups and planting, we keep your property looking its best all year round — so you can simply enjoy it.",
    ],
    highlights: [
      {
        title: "Tree Care & Pruning",
        description:
          "Safe pruning, shaping and trimming of trees and hedges by trained, equipped professionals.",
        icon: Scissors,
      },
      {
        title: "Lawn Maintenance",
        description:
          "Mowing, edging, aeration and feeding that keep your lawn lush, green and healthy.",
        icon: Flower2,
      },
      {
        title: "Garden Clean-ups",
        description:
          "Seasonal clean-ups and green waste removal that leave your space fresh and tidy.",
        icon: Recycle,
      },
      {
        title: "Maintenance Contracts",
        description:
          "Flexible annual maintenance plans for homes, societies and commercial properties.",
        icon: Wrench,
      },
    ],
    features: [
      "Tree & hedge pruning",
      "Lawn mowing & care",
      "Seasonal planting",
      "Garden clean-ups",
      "Green waste removal",
      "Annual maintenance contracts",
    ],
    gallery: gallery("other-services", [
      "Professional tree pruning",
      "Lawn mowing service",
      "Seasonal planting",
      "Garden clean-up",
      "Green waste removal",
    ]),
  },
];

// Quick lookup helper for the dynamic detail page.
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
