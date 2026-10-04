// Sitemap — Google ko batata hai ki site par kaun kaun se pages hain.
// Next.js ise /sitemap.xml par serve karta hai, build par apne aap generate.
// Naya service ya landing page add karne par ye khud update ho jaata hai.

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { LANDING_PAGES } from "@/lib/landingPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // priority ek hint hai: 1.0 homepage, phir landing pages (SEO ka main target),
  // phir service pages, phir baaki.
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  const landingPages: MetadataRoute.Sitemap = LANDING_PAGES.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...landingPages, ...servicePages];
}
