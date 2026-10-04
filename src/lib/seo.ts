// ===========================================================================
// SEO + GEO CONFIG — poori website ki search optimization ek hi jagah.
//
// Yahan teen cheezein hain:
//   1. SITE / GEO  — domain, coordinates, address (schema.org ke liye)
//   2. CITIES      — jin shehron me hum service dete hain (local SEO ke liye)
//   3. KEYWORDS    — service-wise aur city-wise keyword lists
//
// Naya sheher ya service add karni ho to bas yahan add karo — sitemap,
// metadata aur landing pages sab apne aap update ho jaate hain.
// ===========================================================================

/** Live domain — canonical URLs, sitemap aur Open Graph isi par bante hain. */
export const SITE_URL = "https://www.agrogreenvibeindia.com";

/** Google ko exact location batane ke liye (LocalBusiness schema + geo meta tags). */
export const GEO = {
  latitude: 28.9845,
  longitude: 79.4141,
  streetAddress: "Ground Floor, Plot 023, Agro Greenvibe India",
  addressLocality: "Rudrapur",
  addressRegion: "Uttarakhand",
  postalCode: "263153",
  addressCountry: "IN",
  /** ISO 3166-2 region code — geo.region meta tag ke liye. */
  regionCode: "IN-UT",
} as const;

// ---------------------------------------------------------------------------
// SERVICE AREAS — har sheher ka apna naam, slug aur coordinates.
// `tier: 1` = primary target (Rudrapur, Haldwani) — inke apne landing pages hain.
// ---------------------------------------------------------------------------

export interface ServiceArea {
  name: string;
  slug: string;
  district: string;
  lat: number;
  lng: number;
  tier: 1 | 2;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Rudrapur", slug: "rudrapur", district: "Udham Singh Nagar", lat: 28.9845, lng: 79.4141, tier: 1 },
  { name: "Haldwani", slug: "haldwani", district: "Nainital", lat: 29.2183, lng: 79.513, tier: 1 },
  { name: "Kashipur", slug: "kashipur", district: "Udham Singh Nagar", lat: 29.2104, lng: 78.9619, tier: 2 },
  { name: "Pantnagar", slug: "pantnagar", district: "Udham Singh Nagar", lat: 29.0222, lng: 79.4908, tier: 2 },
  { name: "Kichha", slug: "kichha", district: "Udham Singh Nagar", lat: 28.9122, lng: 79.5178, tier: 2 },
  { name: "Sitarganj", slug: "sitarganj", district: "Udham Singh Nagar", lat: 28.9297, lng: 79.7054, tier: 2 },
  { name: "Gadarpur", slug: "gadarpur", district: "Udham Singh Nagar", lat: 29.0431, lng: 79.2167, tier: 2 },
  { name: "Bazpur", slug: "bazpur", district: "Udham Singh Nagar", lat: 29.1527, lng: 79.1072, tier: 2 },
  { name: "Jaspur", slug: "jaspur", district: "Udham Singh Nagar", lat: 29.2817, lng: 78.8208, tier: 2 },
  { name: "Khatima", slug: "khatima", district: "Udham Singh Nagar", lat: 28.9216, lng: 79.9706, tier: 2 },
  { name: "Lalkuan", slug: "lalkuan", district: "Nainital", lat: 29.0583, lng: 79.5181, tier: 2 },
  { name: "Nainital", slug: "nainital", district: "Nainital", lat: 29.3919, lng: 79.4542, tier: 2 },
  { name: "Ramnagar", slug: "ramnagar", district: "Nainital", lat: 29.3947, lng: 79.1272, tier: 2 },
  { name: "Dineshpur", slug: "dineshpur", district: "Udham Singh Nagar", lat: 29.0097, lng: 79.2878, tier: 2 },
];

/** Sirf primary cities — jin par hum sabse zyada focus karte hain. */
export const PRIMARY_AREAS = SERVICE_AREAS.filter((a) => a.tier === 1);

/** areaServed schema aur "we also serve" sections ke liye flat name list. */
export const AREA_NAMES = SERVICE_AREAS.map((a) => a.name);

// ---------------------------------------------------------------------------
// KEYWORDS
// ---------------------------------------------------------------------------

/** Har page par lagne wale core brand + category keywords. */
export const CORE_KEYWORDS: string[] = [
  "Agro Greenvibe",
  "Agro Greenvibe India",
  "landscaping company in Rudrapur",
  "landscaping services Rudrapur",
  "gardening services Rudrapur",
  "landscaping in Haldwani",
  "gardening services Haldwani",
  "best landscaping company Uttarakhand",
  "landscaping services in India",
  "garden designer Uttarakhand",
  "professional gardeners near me",
  "landscape design and build",
  "green space development company",
  "horticulture services Uttarakhand",
  "garden maintenance contract",
  "lawn care services Rudrapur",
  "plant nursery Rudrapur",
  "landscaping contractor Udham Singh Nagar",
];

/**
 * Service-specific keywords. Key = service ka slug (src/lib/services.ts se).
 * City combos `expandWithCities()` se apne aap ban jaate hain.
 */
export const SERVICE_KEYWORDS: Record<string, string[]> = {
  landscaping: [
    "landscaping services",
    "landscape design",
    "landscape contractor",
    "garden landscaping",
    "villa landscaping",
    "commercial landscaping",
    "industrial landscaping",
    "residential landscape design",
    "hardscaping and paving",
    "lawn installation and turfing",
    "outdoor landscape lighting",
    "3D landscape design",
  ],
  "terrace-gardening": [
    "terrace gardening",
    "rooftop garden",
    "terrace garden design",
    "vertical garden",
    "green wall installation",
    "balcony garden setup",
    "terrace waterproofing for garden",
    "container gardening",
  ],
  parks: [
    "park development",
    "mini park design",
    "township park developer",
    "society park maintenance",
    "public park landscaping",
    "jogging track development",
    "children play area landscaping",
  ],
  ponds: [
    "natural pond construction",
    "artificial pond design",
    "water feature design",
    "garden fountain installation",
    "koi pond builder",
    "waterfall design for garden",
    "pond filtration and maintenance",
  ],
  "kitchen-gardening": [
    "kitchen garden setup",
    "organic vegetable garden",
    "home vegetable garden design",
    "raised bed gardening",
    "terrace vegetable garden",
    "organic farming setup",
    "seasonal crop planning",
  ],
  "aranya-cottages": [
    "eco cottage design",
    "nature resort landscaping",
    "farm house cottage builder",
    "eco friendly cottage construction",
    "resort garden design",
  ],
  "other-services": [
    "garden maintenance services",
    "tree pruning services",
    "tree care and trimming",
    "lawn mowing service",
    "garden cleanup service",
    "annual garden maintenance contract",
    "plant supply and installation",
    "indoor plant maintenance",
  ],
};

/**
 * Kisi bhi keyword list ko har sheher ke saath jod deta hai.
 * ["landscaping services"] -> ["landscaping services in Rudrapur", "landscaping services in Haldwani", ...]
 */
export function expandWithCities(
  keywords: string[],
  areas: ServiceArea[] = PRIMARY_AREAS
): string[] {
  return areas.flatMap((area) => keywords.map((k) => `${k} in ${area.name}`));
}

/**
 * Ek page ke liye final keyword list. Duplicates hata ke, core + service +
 * city combos sab mila kar deta hai.
 */
export function buildKeywords(serviceSlug?: string, extra: string[] = []): string[] {
  const serviceKeys = serviceSlug ? SERVICE_KEYWORDS[serviceSlug] ?? [] : [];
  // Service page par uske apne keywords ko sheher ke saath expand karo;
  // generic pages par sirf top-level service names expand hote hain.
  const base = serviceKeys.length > 0 ? serviceKeys : TOP_SERVICE_TERMS;
  return dedupe([
    ...extra,
    ...serviceKeys,
    ...expandWithCities(base.slice(0, 6)),
    ...CORE_KEYWORDS,
  ]);
}

/** Sabse zyada search hone wale short service terms — city expansion ke liye. */
export const TOP_SERVICE_TERMS = [
  "landscaping",
  "gardening services",
  "garden design",
  "terrace gardening",
  "lawn maintenance",
  "park development",
];

/** Saare keywords ek list me (audit / sitemap-ish use ke liye). */
export function allKeywords(): string[] {
  return dedupe([
    ...CORE_KEYWORDS,
    ...Object.values(SERVICE_KEYWORDS).flat(),
    ...expandWithCities(TOP_SERVICE_TERMS, SERVICE_AREAS),
  ]);
}

function dedupe(list: string[]): string[] {
  return Array.from(new Set(list.map((s) => s.trim()).filter(Boolean)));
}
