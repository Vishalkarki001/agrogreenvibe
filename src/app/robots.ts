// robots.txt — crawlers ko batata hai kya crawl karna hai aur sitemap kahan hai.
// Next.js ise /robots.txt par serve karta hai.

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Sirf API routes block karte hain.
        // /feedback ko yahan block NAHI karte: block karne par Google uska
        // `noindex` meta tag padh hi nahi payega (crawl hi nahi karega) aur
        // URL phir bhi index ho sakta hai. Uske page par noindex laga hai —
        // wahi kaafi hai.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
