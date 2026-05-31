// ServiceGallery: masonry layout jo saari gallery images alag-alag heights me
// dikhata hai. Click karne par unified Lightbox me khulta hai (state khud
// LightboxProvider me hai — ye component sirf images render karta hai).
//
// `startIndex` = is gallery ki pehli image LightboxProvider ke poore images
// array me kis position par hai (taaki prev/next se featured + showcase tak
// bhi cycle ho sake).

import { LightboxImage } from "./Lightbox";
import Reveal from "./Reveal";

interface GalleryImg {
  src: string;
  alt: string;
}

interface ServiceGalleryProps {
  images: GalleryImg[];
  emoji?: string;
  /** Lightbox ke global images array me ye gallery kis index se shuru hoti hai. */
  startIndex?: number;
}

// Masonry rhythm ke liye alag-alag aspect ratios (cycle hote hain).
const ASPECTS = ["aspect-4/5", "aspect-square", "aspect-4/3", "aspect-3/4"];

export default function ServiceGallery({
  images,
  emoji,
  startIndex = 0,
}: ServiceGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="columns-2 gap-4 sm:gap-5 lg:columns-3">
      {images.map((img, i) => (
        <Reveal
          key={img.src}
          direction="zoom"
          delay={(i % 3) * 90}
          className="mb-4 break-inside-avoid sm:mb-5"
        >
          <LightboxImage
            src={img.src}
            alt={img.alt}
            index={startIndex + i}
            emoji={emoji}
            className={ASPECTS[i % ASPECTS.length]}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
            withOverlay
          />
        </Reveal>
      ))}
    </div>
  );
}
