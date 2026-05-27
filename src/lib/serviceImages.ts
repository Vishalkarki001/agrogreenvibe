// ===========================================================================
// AUTO IMAGE LOADER
// Ye helper server par chalta hai aur public/services/<slug>/ folder ki saari
// images apne aap padh leta hai. Matlab — aapko sirf images folder mein daalni
// hain (kisi bhi naam se), aur wo website par khud-ba-khud dikhne lagengi.
// Koi code change nahi.
//
// Folder ka naam service ke slug jaisa hona chahiye:
//   landscaping, gardening, terrace-gardening, parks, ponds, other-services
// ===========================================================================

import fs from "node:fs";
import path from "node:path";

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

// "image (2)" ko "image (10)" se pehle rakhne ke liye natural (number-aware) sort.
function naturalCompare(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

/** Di gayi service folder ki saari image paths (web-ready, encoded) lautata hai. */
export function getServiceImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "services", slug);
  let files: string[];
  try {
    files = fs.readdirSync(dir).filter((f) => IMAGE_EXT.test(f));
  } catch {
    return []; // folder nahi mila — koi baat nahi, placeholder dikh jayega
  }
  files.sort(naturalCompare);
  // Raw path lautao (spaces ke saath). next/image khud encode kar leta hai —
  // yahan encode karne se double-encoding ho jati aur image toot jati.
  return files.map((f) => `/services/${slug}/${f}`);
}
