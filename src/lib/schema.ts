// ===========================================================================
// JSON-LD STRUCTURED DATA (schema.org)
//
// Ye wo data hai jo Google ko machine-readable form me batata hai ki hum kaun
// hain, kahan hain, kya service dete hain aur kis sheher me dete hain.
// Local/GEO SEO ka sabse bada hissa yahi hai — isi se Google Maps pack aur
// rich results me jagah milti hai.
//
// Har builder ek plain object deta hai jo <JsonLd> component render karta hai.
// ===========================================================================

import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import { AREA_NAMES, GEO, SITE_URL } from "@/lib/seo";
import type { Service } from "@/types";

/** Stable @id — taaki alag-alag schemas ek hi business ko refer karein. */
export const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Main business entity. Har page par jaata hai (layout me), isliye Google ko
 * har URL par NAP (Name, Address, Phone) consistent milta hai.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": ORG_ID,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    description: COMPANY.description,
    slogan: COMPANY.tagline,
    url: SITE_URL,
    logo: `${SITE_URL}/icons/icon-512.png`,
    image: `${SITE_URL}/icons/icon-512.png`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: String(COMPANY.foundedYear),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: GEO.streetAddress,
      addressLocality: GEO.addressLocality,
      addressRegion: GEO.addressRegion,
      postalCode: GEO.postalCode,
      addressCountry: GEO.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    // Kin shehron me service dete hain — local pack ke liye important.
    areaServed: AREA_NAMES.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Uttarakhand" },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.youtube,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

/** Website-level entity — organization se link hota hai. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: `${COMPANY.shortName} — Landscaping & Gardening Services`,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/**
 * Ek service page ke liye Service schema. `cityName` dene par wo service
 * uss sheher se tag ho jaati hai (landing pages me kaam aata hai).
 */
export function serviceSchema(
  service: Pick<Service, "title" | "slug" | "excerpt" | "features">,
  options: { cityName?: string; url?: string } = {}
) {
  const { cityName, url } = options;
  const name = cityName
    ? `${service.title} in ${cityName}`
    : service.title;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: service.title,
    description: service.excerpt,
    url: url ?? `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: cityName
      ? { "@type": "City", name: cityName }
      : AREA_NAMES.map((n) => ({ "@type": "City", name: n })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} — what's included`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: feature },
      })),
    },
  };
}

/** Breadcrumb trail — Google search result me path dikhata hai. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQ schema — search results me expandable questions dikhati hai. */
export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
