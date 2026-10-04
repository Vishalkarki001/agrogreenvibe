// PWA manifest — Next.js ise /manifest.webmanifest par serve karta hai.
// Yahi file browser ko batati hai ki is website ko app ki tarah install kiya
// ja sakta hai: naam kya hai, icon kya hai, khulne par kaisi dikhegi.

import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY.shortName} — Landscaping & Gardening`,
    short_name: COMPANY.shortName,
    description: COMPANY.description,
    // start_url me source tag — Analytics me pata chalta hai ki visit app se aayi.
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0f1613",
    theme_color: "#15803d",
    lang: "en-IN",
    dir: "ltr",
    categories: ["business", "lifestyle", "shopping"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      // maskable = Android icon ko circle/squircle me crop karta hai,
      // isliye inme logo ke chaaro taraf safe padding hai.
      {
        src: "/icons/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    // App icon ko long-press karne par ye shortcuts dikhte hain.
    shortcuts: [
      {
        name: "Our Services",
        short_name: "Services",
        url: "/services?source=pwa",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Get a Free Quote",
        short_name: "Contact",
        url: "/contact?source=pwa",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
