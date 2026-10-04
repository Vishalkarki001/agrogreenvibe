// ===========================================================================
// LANDING PAGES — service × city targeted pages.
//
// Ye website ka SEO engine hai. Google "landscaping in rudrapur" jaisi
// searches par ghar ka page nahi, us exact topic ka page dikhana pasand karta
// hai. Isliye har important service+sheher combination ka apna page hai:
//   /landscaping-in-rudrapur, /terrace-gardening-in-haldwani ...
//
// ZAROORI: har page ka content asli aur alag hai — ek hi text me sirf sheher
// ka naam badalna "doorway pages" kehlata hai aur Google uske liye rank girata
// hai. Isliye har page ka local angle, benefits aur FAQs apne hain.
//
// Naya page add karna ho to bas is array me ek entry daal do — route, sitemap,
// schema aur internal links sab apne aap ban jaate hain.
// ===========================================================================

import {
  Ruler,
  Droplets,
  ShieldCheck,
  Wrench,
  Sun,
  Leaf,
  Building2,
  Mountain,
  Sprout,
  Recycle,
  Trees,
  Waves,
  Scissors,
  Factory,
  HardHat,
  Clock,
  Baby,
  Salad,
  type LucideIcon,
} from "lucide-react";
import type { FaqItem } from "@/lib/faqs";

export interface LandingBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LandingPage {
  /** URL slug — site root par baithta hai: /landscaping-in-rudrapur */
  slug: string;
  /** Jis sheher ko target kar rahe hain. */
  city: string;
  /** services.ts ka slug — gallery images aur "full service" link ke liye. */
  serviceSlug: string;
  /** Breadcrumb aur cards me dikhne wala chhota naam. */
  shortLabel: string;
  emoji: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  h1: string;
  heroSubtitle: string;
  /** 2–3 paragraphs — page ka main content. **bold** support karta hai. */
  intro: string[];

  /** Is sheher ke liye specific baat — yahi page ko unique banata hai. */
  localAngle: { title: string; body: string; points: string[] };

  benefits: LandingBenefit[];
  faqs: FaqItem[];
  /** "We also serve" — internal linking aur local reach ke liye. */
  nearbyAreas: string[];
}

export const LANDING_PAGES: LandingPage[] = [
  // =========================================================================
  // 1. LANDSCAPING — RUDRAPUR
  // =========================================================================
  {
    slug: "landscaping-in-rudrapur",
    city: "Rudrapur",
    serviceSlug: "landscaping",
    shortLabel: "Landscaping in Rudrapur",
    emoji: "🌳",
    metaTitle: "Landscaping Services in Rudrapur — Garden Design & Build",
    metaDescription:
      "Professional landscaping services in Rudrapur, Udham Singh Nagar. Garden design, lawns, pathways, retaining walls and outdoor lighting for homes, villas and factories. Free site visit — call +91 88688 57255.",
    keywords: [
      "landscaping services rudrapur",
      "landscaping in rudrapur",
      "landscape designer rudrapur",
      "garden design rudrapur",
      "landscaping company udham singh nagar",
      "lawn installation rudrapur",
      "villa landscaping rudrapur",
      "best landscaping contractor rudrapur",
    ],
    h1: "Landscaping Services in Rudrapur",
    heroSubtitle:
      "Design, build and maintenance of gardens, lawns and outdoor spaces across Rudrapur and Udham Singh Nagar — by a team that works here every day.",
    intro: [
      "Rudrapur has grown fast, and most of that growth has been **buildings first, greenery later**. We work on the second half of that equation — turning bare plots, leftover setbacks and tired old gardens into outdoor spaces that people actually use.",
      "Our landscaping work in Rudrapur covers everything between the first sketch and the final plant: site survey, soil correction, levelling, pathways and paving, retaining walls, lawn installation, tree and shrub planting, irrigation and outdoor lighting. One team, one point of contact, one accountable quotation.",
      "We have worked on private kothis and villas, factory and office campuses in the SIDCUL belt, school grounds, hotel entrances and society commons. Whatever the scale, the approach is the same — understand how the space will be used, design for the Terai climate, and build it so it still looks good in year three.",
    ],
    localAngle: {
      title: "What landscaping in Rudrapur actually demands",
      body: "Rudrapur sits in the Terai plains, and that creates a very specific set of conditions. A design copied from a Delhi or Bangalore portfolio will not survive here. These are the things we plan for on every Rudrapur site.",
      points: [
        "**Heavy monsoon and waterlogging** — the alluvial Terai soil holds water, and flat plots pond badly in July and August. We plan levels and sub-surface drainage before anything else, because more gardens die here from drowning than from drought.",
        "**Hot, humid summers** — May and June are brutal on young plants. We favour heat-tolerant species, plan shade from the start, and schedule plantation around the February–March and September–November windows.",
        "**Clay-heavy, compacted soil** — plots that have been used for construction storage are usually compacted solid. We test, then break up and amend the soil with organic matter rather than just laying turf over it.",
        "**Industrial dust in the SIDCUL belt** — near the industrial area we use dust-tolerant, easy-to-clean species and plan a green buffer rather than delicate ornamentals that look shabby within a month.",
      ],
    },
    benefits: [
      {
        title: "Design you can see before you spend",
        description:
          "Layout plan plus a 3D visualisation so you approve the real thing, not an idea. Changing a pathway on screen costs nothing; changing it after it is laid costs a lot.",
        icon: Ruler,
      },
      {
        title: "Drainage planned first, not patched later",
        description:
          "Levels, slopes and sub-surface drainage are designed before planting begins — the single most important thing in Rudrapur and the one most often skipped.",
        icon: Droplets,
      },
      {
        title: "Soft and hard landscaping in-house",
        description:
          "Lawns, planting, paving, kerbing, retaining walls, pergolas and lighting all done by our own team. No coordinating four contractors who blame each other.",
        icon: Wrench,
      },
      {
        title: "Local team, quick response",
        description:
          "We are based in Rudrapur. Site visits happen in days, not weeks, and if something needs attention after handover we are a short drive away.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        question: "How much does landscaping cost in Rudrapur?",
        answer:
          "It depends on the area and the mix of work. Soft landscaping — soil preparation, lawn and planting — costs far less per square foot than hard landscaping with paving, retaining walls or water features. A compact home garden, a villa lawn and a factory campus are three completely different budgets. We do a free site visit in Rudrapur and send an itemised quotation so you can see exactly what each element costs and drop anything you do not want.",
      },
      {
        question: "Do you cover all areas of Rudrapur?",
        answer:
          "Yes — we work right across Rudrapur including the SIDCUL and Pantnagar industrial belt, Awas Vikas, Transport Nagar, Bhadaipura, Kashipur Road, Nainital Road, Rampur Road and the surrounding colonies and farmhouse plots. Nearby towns like Kichha, Gadarpur, Dineshpur, Pantnagar and Sitarganj are also regular service areas.",
      },
      {
        question: "My plot gets waterlogged every monsoon. Can landscaping fix it?",
        answer:
          "Usually yes, and it is one of the most common requests we get in Rudrapur. The fix is a combination of re-grading the levels so water moves to a defined outlet, adding sub-surface drains or a soak pit where needed, amending the soil so it drains rather than holds, and choosing species that tolerate wet feet in the low points. We assess this on the site visit and tell you honestly if the fix is landscaping or civil work.",
      },
      {
        question: "Which grass works best for lawns in Rudrapur?",
        answer:
          "For most Rudrapur sites we recommend Selection-1 (Bermuda) or Korean grass. Selection-1 handles heat and foot traffic well and recovers quickly, which suits family lawns and commercial frontages. Korean grass gives a finer, more manicured look but is slower to establish and less tolerant of heavy use. For shaded areas we look at alternatives, because no lawn grass performs well in deep shade.",
      },
      {
        question: "Do you take up factory and commercial landscaping?",
        answer:
          "Yes, a good share of our Rudrapur work is commercial — factory campuses in SIDCUL, office frontages, hotel entrances, showroom landscaping, school and hospital grounds. We can work to an architect's drawing or design the scheme ourselves, and we are set up for GST invoicing and the documentation that corporate clients need.",
      },
      {
        question: "How long does a typical Rudrapur landscaping project take?",
        answer:
          "A small home garden usually takes 1 to 3 weeks. A full villa landscape with paving, lighting and a lawn typically runs 3 to 6 weeks. Large commercial campuses run 2 to 4 months. We give you a written timeline along with the quotation, and the main variables are civil work and plant availability.",
      },
      {
        question: "Will you maintain the garden after it is built?",
        answer:
          "Yes. Most Rudrapur clients continue with a monthly maintenance contract covering mowing, pruning, fertilising, pest control, seasonal flower changes and irrigation checks. It is optional, but a landscape without upkeep loses its shape within a season.",
      },
    ],
    nearbyAreas: ["Kichha", "Pantnagar", "Gadarpur", "Dineshpur", "Sitarganj", "Bazpur"],
  },

  // =========================================================================
  // 2. LANDSCAPING — HALDWANI
  // =========================================================================
  {
    slug: "landscaping-in-haldwani",
    city: "Haldwani",
    serviceSlug: "landscaping",
    shortLabel: "Landscaping in Haldwani",
    emoji: "🏔️",
    metaTitle: "Landscaping Services in Haldwani — Garden Design & Build",
    metaDescription:
      "Landscaping services in Haldwani and Nainital district. Slope-friendly garden design, stone terracing, lawns, pathways and lighting for homes, hotels and resorts. Free site visit — call +91 88688 57255.",
    keywords: [
      "landscaping in haldwani",
      "landscaping services haldwani",
      "garden design haldwani",
      "landscape contractor nainital district",
      "hotel landscaping haldwani",
      "resort garden design uttarakhand",
      "stone terracing garden haldwani",
      "lawn installation haldwani",
    ],
    h1: "Landscaping Services in Haldwani",
    heroSubtitle:
      "Garden and landscape design for the Kumaon foothills — sloped plots, stone terracing and hill-friendly planting, built to handle real hillside conditions.",
    intro: [
      "Haldwani sits where the plains meet the hills, and landscaping here is a different craft from landscaping on flat ground. Plots slope, soil moves, drainage runs fast and the planting palette changes with every hundred metres of elevation.",
      "We design and build landscapes across Haldwani and the wider Nainital district — private homes, hotels and homestays on the Nainital road, resort grounds, institutional campuses and society commons. **Stone terracing, retaining walls and proper slope drainage** are the backbone of most of our work here.",
      "The advantage of building in the foothills is the backdrop. A good Haldwani landscape does not fight the setting — it frames it. We plan sight lines and seating so that the hills remain the view, and keep the built elements in local stone and timber so the garden feels like it belongs.",
    ],
    localAngle: {
      title: "Why hillside landscaping needs a different approach",
      body: "A flat-land design dropped onto a Haldwani slope fails within two monsoons. These are the conditions we plan around on every project in the foothills.",
      points: [
        "**Slope and soil erosion** — rainwater runs fast on a gradient and takes topsoil with it. We use stone terracing, retaining walls, check-dams and deep-rooted ground cover to hold the soil instead of letting it wash into the drain.",
        "**Fast drainage, dry pockets** — hillside plots rarely waterlog, but they dry out unevenly. Upper terraces need more irrigation than lower ones, so we zone the system rather than watering everything the same.",
        "**Cooler winters, wider plant palette** — Haldwani's milder climate supports species that struggle in the plains. Seasonal flowering, fruit trees and temperate ornamentals all do well, and we use that range.",
        "**Local stone and timber** — using Kumaoni stone for walls, steps and paving looks right in this setting, costs less than imported material and ages well in hill weather.",
      ],
    },
    benefits: [
      {
        title: "Slope-first design",
        description:
          "Terracing, retaining walls and step levels planned from a proper site survey — so the garden holds its shape instead of sliding downhill.",
        icon: Mountain,
      },
      {
        title: "Erosion and drainage control",
        description:
          "Channelled surface runoff, soak pits and deep-rooted ground cover that keep topsoil where you put it, through every monsoon.",
        icon: Droplets,
      },
      {
        title: "Planting suited to the foothills",
        description:
          "A species palette picked for Haldwani's cooler winters and hill soil — including flowering and fruit trees that simply will not thrive in the plains.",
        icon: Leaf,
      },
      {
        title: "Built for hotels and homestays",
        description:
          "Entrance landscaping, lawns, seating decks and lit pathways designed for guest-facing properties where first impressions decide bookings.",
        icon: Building2,
      },
    ],
    faqs: [
      {
        question: "Can you landscape a sloping plot in Haldwani?",
        answer:
          "Yes — most of our Haldwani work is on a gradient. The usual approach is to convert the slope into usable terraces with stone retaining walls, connect them with steps and pathways, and channel the surface water so it exits safely instead of eroding the beds. A sloped plot handled properly is more interesting than a flat one, because you get levels, views and natural zoning.",
      },
      {
        question: "Which areas near Haldwani do you serve?",
        answer:
          "We work across Haldwani including Kathgodam, Lalkuan, Bhimtal road, Nainital road, Gaula Par, Rampur Road and the surrounding colonies, and we take projects in Nainital, Ramnagar, Bhowali and Kaladhungi. For larger hotel and resort projects we travel further into Kumaon.",
      },
      {
        question: "What plants grow well in Haldwani gardens?",
        answer:
          "The milder climate opens up a wider palette than the plains. Bougainvillea, Hibiscus, Camellia, roses, Jasmine and seasonal annuals do very well, and ornamental trees like Silver Oak, Jacaranda, Bottlebrush and Deodar suit the setting. Fruit trees including peach, plum, guava and litchi are popular in home gardens. We always choose species based on the specific elevation, aspect and soil of your plot.",
      },
      {
        question: "Do you build stone retaining walls and steps?",
        answer:
          "Yes, and on most Haldwani sites they are the first thing we build. We work in local Kumaoni stone for walls, steps, kerbing and paving — it is structurally suited to the terrain, it looks right against the hills and it holds up better than cement finishes in hill weather.",
      },
      {
        question: "Do you take on hotel and resort landscaping in the Haldwani–Nainital area?",
        answer:
          "Yes. Hospitality is a significant part of our work here — entrance and driveway landscaping, lawns for events, guest seating courts, lit pathways, water features and the planting that holds it together. We can work in phases around your occupancy so guests are not living on a construction site.",
      },
      {
        question: "Is landscaping in Haldwani more expensive than in the plains?",
        answer:
          "Often slightly, yes — mainly because of site access and the civil work that slopes require. Terracing and retaining walls add cost that a flat Rudrapur plot does not need. Against that, local stone is cheaper here than imported material, and the planting establishes with less irrigation infrastructure. We give you an itemised quote so you can see where the money is going.",
      },
    ],
    nearbyAreas: ["Kathgodam", "Lalkuan", "Nainital", "Ramnagar", "Bhimtal", "Kaladhungi"],
  },

  // =========================================================================
  // 3. GARDENING / MAINTENANCE — RUDRAPUR
  // =========================================================================
  {
    slug: "gardening-services-in-rudrapur",
    city: "Rudrapur",
    serviceSlug: "other-services",
    shortLabel: "Gardening in Rudrapur",
    emoji: "🌿",
    metaTitle: "Gardening Services in Rudrapur — Maintenance, Lawn & Tree Care",
    metaDescription:
      "Reliable gardening services in Rudrapur — monthly garden maintenance, lawn mowing, tree pruning, pest control, seasonal planting and plant supply. Contracts for homes, offices and factories. Call +91 88688 57255.",
    keywords: [
      "gardening services rudrapur",
      "garden maintenance rudrapur",
      "gardener in rudrapur",
      "lawn mowing service rudrapur",
      "tree pruning rudrapur",
      "monthly garden maintenance contract",
      "office plant maintenance rudrapur",
      "plant nursery rudrapur",
    ],
    h1: "Gardening & Garden Maintenance Services in Rudrapur",
    heroSubtitle:
      "Scheduled, reliable garden care across Rudrapur — mowing, pruning, feeding, pest control and seasonal planting, on a fixed monthly plan.",
    intro: [
      "Most gardens in Rudrapur do not fail because they were badly designed. They fail because **nobody looked after them consistently**. A lawn left unmown for a month, a hedge never shaped, soil never fed — it only takes one season for a good garden to look neglected.",
      "Our gardening service is built around that problem. You get a fixed visit schedule, a known team, and a defined scope of work, so the garden is maintained on a routine rather than attended to only when it already looks bad.",
      "We maintain private gardens, apartment and society commons, office and factory campuses, schools, hotels and showrooms across Rudrapur — including gardens we did not build ourselves.",
    ],
    localAngle: {
      title: "The Rudrapur gardening calendar",
      body: "Garden care here is seasonal, and the jobs that matter change completely through the year. This is roughly how we plan a maintenance year in Rudrapur.",
      points: [
        "**February to March** — the main planting and renovation window. Pruning, soil feeding, lawn scarification and the first round of summer annuals.",
        "**April to June** — survival season. Irrigation checks become the priority, mowing height goes up to shade the roots, and shade management keeps young plants alive through the worst heat.",
        "**July to September** — monsoon brings explosive growth plus fungal disease and weeds. Frequent mowing, drainage checks, fungicide rounds and staking are the core jobs.",
        "**October to January** — the best-looking season. Winter annuals go in, hedges get their main shaping, and this is when we do structural pruning and lawn repair.",
      ],
    },
    benefits: [
      {
        title: "Fixed schedule, not on-call chaos",
        description:
          "Agreed visit days and a written scope, so you know what is being done and when — and the garden never drifts into neglect.",
        icon: Clock,
      },
      {
        title: "Lawn care that actually works",
        description:
          "Correct mowing height for the season, aeration, feeding, weed and grub control, and patch repair — not just a quick trim.",
        icon: Scissors,
      },
      {
        title: "Tree and hedge care",
        description:
          "Structural pruning, crown thinning, deadwood removal and hedge shaping done at the right time of year, by people who know where to cut.",
        icon: Trees,
      },
      {
        title: "Organic-first pest control",
        description:
          "Neem-based treatments, companion planting and soil health as the first line of defence, with stronger intervention only where it is genuinely needed.",
        icon: Recycle,
      },
    ],
    faqs: [
      {
        question: "What does a monthly gardening contract in Rudrapur include?",
        answer:
          "A typical monthly contract covers lawn mowing and edging, hedge and shrub trimming, weeding of beds, fertilising as per season, pest and disease monitoring and treatment, irrigation checks, deadheading and general clean-up of clippings. Seasonal flower replacement, soil replenishment and major tree work are usually quoted separately because they are not monthly jobs. Everything is agreed in writing before we start.",
      },
      {
        question: "How often will the gardener visit?",
        answer:
          "It depends on the garden. A small home garden is usually fine with two visits a month. Larger lawns, society commons and commercial campuses typically need weekly visits, and during the monsoon — when grass grows fastest — we often increase frequency for those two to three months.",
      },
      {
        question: "Can you maintain a garden that someone else built?",
        answer:
          "Yes, that is a large part of this service. We start with an assessment visit to check the condition of the soil, lawn, plants and irrigation, fix anything urgent, and then move onto a regular schedule. You do not need to have been a landscaping client of ours.",
      },
      {
        question: "My lawn has turned yellow and patchy. What causes that in Rudrapur?",
        answer:
          "In this region the usual culprits are compacted soil, poor drainage after the monsoon, white grub infestation at the roots, fungal disease in the humid months, or simply uneven watering. The treatment is completely different for each, so we diagnose before treating — digging up a small patch to check for grubs takes two minutes and saves spending on the wrong remedy.",
      },
      {
        question: "Do you provide gardening services for offices and factories?",
        answer:
          "Yes. We maintain office frontages, factory campuses in the SIDCUL and Pantnagar belt, showrooms, schools, hospitals and hotels in and around Rudrapur. Commercial contracts include indoor plant care and replacement, and we provide proper GST invoicing and documentation.",
      },
      {
        question: "Do you supply plants, pots and soil as well?",
        answer:
          "Yes. We supply ornamental and indoor plants, saplings, seasonal flowers, planters, potting mix, compost and mulch, with delivery across Rudrapur. We can install and arrange them too, so you are not left with a stack of pots and no plan.",
      },
    ],
    nearbyAreas: ["Kichha", "Pantnagar", "Gadarpur", "Dineshpur", "Sitarganj", "Bazpur"],
  },

  // =========================================================================
  // 4. GARDENING / MAINTENANCE — HALDWANI
  // =========================================================================
  {
    slug: "gardening-services-in-haldwani",
    city: "Haldwani",
    serviceSlug: "other-services",
    shortLabel: "Gardening in Haldwani",
    emoji: "✂️",
    metaTitle: "Gardening Services in Haldwani — Garden Maintenance & Tree Care",
    metaDescription:
      "Gardening and garden maintenance services in Haldwani and Nainital district — mowing, pruning, terrace and slope garden care, seasonal planting and plant supply. Monthly contracts available. Call +91 88688 57255.",
    keywords: [
      "gardening services haldwani",
      "garden maintenance haldwani",
      "gardener in haldwani",
      "tree pruning haldwani",
      "lawn care nainital district",
      "hotel garden maintenance haldwani",
      "plant supply haldwani",
      "annual maintenance contract garden uttarakhand",
    ],
    h1: "Gardening & Garden Maintenance Services in Haldwani",
    heroSubtitle:
      "Regular, dependable garden care for homes, hotels and institutions across Haldwani, Kathgodam and the Nainital district.",
    intro: [
      "Gardens in the Kumaon foothills grow differently — and they need looking after differently. Growth is strong through the monsoon, winters are cold enough to damage the wrong species, and sloped beds need attention that flat lawns never do.",
      "We provide scheduled garden maintenance across Haldwani and the surrounding hill belt: mowing, pruning, feeding, pest management, seasonal planting, terrace and retaining-wall bed upkeep, and tree care. **Hotels, homestays and resorts** make up a large part of this work, where the garden is part of what guests are paying for.",
      "If you have inherited an overgrown garden, or a property that has been shut for a season, we also take on one-time restoration work before moving onto a regular schedule.",
    ],
    localAngle: {
      title: "What hill-garden maintenance involves",
      body: "A maintenance plan that works in the plains misses half of what a Haldwani garden needs. These are the jobs that are specific to gardens in the foothills.",
      points: [
        "**Terrace and retaining wall checks** — slope beds settle and walls develop weep-hole blockages. Catching that early is far cheaper than rebuilding a collapsed terrace after the monsoon.",
        "**Erosion repair after the rains** — every monsoon moves some soil on a sloped plot. Topping up beds and restoring ground cover is a routine post-monsoon job here.",
        "**Winter protection** — cold nights damage tender species. Mulching, frost covers for sensitive plants and correct timing of the winter prune all matter in Haldwani in a way they do not in Rudrapur.",
        "**Managing vigorous monsoon growth** — hedges and lawns surge between July and September, and keeping shape through those months needs more frequent visits, not the same monthly round.",
      ],
    },
    benefits: [
      {
        title: "Slope and terrace bed care",
        description:
          "Retaining walls, terraces and sloped beds checked, topped up and replanted as part of the routine — not left until something collapses.",
        icon: Mountain,
      },
      {
        title: "Seasonal, not generic",
        description:
          "A visit plan built around the Kumaon calendar — winter protection, post-monsoon erosion repair and the spring planting window.",
        icon: Sun,
      },
      {
        title: "Guest-ready hospitality upkeep",
        description:
          "For hotels, homestays and resorts: scheduled work timed around occupancy so the grounds always look right when guests arrive.",
        icon: Building2,
      },
      {
        title: "Restoration of neglected gardens",
        description:
          "Overgrown or abandoned gardens brought back — clearance, structural pruning, soil recovery and replanting — then kept that way.",
        icon: Sprout,
      },
    ],
    faqs: [
      {
        question: "Do you offer annual garden maintenance contracts in Haldwani?",
        answer:
          "Yes. Annual contracts work out cheaper than ad-hoc visits and give you a planned calendar — more frequent visits through the monsoon growth season, winter protection work before the cold sets in, and the main pruning and planting rounds at the right time. You get a fixed schedule and a single point of contact.",
      },
      {
        question: "Which areas around Haldwani do you cover?",
        answer:
          "Haldwani city, Kathgodam, Lalkuan, Gaula Par, Rampur Road, the Nainital and Bhimtal road belt, and nearby towns including Nainital, Ramnagar, Bhowali and Kaladhungi. For larger hotel and institutional contracts we go further into Kumaon.",
      },
      {
        question: "Can you restore a garden that has been neglected for years?",
        answer:
          "Yes, and it is more common than you would think with properties that stay shut for part of the year. We start with clearance and hard pruning to see what is actually there, assess which plants are worth saving, recover the soil, repair terraces and irrigation, and replant the gaps. Most overgrown gardens have good bones — it is usually restoration rather than a rebuild.",
      },
      {
        question: "How do you protect plants through the Haldwani winter?",
        answer:
          "Mulching to insulate the root zone, frost covers or temporary shelter for tender species, moving pots to sheltered spots, cutting back on watering, and timing the winter prune so new growth is not pushed out just before a cold snap. Most winter damage here comes from pruning at the wrong time rather than from the cold itself.",
      },
      {
        question: "Do you maintain hotel and resort gardens?",
        answer:
          "Yes, and it is a significant part of our Haldwani work. We schedule visits around occupancy, keep entrance and guest-facing areas on a tighter cycle than back-of-house, and handle event preparation when a property has a wedding or conference coming up.",
      },
      {
        question: "Do you supply plants and compost in Haldwani?",
        answer:
          "Yes — ornamental and indoor plants, saplings, seasonal flowers, fruit trees suited to the foothills, planters, potting mix and compost, delivered in Haldwani and nearby towns. We can plant and arrange them as part of a maintenance visit.",
      },
    ],
    nearbyAreas: ["Kathgodam", "Lalkuan", "Nainital", "Ramnagar", "Bhimtal", "Kaladhungi"],
  },

  // =========================================================================
  // 5. TERRACE GARDENING — RUDRAPUR
  // =========================================================================
  {
    slug: "terrace-gardening-in-rudrapur",
    city: "Rudrapur",
    serviceSlug: "terrace-gardening",
    shortLabel: "Terrace Gardening in Rudrapur",
    emoji: "🪴",
    metaTitle: "Terrace Garden Setup in Rudrapur — Rooftop & Vertical Gardens",
    metaDescription:
      "Terrace and rooftop garden setup in Rudrapur with proper waterproofing, lightweight soil and drip irrigation. Vertical gardens, green walls and seating decks. Leak-free, low maintenance. Call +91 88688 57255.",
    keywords: [
      "terrace garden rudrapur",
      "terrace gardening in rudrapur",
      "rooftop garden rudrapur",
      "vertical garden rudrapur",
      "green wall installation rudrapur",
      "terrace waterproofing for garden",
      "balcony garden setup rudrapur",
      "roof garden design uttarakhand",
    ],
    h1: "Terrace & Rooftop Garden Setup in Rudrapur",
    heroSubtitle:
      "Turn an unused roof into the best room in the house — waterproofed properly, planted sensibly and built to stay leak-free.",
    intro: [
      "Most houses in Rudrapur have a flat roof that does nothing except collect heat. A terrace garden turns that into usable space — and as a side effect, **drops the temperature of the room underneath noticeably** through the summer.",
      "The reason people hesitate is leakage, and that fear is justified — but only when the job is done badly. We build terrace gardens in layers: waterproof membrane, protective screed, drainage layer, filter fabric, and only then the growing medium. Planters stay raised so water never sits on the slab.",
      "We handle everything from a simple container garden on a balcony to a full rooftop with decking, pergola, seating, a green wall and drip irrigation on a timer.",
    ],
    localAngle: {
      title: "Building a terrace garden that survives a Rudrapur summer",
      body: "Rudrapur rooftops get extremely hot and then take a heavy monsoon. Both of those drive how we build here.",
      points: [
        "**Roof surface heat** — an exposed slab in May and June gets hot enough to cook roots in shallow containers. We use deeper planters, insulating layers and shade structures over the vulnerable beds rather than pretending it is not a problem.",
        "**Monsoon load and drainage** — soaked soil is much heavier than dry soil, and a blocked roof outlet turns a garden into a pond. We plan outlets, falls and overflow before laying anything.",
        "**Lightweight growing medium** — cocopeat, compost and perlite instead of garden soil. It cuts the dead load dramatically and drains far better, which matters on both counts above.",
        "**Dust from the industrial belt** — near SIDCUL, foliage picks up dust fast. We favour species with glossy, washable leaves and build in an easy hose point.",
      ],
    },
    benefits: [
      {
        title: "Waterproofing done in layers",
        description:
          "Membrane, protective screed, drainage layer and filter fabric — the full system, not a coat of chemical and hope. This is where leaks are prevented.",
        icon: ShieldCheck,
      },
      {
        title: "Weight planned, not guessed",
        description:
          "Heavy elements placed over beams and load-bearing walls, with lightweight cocopeat-based media throughout to keep the load low.",
        icon: HardHat,
      },
      {
        title: "Drip irrigation on a timer",
        description:
          "Automated watering zoned by plant type — so the garden survives a week away and you are not hauling buckets up the stairs in June.",
        icon: Droplets,
      },
      {
        title: "Vertical gardens and green walls",
        description:
          "Walls, parapets and balcony edges planted up when floor space is tight — frame, irrigation and species chosen for that wall's actual light.",
        icon: Leaf,
      },
    ],
    faqs: [
      {
        question: "Will a terrace garden cause leakage in my Rudrapur house?",
        answer:
          "Not if it is built in layers. Leakage happens when soil or planters sit directly on the slab and water is held against the concrete for months. We apply a waterproof membrane, add a protective screed over it so the membrane is never punctured, lay a drainage layer and filter fabric, and keep planters raised on supports. Done this way the roof is actually better protected than a bare slab, because the garden shields it from direct sun and thermal cracking.",
      },
      {
        question: "Can my roof take the weight of a terrace garden?",
        answer:
          "Most RCC roofs in Rudrapur can handle a well-planned garden, but we never assume it. We look at the slab and the structure, then place heavy items — large planters, water features, seating — over beams and load-bearing walls rather than mid-span. Using a cocopeat-based medium instead of garden soil cuts the weight by roughly half, which gives a large margin of safety.",
      },
      {
        question: "How much does a terrace garden cost in Rudrapur?",
        answer:
          "A container-based terrace garden with planters, plants and drip irrigation sits at the affordable end. Costs rise when waterproofing has to be redone, or when you add decking, a pergola, seating, lighting or a green wall. We quote it element by element after seeing the roof, so you can start with the essentials and add the rest later.",
      },
      {
        question: "What can I grow on a terrace in Rudrapur?",
        answer:
          "For ornamentals: Bougainvillea, Hibiscus, Adenium, Portulaca, succulents, ornamental grasses and most flowering annuals do well in the full sun. For vegetables: tomato, chilli, brinjal, okra, spinach, methi, coriander, mint and seasonal gourds all produce well. In peak summer we use shade nets over the more sensitive beds — with that, a Rudrapur terrace is productive almost all year.",
      },
      {
        question: "Does a terrace garden really reduce the heat indoors?",
        answer:
          "Yes, noticeably. A planted roof blocks direct solar radiation on the slab and cools through evaporation from the soil and leaves. Clients regularly report that the top-floor room is meaningfully cooler in May and June and that the air conditioner runs less. It is one of the most practical reasons to do it in a climate like Rudrapur's.",
      },
      {
        question: "How long does a terrace garden take to set up?",
        answer:
          "A straightforward container garden with irrigation takes 4 to 7 days. If waterproofing has to be done, allow 2 to 4 weeks — the membrane and screed need curing time that cannot be rushed, and rushing it is exactly how leaks happen later. Decking, pergolas and green walls add a few days each.",
      },
      {
        question: "How much maintenance does it need?",
        answer:
          "Less than people expect. With drip irrigation on a timer, most terrace gardens need around 30 minutes a week for deadheading and a quick check, plus a seasonal round of pruning and feeding. We also offer monthly maintenance visits if you would rather not handle it at all.",
      },
    ],
    nearbyAreas: ["Kichha", "Pantnagar", "Gadarpur", "Dineshpur", "Sitarganj", "Bazpur"],
  },

  // =========================================================================
  // 6. TERRACE GARDENING — HALDWANI
  // =========================================================================
  {
    slug: "terrace-gardening-in-haldwani",
    city: "Haldwani",
    serviceSlug: "terrace-gardening",
    shortLabel: "Terrace Gardening in Haldwani",
    emoji: "🌤️",
    metaTitle: "Terrace Garden Setup in Haldwani — Rooftop & Balcony Gardens",
    metaDescription:
      "Terrace, rooftop and balcony garden setup in Haldwani and Kathgodam. Waterproofing, lightweight planters, drip irrigation and green walls — designed for hill weather and mountain views. Call +91 88688 57255.",
    keywords: [
      "terrace garden haldwani",
      "rooftop garden haldwani",
      "terrace gardening in haldwani",
      "balcony garden haldwani",
      "vertical garden haldwani",
      "green wall kathgodam",
      "terrace garden design nainital district",
      "roof garden setup uttarakhand",
    ],
    h1: "Terrace & Balcony Garden Setup in Haldwani",
    heroSubtitle:
      "Rooftop and balcony gardens designed around the one thing Haldwani has that the plains do not — the view.",
    intro: [
      "A terrace in Haldwani is worth more than a terrace almost anywhere else, because of what you can see from it. Our job is to make that space comfortable enough that you actually sit there — and to plant it without blocking the hills.",
      "We set up rooftop gardens, balcony gardens and green walls across Haldwani, Kathgodam and the surrounding belt. **Seating, shade and sight lines are planned first**, then the planting is arranged around them — low near the parapet where the view is, taller where there is a wall to screen.",
      "Hotels and homestays make up a good share of this work. A planted, lit rooftop with seating is often the single highest-value upgrade a small property can make.",
    ],
    localAngle: {
      title: "Rooftop gardening in the foothills",
      body: "Haldwani's climate is kinder than the plains for rooftop planting, but it brings its own conditions.",
      points: [
        "**Protect the view, don't plant it out** — the most common mistake is tall planting along the parapet. We keep the view edge low and build height against walls and on the inner side instead.",
        "**Wind exposure** — rooftops here catch more wind than ground-level gardens. Tall plants need staking or sheltering, and lightweight pots will travel in a storm unless they are weighted or secured.",
        "**Cool winters open the palette** — species that will not survive a Rudrapur rooftop do fine here. Seasonal flowering is stronger and lasts longer, which makes for a much more colourful terrace.",
        "**Heavy monsoon runoff** — rainfall intensity in the foothills is high, so outlets and falls need to be sized generously. A blocked drain on a Haldwani roof fills much faster than you would expect.",
      ],
    },
    benefits: [
      {
        title: "Designed around the view",
        description:
          "Seating, planting heights and shade structures laid out so the hills stay visible from where you actually sit.",
        icon: Mountain,
      },
      {
        title: "Full waterproofing system",
        description:
          "Membrane, protective screed, drainage layer and filter fabric — built properly so the roof stays dry through the Kumaon monsoon.",
        icon: ShieldCheck,
      },
      {
        title: "Wind-aware planting",
        description:
          "Species, staking and planter weight chosen for exposed rooftops, so a storm does not undo the garden overnight.",
        icon: Sun,
      },
      {
        title: "Balcony and small-space setups",
        description:
          "Vertical panels, railing planters and compact container schemes for apartments and homestays where there is no roof to use.",
        icon: Leaf,
      },
    ],
    faqs: [
      {
        question: "Is a terrace garden practical in Haldwani's climate?",
        answer:
          "Very. The milder climate is actually better for rooftop planting than the plains — summers are less punishing on container plants, and the cool winters support a much wider and more colourful range of species. The two things that need real attention here are wind exposure and monsoon drainage, and both are straightforward to design for.",
      },
      {
        question: "Will the garden block my view of the hills?",
        answer:
          "Not if it is planned properly, and this is the first thing we discuss on site. We keep planting low along the parapet edge where the view is, use the inner side and wall faces for height and screening, and position seating at the sight lines you want to keep. A terrace garden should frame the view, not replace it.",
      },
      {
        question: "Can you set up a balcony garden in an apartment?",
        answer:
          "Yes. For apartments we use railing planters, vertical panels, wall-mounted modules and compact containers, with a drip line or self-watering system so it survives when you travel. We also check what your building management permits before planning anything fixed.",
      },
      {
        question: "Which plants work best on a Haldwani terrace?",
        answer:
          "The cooler climate lets you grow things that struggle in the plains — Camellia, roses, Geranium, Petunia, Pansy, Fuchsia and a long list of seasonal annuals all perform well here, alongside reliable staples like Bougainvillea, Hibiscus and Jasmine. Herbs do particularly well, and dwarf fruit varieties such as lemon, peach and plum are popular in containers.",
      },
      {
        question: "Do you work with hotels and homestays on rooftop spaces?",
        answer:
          "Yes, frequently. A planted rooftop with seating, shade and lighting is often the best return a small Haldwani property can get — it creates a guest space where there was only a slab. We can phase the work around occupancy so the property keeps running.",
      },
      {
        question: "What about wind damage on an exposed rooftop?",
        answer:
          "We plan for it rather than reacting to it. That means heavier or secured planters at exposed edges, staking for anything tall, windbreak screening or trellis on the most exposed side, and avoiding large-leaved species in the worst spots. Done at design stage it costs almost nothing; done after a storm it means replacing plants.",
      },
    ],
    nearbyAreas: ["Kathgodam", "Lalkuan", "Nainital", "Ramnagar", "Bhimtal", "Kaladhungi"],
  },

  // =========================================================================
  // 7. PARKS — RUDRAPUR
  // =========================================================================
  {
    slug: "park-development-in-rudrapur",
    city: "Rudrapur",
    serviceSlug: "parks",
    shortLabel: "Park Development in Rudrapur",
    emoji: "🏞️",
    metaTitle: "Park Development in Rudrapur — Society & Township Parks",
    metaDescription:
      "Park development in Rudrapur for societies, townships and institutions — master planning, jogging tracks, children's play areas, lawns, lighting and irrigation, plus long-term maintenance. Call +91 88688 57255.",
    keywords: [
      "park development rudrapur",
      "society park rudrapur",
      "township park developer uttarakhand",
      "mini park design rudrapur",
      "jogging track construction rudrapur",
      "children play area landscaping",
      "park maintenance contract rudrapur",
      "public park landscaping udham singh nagar",
    ],
    h1: "Park Development in Rudrapur",
    heroSubtitle:
      "Master planning, construction and upkeep of society, township and institutional parks across Rudrapur and Udham Singh Nagar.",
    intro: [
      "A park is the one piece of a residential project that every single resident uses and judges. Done well it becomes the reason people are happy living there; done badly it becomes a monthly complaint in the committee meeting.",
      "We develop parks in Rudrapur for housing societies, townships, builders, factories and institutions — from a compact green between two blocks to a multi-acre central park with tracks, play zones and water features.",
      "Crucially, we design for **the maintenance budget as well as the construction budget**. A park specified only to look good at the inauguration becomes unaffordable within two years. We choose species, surfaces and irrigation that a society can realistically keep running.",
    ],
    localAngle: {
      title: "What works for parks in Rudrapur",
      body: "Rudrapur's climate and usage patterns shape every park decision we make here.",
      points: [
        "**Design for the monsoon first** — flat Terai sites pond badly. Tracks and play areas need camber and defined outlets, or they are unusable for three months a year and damaged by the fourth.",
        "**Shade is not optional** — a park with no shade is an empty park from April to June. We plan tree avenues and shaded seating from the master plan stage, not as an afterthought.",
        "**Evening is peak usage** — in this climate parks fill up after sunset. Pathway and bollard lighting is a usage requirement here, not a decorative extra.",
        "**Hardy, low-water planting** — species that survive on a realistic watering schedule, grouped into irrigation zones by water need, so the running cost stays within what a society actually collects.",
      ],
    },
    benefits: [
      {
        title: "Master plan before any digging",
        description:
          "Zoning, circulation, levels, drainage, services and phasing worked out on paper first — so the park is a single coherent scheme, not accumulated add-ons.",
        icon: Ruler,
      },
      {
        title: "Tracks, play zones and seating",
        description:
          "Walking and jogging tracks, safe-surfaced children's play areas, outdoor gym zones, shaded seating and pergolas, built to take daily public use.",
        icon: Baby,
      },
      {
        title: "Phased to suit the budget",
        description:
          "One master plan split into stages that each look finished on their own — so the park stays usable and presentable while it is being built out.",
        icon: Clock,
      },
      {
        title: "Maintenance contracts after handover",
        description:
          "Scheduled mowing, pruning, fertilising, pest control, seasonal replanting and irrigation servicing, so the park still looks right in year five.",
        icon: Wrench,
      },
    ],
    faqs: [
      {
        question: "Do you work with housing societies and RWAs in Rudrapur?",
        answer:
          "Yes, regularly. We are used to the committee process — presenting a master plan and costings to the managing committee, answering questions from residents, phasing the work around a collection schedule, and providing proper documentation and GST invoicing for society accounts.",
      },
      {
        question: "What facilities can be included in a society park?",
        answer:
          "Typically walking and jogging tracks, open lawn for gatherings, a children's play area with safe surfacing, outdoor gym equipment, shaded seating and pergolas, pathway and bollard lighting, planting beds and tree avenues, a fountain or water body, and an irrigation system. We put together a mix based on your space, your residents and your budget.",
      },
      {
        question: "How do you keep the annual maintenance cost down?",
        answer:
          "By designing for it from day one. That means hardy, climate-suited and low-water species, plants grouped into irrigation zones by water requirement, durable paving and track surfaces that do not need annual repair, and lawn areas sized to what the society can realistically mow. Over-specifying at construction is what makes parks unaffordable later.",
      },
      {
        question: "Can the work be done in phases?",
        answer:
          "Yes, and for most societies that is the practical approach. We prepare one master plan and split it into phases — for example levelling, drainage and lawns first, then tracks and lighting, then the play area and water features. Each phase is designed to look complete on its own so the park never looks half-built.",
      },
      {
        question: "How long does a park project take in Rudrapur?",
        answer:
          "A small society park of a few thousand square feet typically takes 3 to 6 weeks. A larger township park with tracks, civil structures, lighting and irrigation usually runs 2 to 4 months. The monsoon affects civil work, so we plan the schedule around it where possible.",
      },
      {
        question: "Do you provide park maintenance after the project is handed over?",
        answer:
          "Yes, and most clients take it. An annual maintenance contract covers mowing, hedge and tree trimming, fertilising, pest control, seasonal flower replacement, irrigation servicing and general upkeep on a fixed schedule — so the committee knows exactly what is being done and when, and can show residents a clear record.",
      },
    ],
    nearbyAreas: ["Kichha", "Pantnagar", "Gadarpur", "Dineshpur", "Sitarganj", "Kashipur"],
  },

  // =========================================================================
  // 8. PONDS & WATER FEATURES — RUDRAPUR
  // =========================================================================
  {
    slug: "pond-and-water-features-in-rudrapur",
    city: "Rudrapur",
    serviceSlug: "ponds",
    shortLabel: "Ponds & Water Features",
    emoji: "💧",
    metaTitle: "Pond & Water Feature Design in Rudrapur — Koi Ponds, Fountains",
    metaDescription:
      "Natural and artificial pond construction in Rudrapur — koi ponds, fountains, waterfalls and garden water features with proper filtration and low maintenance. Design, build and upkeep. Call +91 88688 57255.",
    keywords: [
      "pond construction rudrapur",
      "koi pond builder uttarakhand",
      "water feature design rudrapur",
      "garden fountain installation rudrapur",
      "waterfall design for garden",
      "natural pond design india",
      "artificial pond rudrapur",
      "pond filtration and maintenance",
    ],
    h1: "Ponds, Fountains & Water Features in Rudrapur",
    heroSubtitle:
      "Natural and artificial water bodies built with proper filtration and circulation — so they stay clear, quiet and easy to live with.",
    intro: [
      "Water changes a garden more than any other element. It cools the air, it brings sound, it attracts birds, and it gives the space a focal point that planting alone never quite achieves.",
      "We design and build water features across Rudrapur — **natural ponds** that balance themselves through plants and beneficial bacteria, **artificial ponds** with liners and mechanical filtration for precise control, koi ponds, cascading waterfalls, rock streams, formal fountains and compact wall features for courtyards.",
      "The difference between a water feature that delights and one that becomes a chore is almost always what is underneath it. Circulation, filtration sizing, depth and accessible plumbing matter far more than the visible stonework.",
    ],
    localAngle: {
      title: "Building a pond that works in Rudrapur's climate",
      body: "Terai summers and a heavy monsoon are hard on a badly built pond. These are the things we engineer around here.",
      points: [
        "**Summer water temperature** — shallow ponds overheat in May and June, which stresses fish and triggers algae blooms. Adequate depth and partial shade are not aesthetic choices here, they are survival requirements.",
        "**Monsoon overflow and dilution** — heavy rain can overtop a pond and wash garden runoff into it. We build a defined overflow and keep surrounding levels falling away from the water, not into it.",
        "**Algae control through design** — bright sun plus nutrient-rich water equals green water. We control it with shade cover from aquatic plants, correct filtration sizing and good circulation rather than relying on chemicals.",
        "**Mosquito prevention** — a pond with proper circulation and fish does not breed mosquitoes. Problems only appear in still, neglected water, so the pump and the stocking are part of the design, not accessories.",
      ],
    },
    benefits: [
      {
        title: "Natural or artificial — honestly advised",
        description:
          "Self-balancing natural ponds for large informal gardens, lined and filtered systems for compact formal spaces. We tell you which actually suits your site.",
        icon: Waves,
      },
      {
        title: "Filtration sized correctly",
        description:
          "Mechanical and biological filtration specified for the real water volume and fish load — the single biggest factor in whether water stays clear.",
        icon: Droplets,
      },
      {
        title: "Koi ponds built for koi",
        description:
          "Proper depth, strong biological filtration, aeration and shade designed in from the start — not fish added to an ornamental pond as an afterthought.",
        icon: Sprout,
      },
      {
        title: "Fountains and waterfalls standalone",
        description:
          "Cascades, rock streams, wall features and formal fountains that work on their own in entrances and courtyards, without a full pond.",
        icon: Mountain,
      },
    ],
    faqs: [
      {
        question: "Will a garden pond breed mosquitoes in Rudrapur?",
        answer:
          "A properly built pond will not. Mosquitoes need still water to breed, and our ponds always have circulation through a pump, fountain or waterfall, which makes the surface unusable for them. Adding fish such as guppies or koi removes any larvae that do appear. Mosquito problems only arise in neglected ponds where the pump has been switched off for weeks — which is worth knowing before you build one.",
      },
      {
        question: "How deep should a pond be here?",
        answer:
          "For a purely ornamental pond with aquatic plants, 1.5 to 2 feet is adequate. If you want fish, and especially koi, we recommend at least 3 to 4 feet. In the Rudrapur summer that extra depth keeps the lower water cool enough for fish to retreat into, which shallow ponds simply cannot do. If there are young children at home we also discuss edge design and safety at this stage.",
      },
      {
        question: "How much maintenance does a pond need?",
        answer:
          "Routine care is light — clearing surface debris, rinsing filter media periodically, topping up for summer evaporation and feeding the fish. Once or twice a year the pond benefits from a deeper clean and a check of the pump and plumbing. We design with accessible plumbing so this is a simple job, and we offer it as part of a maintenance contract if you prefer.",
      },
      {
        question: "My pond water keeps turning green. Can you fix an existing pond?",
        answer:
          "Yes, and it is a common call. Green water is almost always undersized filtration, poor circulation, too many fish for the volume, or too much direct sun with no plant cover. We diagnose which of those it is, then correct it — usually by upgrading filtration and circulation and adding surface-covering aquatic plants, rather than dosing chemicals that only mask the problem.",
      },
      {
        question: "Can you build a small water feature instead of a full pond?",
        answer:
          "Yes. Wall-mounted features, bubbling urns, pebble fountains and compact cascades work very well in courtyards, entrances and even balconies. They give you the sound and movement of water, need very little space, use almost no water once filled, and are far simpler to maintain than a stocked pond.",
      },
      {
        question: "What does a pond cost to run?",
        answer:
          "Less than most people assume. The main running cost is the pump, which on a typical domestic pond uses roughly as much electricity as a ceiling fan. Water consumption is minimal after filling — you are only replacing evaporation. We specify energy-efficient pumps sized to the actual volume rather than oversized ones.",
      },
    ],
    nearbyAreas: ["Kichha", "Pantnagar", "Gadarpur", "Haldwani", "Kashipur", "Sitarganj"],
  },

  // =========================================================================
  // 9. KITCHEN GARDENING — RUDRAPUR
  // =========================================================================
  {
    slug: "kitchen-garden-setup-in-rudrapur",
    city: "Rudrapur",
    serviceSlug: "kitchen-gardening",
    shortLabel: "Kitchen Gardens in Rudrapur",
    emoji: "🥬",
    metaTitle: "Kitchen Garden Setup in Rudrapur — Organic Vegetable Gardens",
    metaDescription:
      "Organic kitchen garden setup in Rudrapur — raised beds, containers, drip irrigation, compost and a season-wise planting plan. Grow your own vegetables on a terrace or backyard. Call +91 88688 57255.",
    keywords: [
      "kitchen garden setup rudrapur",
      "organic vegetable garden rudrapur",
      "terrace vegetable garden rudrapur",
      "raised bed gardening india",
      "home vegetable garden design",
      "organic farming setup uttarakhand",
      "grow vegetables at home rudrapur",
      "school kitchen garden project",
    ],
    h1: "Organic Kitchen Garden Setup in Rudrapur",
    heroSubtitle:
      "Grow your own vegetables in your backyard or on your terrace — beds built, soil mixed, irrigation installed and the first crop planted for you.",
    intro: [
      "Rudrapur sits in some of the most fertile agricultural land in the country. There is something slightly absurd about living here and buying coriander in plastic.",
      "We set up organic kitchen gardens for homes, schools and offices — **raised beds or containers, the right soil mix, drip irrigation, compost setup and a season-wise planting plan** that tells you what to sow and when. Then we plant the first crop with you so it actually gets started.",
      "No synthetic pesticides are used. Pest management is neem-based, with companion planting and natural traps, and the soil is built up with compost and vermicompost so it keeps producing year after year rather than being exhausted in two seasons.",
    ],
    localAngle: {
      title: "The Rudrapur growing calendar",
      body: "The Terai climate gives you two strong growing seasons and one difficult stretch. Planning around that is most of what makes a kitchen garden succeed here.",
      points: [
        "**Rabi, October to February** — the easiest and most productive season. Spinach, methi, coriander, mustard, radish, carrot, peas, cauliflower, cabbage and broccoli all do well with minimal intervention.",
        "**Kharif and summer, March to September** — tomato, chilli, brinjal, okra, cucumber, bottle gourd, pumpkin and beans. Needs more attention for pests and watering, but the yields are good.",
        "**Peak summer, May to June** — the hardest stretch. Shade netting, mulching and early-morning watering carry the garden through; without them, young plants simply do not make it.",
        "**Monsoon drainage** — the single most common reason kitchen gardens fail here is roots sitting in water in July and August. Raised beds solve it almost entirely, which is why we default to them.",
      ],
    },
    benefits: [
      {
        title: "Raised beds that drain",
        description:
          "Built-up beds or containers filled with a proper mix — the direct answer to Rudrapur's monsoon waterlogging, which is what kills most home vegetable patches.",
        icon: Salad,
      },
      {
        title: "Genuinely organic",
        description:
          "Compost, vermicompost and organic amendments, with neem-based pest management and companion planting. No synthetic pesticides at any stage.",
        icon: Recycle,
      },
      {
        title: "Season-wise planting plan",
        description:
          "A written calendar for your specific site telling you what to sow each month — so the beds stay productive instead of empty half the year.",
        icon: Sun,
      },
      {
        title: "Taught, not just installed",
        description:
          "We walk you through watering, feeding, pest checks and harvesting in plain language, and can stay on for a few months of visits while you find your feet.",
        icon: Sprout,
      },
    ],
    faqs: [
      {
        question: "How much space do I need for a kitchen garden in Rudrapur?",
        answer:
          "Much less than people assume. A sunny balcony of 50 to 100 square feet already gives a steady supply of leafy greens, herbs, chillies and tomatoes in containers. A 200 to 400 square foot terrace or backyard with raised beds can cover a meaningful share of a family's vegetable needs through the season. What matters more than area is sunlight — you want at least 5 to 6 hours of direct sun.",
      },
      {
        question: "Which vegetables grow best in Rudrapur, and when?",
        answer:
          "The winter season from October to February is the most rewarding — spinach, methi, coriander, mustard, radish, carrot, peas, cauliflower and cabbage all thrive with little trouble. From March to September you can grow tomato, chilli, brinjal, okra, cucumber, bottle gourd and pumpkin, though they need more attention for pests and water. Herbs like mint, curry leaf and lemongrass produce nearly all year. We give you a calendar specific to your site.",
      },
      {
        question: "Is the produce completely organic?",
        answer:
          "Yes. We build the soil with compost and vermicompost, and manage pests using neem oil, companion planting and natural traps. No synthetic pesticides are used at any stage. We also set up a simple composting system so your kitchen waste feeds the garden, which closes the loop and cuts your input cost to almost nothing.",
      },
      {
        question: "I have never gardened before. Will I be able to manage it?",
        answer:
          "That is exactly who this service is designed for. We build the beds, mix and fill the soil, install drip irrigation so watering is automatic, plant the first crop and then explain the routine in simple terms. Many clients also take a few months of maintenance visits while they build confidence, after which most manage comfortably on their own.",
      },
      {
        question: "How soon will I be able to harvest?",
        answer:
          "Faster than you would expect if the first planting is chosen well. Leafy greens like spinach, methi and coriander are ready in 25 to 40 days, and radish in around 30. Tomato, chilli and brinjal take 60 to 90 days from transplanting. We usually mix fast and slow crops in the first round so you are harvesting something within a month.",
      },
      {
        question: "Do you set up kitchen gardens for schools and offices in Rudrapur?",
        answer:
          "Yes. School kitchen gardens are a popular request and work well as a hands-on teaching space, and office terrace farms are increasingly common. For both we handle the setup and offer scheduled maintenance, so the garden does not depend on one enthusiastic staff member who may change jobs.",
      },
    ],
    nearbyAreas: ["Kichha", "Pantnagar", "Gadarpur", "Dineshpur", "Haldwani", "Sitarganj"],
  },

  // =========================================================================
  // 10. INDUSTRIAL / CORPORATE LANDSCAPING — PANTNAGAR & SIDCUL
  // =========================================================================
  {
    slug: "industrial-landscaping-in-pantnagar",
    city: "Pantnagar",
    serviceSlug: "landscaping",
    shortLabel: "Industrial Landscaping",
    emoji: "🏭",
    metaTitle: "Industrial & Corporate Landscaping in Pantnagar & SIDCUL",
    metaDescription:
      "Industrial and corporate landscaping in Pantnagar, SIDCUL and Rudrapur — factory campus greenery, green belts, entrance landscaping and AMC maintenance. Compliance-friendly, low-water design. Call +91 88688 57255.",
    keywords: [
      "industrial landscaping pantnagar",
      "factory landscaping sidcul",
      "corporate campus landscaping rudrapur",
      "green belt development factory",
      "industrial garden maintenance contract",
      "commercial landscaping uttarakhand",
      "office campus landscaping pantnagar",
      "pollution control green belt plantation",
    ],
    h1: "Industrial & Corporate Landscaping in Pantnagar and SIDCUL",
    heroSubtitle:
      "Green belts, campus landscaping and maintenance contracts for factories and corporate sites across the Pantnagar–Rudrapur industrial belt.",
    intro: [
      "An industrial campus has different landscaping priorities from a home. It needs to meet green-belt obligations, survive dust and heat with minimal babysitting, look presentable when a client or auditor visits, and stay within a maintenance budget that finance will actually approve.",
      "We handle landscaping across the Pantnagar, SIDCUL and Rudrapur industrial belt — **green belt and boundary plantation, entrance and gate landscaping, admin block frontages, canteen and seating areas, internal avenue planting and lawn areas**, together with the irrigation and the long-term maintenance contract.",
      "We are set up for the way industrial clients work: written scope, itemised quotation, GST invoicing, safety compliance on site, and scheduled maintenance visits with a reporting format your facility team can file.",
    ],
    localAngle: {
      title: "What an industrial site needs that a home garden does not",
      body: "Factory landscaping fails when it is specified like a residential garden. These are the differences that matter in the Pantnagar belt.",
      points: [
        "**Green belt obligations** — many units have a plantation requirement tied to their environmental clearance. We plan species and density to meet it with trees that will actually survive, and document what was planted.",
        "**Dust tolerance** — industrial dust coats foliage fast. We use species with tough, glossy, washable leaves that still look acceptable between cleanings, rather than delicate ornamentals that look shabby in a fortnight.",
        "**Low-intervention design** — there is no gardener on site every morning. Planting has to survive on scheduled visits, so we specify hardy species and automated irrigation rather than anything that needs daily attention.",
        "**Safety and sight lines** — planting kept clear of fire routes, hydrants, gate sight lines and vehicle movement paths, with root systems kept away from underground services and paving.",
      ],
    },
    benefits: [
      {
        title: "Green belt plantation",
        description:
          "Boundary and buffer planting designed to meet environmental clearance requirements, with species and density chosen for survival rather than just numbers on paper.",
        icon: Factory,
      },
      {
        title: "Entrance that represents the company",
        description:
          "Gate, driveway and admin block landscaping built to look right on the day a client, auditor or head-office visitor arrives.",
        icon: Building2,
      },
      {
        title: "Low-water, low-maintenance planting",
        description:
          "Hardy, dust-tolerant species on zoned automatic irrigation — designed around a realistic maintenance budget, not an ideal one.",
        icon: ShieldCheck,
      },
      {
        title: "AMC with proper documentation",
        description:
          "Annual maintenance contracts with a fixed visit schedule, defined scope, safety compliance on site, GST invoicing and reports your facility team can file.",
        icon: Wrench,
      },
    ],
    faqs: [
      {
        question: "Do you work inside the SIDCUL and Pantnagar industrial area?",
        answer:
          "Yes, it is one of our core service areas. We work across the Pantnagar and SIDCUL estates and the wider Rudrapur industrial belt, and we are familiar with site entry procedures, gate pass requirements, safety briefings and working around plant operations without disrupting them.",
      },
      {
        question: "Can you help us meet our green belt plantation requirement?",
        answer:
          "Yes. We plan boundary and buffer plantation to the species and density your clearance specifies, choosing trees suited to the Terai climate and to industrial conditions so the plantation actually survives to the point of inspection. We also provide documentation of what was planted and where, and can take up the aftercare that keeps the survival rate high.",
      },
      {
        question: "What kind of maintenance contract do you offer for factories?",
        answer:
          "Annual maintenance contracts with a fixed visit schedule and a written scope — typically mowing, pruning, hedge trimming, weeding, fertilising, pest control, seasonal replanting, irrigation servicing and green belt aftercare. You get GST invoicing, safety compliance on site, and a visit report format your facility or EHS team can file.",
      },
      {
        question: "Which plants survive industrial dust and heat here?",
        answer:
          "For trees we rely on species like Neem, Peepal, Ashoka, Kanji, Jamun, Gulmohar and Bottlebrush, which are proven in this belt. For shrubs and hedges, Bougainvillea, Duranta, Nerium, Clerodendrum and Ixora handle dust and heat well. For ground cover and screening we use hardy grasses and Vetiver. The common factor is tough, washable foliage and low water demand.",
      },
      {
        question: "Can you work around our production schedule?",
        answer:
          "Yes. We routinely schedule work around shift timings, shutdown periods and audit dates, and can do noisier or more disruptive activity during planned maintenance windows. Site safety requirements, PPE and gate procedures are followed as your EHS team specifies.",
      },
      {
        question: "Do you provide quotations in a format we can process?",
        answer:
          "Yes. We provide itemised written quotations with scope, specifications, quantities and timelines, suitable for comparative evaluation and purchase order processing, along with GST invoicing and the vendor documentation most industrial clients require.",
      },
    ],
    nearbyAreas: ["Rudrapur", "Kichha", "Sitarganj", "Gadarpur", "Haldwani", "Kashipur"],
  },
];

/** Slug se landing page nikaalta hai. */
export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}

/** Ek sheher ke baaki landing pages — internal linking ke liye. */
export function relatedLandingPages(slug: string, limit = 3): LandingPage[] {
  const current = getLandingPageBySlug(slug);
  if (!current) return LANDING_PAGES.slice(0, limit);
  const sameCity = LANDING_PAGES.filter(
    (p) => p.slug !== slug && p.city === current.city
  );
  const others = LANDING_PAGES.filter(
    (p) => p.slug !== slug && p.city !== current.city
  );
  return [...sameCity, ...others].slice(0, limit);
}
