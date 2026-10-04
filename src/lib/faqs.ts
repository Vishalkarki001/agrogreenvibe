// ===========================================================================
// FAQs — har service ka apna set + general questions.
//
// Ye sirf website par dikhne ke liye nahi hain: har FAQ block ke saath
// FAQPage JSON-LD bhi jaata hai, jisse Google search result me expandable
// questions dikhte hain (zyada jagah ghere, zyada clicks).
//
// Likhte waqt do baat dhyan me rakhi gayi hai:
//   1. Jawab asli sawaalon ke hain jo customer poochta hai.
//   2. Sheher ke naam (Rudrapur, Haldwani) natural tareeke se aate hain —
//      keyword stuffing nahi, warna Google penalise karta hai.
// ===========================================================================

import type { FaqItem } from "@/lib/schema";

export type { FaqItem };

/** Har page par dikhne laayak general sawaal. */
export const GENERAL_FAQS: FaqItem[] = [
  {
    question: "Which areas do you provide landscaping and gardening services in?",
    answer:
      "We work across the Kumaon and Terai belt of Uttarakhand. Our main service areas are Rudrapur and Haldwani, and we regularly take up projects in Kashipur, Pantnagar, Kichha, Sitarganj, Gadarpur, Bazpur, Jaspur, Khatima, Lalkuan, Ramnagar, Dineshpur and Nainital. For larger commercial or township projects we travel anywhere in Uttarakhand and western Uttar Pradesh.",
  },
  {
    question: "Do you charge for a site visit or a quotation?",
    answer:
      "No. The first site visit and the written quotation are completely free within Rudrapur, Haldwani and nearby towns. Our team visits your site, checks the soil, sunlight and drainage, understands what you want, and then sends you an itemised estimate — with no obligation to proceed.",
  },
  {
    question: "How much does landscaping cost in Rudrapur or Haldwani?",
    answer:
      "There is no single rate, because cost depends on the area in square feet, the kind of work (soft landscaping like lawns and plants, or hard landscaping like paving, walls and water features), the plant species you choose, and site conditions. A small home garden costs a fraction of a township park. After the free site visit we give you a clear, itemised quote so you know exactly what you are paying for — no hidden charges.",
  },
  {
    question: "How long does a landscaping project take to complete?",
    answer:
      "A compact home garden or terrace garden usually takes 1 to 3 weeks. A large villa landscape or society park can take 1 to 3 months depending on hardscaping, civil work and plant availability. We share a written timeline with the quotation and keep you updated at every stage.",
  },
  {
    question: "Do you maintain the garden after the project is finished?",
    answer:
      "Yes. Most of our clients continue with a monthly or annual maintenance contract. This covers mowing, pruning, weeding, fertilising, pest control, seasonal replanting and irrigation checks — so the garden keeps looking the way it did on day one. Maintenance can be booked even if we did not build the garden originally.",
  },
  {
    question: "Do you take on commercial, industrial and township projects?",
    answer:
      "Yes. Alongside homes and villas we handle factory and corporate campus landscaping in the Pantnagar and SIDCUL industrial belt, hotel and resort gardens, school and hospital grounds, and society or township parks. We can work to architect drawings or design the whole scheme ourselves.",
  },
  {
    question: "Which plants work best in the Rudrapur and Haldwani climate?",
    answer:
      "The Terai region has hot, humid summers, a heavy monsoon and cool winters, so we favour species that handle all three. Popular reliable choices include Bougainvillea, Hibiscus, Ixora, Plumeria, Ashoka, Neem, Gulmohar, bamboo varieties, Sansevieria and ornamental grasses, with seasonal flowers like Marigold, Petunia and Salvia for colour. We always pick species suited to your specific soil and sunlight rather than a fixed list.",
  },
  {
    question: "How do I get started with Agro Greenvibe?",
    answer:
      "Call or WhatsApp us on +91 88688 57255, or fill in the contact form on this website. We will fix a convenient time for a free site visit, discuss your ideas and budget, and send you a design concept and quotation. Once you approve, work usually begins within a week.",
  },
];

/** Service-wise FAQs — key = service slug (src/lib/services.ts se match karta hai). */
export const SERVICE_FAQS: Record<string, FaqItem[]> = {
  landscaping: [
    {
      question: "What is included in your landscaping service?",
      answer:
        "Everything from the first drawing to the final plant. That means site survey and soil testing, concept and layout design, levelling and soil preparation, hardscaping (pathways, patios, retaining walls, kerbing), lawn installation, tree and shrub plantation, irrigation, outdoor lighting and a final handover clean-up. You deal with one team for the whole job instead of coordinating five different contractors.",
    },
    {
      question: "Do you provide a 3D design before starting the work?",
      answer:
        "Yes. For most landscaping projects we prepare a layout plan and a 3D visualisation so you can see what your garden will look like before any digging starts. You can ask for changes at that stage — it is far cheaper to move a pathway on screen than on site.",
    },
    {
      question: "Can you redesign an existing garden instead of starting fresh?",
      answer:
        "Absolutely, and it is often the smarter option. We assess what is already healthy and worth keeping — mature trees, usable paving, good topsoil — and build the new design around it. Renovating an existing garden usually costs less than a complete rebuild.",
    },
    {
      question: "What is the difference between soft and hard landscaping?",
      answer:
        "Soft landscaping is the living part: lawns, plants, shrubs, trees, soil and mulch. Hard landscaping is the built part: paving, pathways, retaining walls, decking, pergolas, steps and water features. A good landscape needs both — the hardscape gives the garden its structure and the softscape gives it life. We handle both in-house.",
    },
    {
      question: "Will landscaping damage my boundary wall or building foundation?",
      answer:
        "Not when it is planned properly. We keep large trees at a safe distance from structures, use root barriers where needed, and design drainage so water flows away from your building rather than collecting against it. Poor drainage is the single biggest cause of landscaping-related damage, and it is exactly what the site survey is for.",
    },
    {
      question: "What is the best season to start a landscaping project in Uttarakhand?",
      answer:
        "Civil and hardscaping work can start any time except peak monsoon. For planting, the best windows are February to March and September to November, when the weather is mild and plants establish quickly. That said, with proper irrigation and shade management we plant successfully through most of the year.",
    },
    {
      question: "Do you work with architects and builders?",
      answer:
        "Yes. We regularly execute landscape drawings prepared by architects, and we also work alongside builders during construction so that drainage, soil depth and service lines are planned correctly before the garden goes in.",
    },
  ],

  "terrace-gardening": [
    {
      question: "Will a terrace garden cause leakage or seepage in my roof?",
      answer:
        "Not if the waterproofing is done correctly, and that is where we start every terrace project. We apply a proper waterproof membrane, add a protective screed, lay a drainage layer and only then build the garden on top. We also keep planters raised so water never sits directly on the slab. Leakage happens when people skip these layers and put soil straight on the roof.",
    },
    {
      question: "Can my terrace take the weight of a garden?",
      answer:
        "Most RCC roofs can, but we never assume. We check the slab and plan the layout so that heavy elements like large planters and water features sit over beams and load-bearing walls rather than the middle of a span. We also use lightweight growing media — a cocopeat, compost and perlite mix instead of heavy garden soil — which cuts the load dramatically.",
    },
    {
      question: "How much maintenance does a terrace garden need?",
      answer:
        "Less than people expect. With drip irrigation on a timer, most terrace gardens need about 30 minutes of attention a week for deadheading and checking plants, plus a seasonal pruning and feeding round. We also offer monthly maintenance visits if you would rather not do it yourself.",
    },
    {
      question: "What can I actually grow on a terrace in Rudrapur?",
      answer:
        "More than you would think. Ornamentals like Bougainvillea, Hibiscus, Adenium, succulents and ornamental grasses do very well in full sun. For food, terrace gardens here produce excellent tomatoes, chillies, brinjal, spinach, methi, coriander, mint and seasonal gourds. In the harsher summer months we use shade nets over the more sensitive beds.",
    },
    {
      question: "Can you build a vertical garden or green wall as well?",
      answer:
        "Yes. Vertical gardens are ideal when floor space is tight — a balcony, a boundary wall, a reception area or an office facade. We install the frame, the irrigation and the planting modules, and choose species suited to how much light that particular wall gets. Both outdoor and indoor green walls are available.",
    },
    {
      question: "How long does it take to set up a terrace garden?",
      answer:
        "A straightforward container-based terrace garden can be completed in 4 to 7 days. If waterproofing, decking, pergolas or a seating area are involved, allow 2 to 4 weeks. Waterproofing in particular needs curing time that cannot be rushed.",
    },
  ],

  parks: [
    {
      question: "Do you develop parks for housing societies and townships?",
      answer:
        "Yes, this is one of our core services. We handle society parks, township central greens, gated-community gardens and municipal park development — from master planning through execution and long-term maintenance. We are comfortable working with RWA committees and builders, including phased budgets and staged handovers.",
    },
    {
      question: "What facilities can you include in a park?",
      answer:
        "Typically: walking and jogging tracks, children's play zones with safe surfacing, open lawn areas, seating and shaded pergolas, pathway and bollard lighting, fountains or water bodies, outdoor gym equipment, planting beds and tree avenues, and an irrigation system to keep it all alive.",
    },
    {
      question: "How do you keep long-term maintenance cost low?",
      answer:
        "By designing for it from the start. We choose hardy, climate-suited and low-water species, group plants by water requirement, use efficient drip and sprinkler zones, and specify durable paving and track surfaces. A park designed only for the opening-day photograph becomes expensive within two years; one designed for maintenance stays affordable.",
    },
    {
      question: "Can the work be done in phases to suit our budget?",
      answer:
        "Yes, and for most societies that is the practical route. We prepare one master plan and then split it into phases — for example tracks and lawns first, then play area and lighting, then water features. Each phase looks complete on its own, so the park is usable throughout.",
    },
    {
      question: "Do you provide ongoing park maintenance after handover?",
      answer:
        "Yes. We offer annual maintenance contracts covering mowing, hedge and tree trimming, fertilising, pest control, seasonal flower replacement, irrigation servicing and general upkeep, with a fixed monthly schedule so the committee knows exactly what is being done and when.",
    },
    {
      question: "How long does a park project take?",
      answer:
        "A small society park of a few thousand square feet usually takes 3 to 6 weeks. Larger township parks with tracks, civil structures and lighting typically run 2 to 4 months. The timeline is shared in writing with the quotation.",
    },
  ],

  ponds: [
    {
      question: "What is the difference between a natural and an artificial pond?",
      answer:
        "A natural pond relies on plants, beneficial bacteria and balanced stocking to clean itself, so it looks and behaves like a real water body and uses very little equipment. An artificial pond uses liners, pumps and mechanical filtration, which gives you precise control over water clarity and level. Natural ponds suit large, informal gardens; artificial ponds suit compact, formal spaces and koi keeping. We build both and will tell you honestly which fits your site.",
    },
    {
      question: "Will a garden pond breed mosquitoes?",
      answer:
        "A properly built pond does not. Mosquitoes breed in stagnant water, and our ponds always have circulation through a pump, fountain or waterfall. Adding fish such as guppies or koi removes any remaining larvae. Problems only occur in neglected ponds where the pump has been switched off for weeks.",
    },
    {
      question: "How much maintenance does a pond need?",
      answer:
        "Routine care is light: clearing surface debris, rinsing the filter media periodically, topping up for evaporation and feeding the fish. Once or twice a year the pond benefits from a deeper clean and a check of pump and plumbing. We offer this as part of a maintenance contract if you prefer not to handle it.",
    },
    {
      question: "Can you keep koi fish in the Rudrapur climate?",
      answer:
        "Yes, koi do well here provided the pond is built for them. They need adequate depth so the water stays cool in summer, strong biological filtration because koi produce a lot of waste, good aeration, and some shade cover. We design koi ponds with those requirements built in rather than adding fish to an ornamental pond as an afterthought.",
    },
    {
      question: "Do you build fountains and waterfalls separately?",
      answer:
        "Yes. Standalone fountains, cascading waterfalls, wall-mounted water features and rock streams can be installed independently of a full pond. They work beautifully in entrances, courtyards and reception areas, and take up far less space.",
    },
    {
      question: "How deep does a garden pond need to be?",
      answer:
        "It depends on purpose. A purely ornamental pond with plants works at 1.5 to 2 feet. If you want fish, and especially koi, we recommend at least 3 to 4 feet so the water temperature stays stable through summer and the fish have somewhere to retreat. We always discuss safety too if there are young children at home.",
    },
  ],

  "kitchen-gardening": [
    {
      question: "How much space do I need for a kitchen garden?",
      answer:
        "Far less than most people assume. A sunny balcony of 50 to 100 square feet already supports a steady supply of leafy greens, herbs, chillies and tomatoes in containers. A 200 to 400 square foot terrace or backyard with raised beds can meaningfully cover a family's vegetable needs through the season.",
    },
    {
      question: "Is the produce completely organic?",
      answer:
        "Yes. We set up kitchen gardens with compost, vermicompost and organic amendments, and manage pests with neem oil, companion planting and natural traps. No synthetic pesticides are used. We also show you how to compost your own kitchen waste so the garden keeps feeding itself.",
    },
    {
      question: "Which vegetables grow best here, and when?",
      answer:
        "In the Terai climate the winter season (October to February) is excellent for spinach, methi, coriander, mustard, radish, carrot, peas, cauliflower and cabbage. The summer and monsoon season (March to September) suits tomato, brinjal, chilli, okra, cucumber, bottle gourd and pumpkin. Herbs like mint, curry leaf and lemongrass grow nearly all year. We prepare a season-wise planting calendar for your specific site.",
    },
    {
      question: "I have never gardened before. Can you still set it up for me?",
      answer:
        "That is exactly who this service is for. We build the beds or containers, fill them with the right soil mix, install drip irrigation, plant the first crop and then walk you through watering, feeding and harvesting in simple terms. Many clients also start with a few months of maintenance visits while they find their feet.",
    },
    {
      question: "How soon will I be able to harvest something?",
      answer:
        "Quickly, if we plan for it. Leafy greens like spinach, methi and coriander are ready in 25 to 40 days. Radish takes around 30 days. Tomato, chilli and brinjal take 60 to 90 days from transplanting. We usually mix fast and slow crops in the first planting so you see results early.",
    },
    {
      question: "Do you set up kitchen gardens for schools and offices?",
      answer:
        "Yes. School kitchen gardens are a popular request and work well as a teaching space, and office terrace farms are increasingly common. We handle the setup and can provide scheduled maintenance so the garden does not depend on one enthusiastic staff member.",
    },
  ],

  "aranya-cottages": [
    {
      question: "What exactly are Aranya Cottages?",
      answer:
        "Aranya Cottages is our eco-cottage design and build service — nature-integrated cottages for farmhouses, resorts, homestays and private retreats. The idea is to place a comfortable structure into a landscape without flattening it, using natural materials and a layout that works with the existing trees, slope and views.",
    },
    {
      question: "What materials do you build with?",
      answer:
        "We favour locally available and low-impact materials — bamboo, timber, local stone, mud and lime finishes, and clay or thatch roofing where suitable — combined with modern waterproofing, insulation and structural elements so the cottage is durable and genuinely comfortable to live in.",
    },
    {
      question: "Can you design cottages for a commercial resort or homestay?",
      answer:
        "Yes. We take on multi-unit resort and homestay projects, including site master planning, cottage clusters, connecting pathways, the surrounding landscape and shared outdoor areas such as dining decks and bonfire courts.",
    },
    {
      question: "Do you also handle the landscape around the cottage?",
      answer:
        "Always — in fact that is the point of the service. The cottage and its setting are designed together, so pathways, planting, lighting, seating and water features feel like one scheme rather than a building with a garden added later.",
    },
    {
      question: "How long does a cottage project take?",
      answer:
        "A single compact cottage typically takes 2 to 4 months from design approval to handover. Multi-unit resort projects run longer and are usually phased. Timelines depend heavily on site access, terrain and material availability, and we commit to them in writing before starting.",
    },
  ],

  "other-services": [
    {
      question: "Do you offer annual garden maintenance contracts?",
      answer:
        "Yes. Our annual maintenance contracts cover scheduled visits for mowing, pruning, hedge trimming, weeding, fertilising, pest and disease control, seasonal flower replacement and irrigation checks. You get a fixed visit schedule and a single point of contact, which works out far cheaper than calling someone in only when things go wrong.",
    },
    {
      question: "Can you maintain a garden that someone else built?",
      answer:
        "Yes, and we do it often. We start with an assessment visit to see what condition the garden, soil and irrigation are in, fix anything urgent, and then move to a regular maintenance schedule.",
    },
    {
      question: "Do you handle tree pruning and tree removal?",
      answer:
        "We handle pruning, crown thinning, deadwood removal, shaping and tree health treatment. Removal of large or hazardous trees is taken up case by case, and where a municipal permission is required we will tell you clearly rather than cutting first.",
    },
    {
      question: "My lawn has turned patchy and yellow. Can it be fixed?",
      answer:
        "Usually, yes. Patchy lawns in this region are most often caused by compacted soil, poor drainage, fungal disease, grub infestation or simply uneven watering. We diagnose the actual cause first, then treat it through aeration, correction of the irrigation pattern, targeted treatment and reseeding or patch turfing. Replacing the whole lawn is a last resort, not a first one.",
    },
    {
      question: "Do you supply plants and pots separately?",
      answer:
        "Yes. We supply ornamental and indoor plants, saplings, seasonal flowers, planters, soil mixes, compost and mulch, with delivery across Rudrapur, Haldwani and nearby towns. We can also install and arrange them for you.",
    },
    {
      question: "Do you maintain indoor plants for offices?",
      answer:
        "Yes. We supply and maintain indoor plants for offices, showrooms, hotels and clinics, with scheduled visits for watering, cleaning, rotation and replacement of any plant that is not thriving — so your reception always looks the way it should.",
    },
  ],
};

/** Ek service ke FAQs; na mile to general list. */
export function faqsFor(slug: string): FaqItem[] {
  return SERVICE_FAQS[slug] ?? GENERAL_FAQS;
}
