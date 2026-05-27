"use client";

// ServiceGallery: saari images ek sundar MASONRY layout me (alag-alag heights)
// jo scroll par ek-ek karke animate hoti hain. Kisi bhi image par click karne se
// LIGHTBOX khulta hai — fullscreen bada view, prev/next + keyboard (Esc, arrows).

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

interface GalleryImg {
  src: string;
  alt: string;
}

interface ServiceGalleryProps {
  images: GalleryImg[];
  emoji?: string;
}

// Masonry rhythm ke liye alag-alag aspect ratios (cycle hote hain).
const ASPECTS = ["aspect-4/5", "aspect-square", "aspect-4/3", "aspect-3/4"];

export default function ServiceGallery({ images, emoji }: ServiceGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  // Keyboard controls + body scroll lock jab lightbox khula ho
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Masonry grid (CSS columns) */}
      <div className="columns-2 gap-4 sm:gap-5 lg:columns-3">
        {images.map((img, i) => (
          <Reveal
            key={img.src}
            direction="zoom"
            delay={(i % 3) * 90}
            className="mb-4 break-inside-avoid sm:mb-5"
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View ${img.alt}`}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-md shadow-green-900/5"
            >
              <SmartImage
                src={img.src}
                alt={img.alt}
                emoji={emoji}
                className={ASPECTS[i % ASPECTS.length]}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              />
              {/* hover overlay */}
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-green-900/0 opacity-0 transition-all duration-300 group-hover:bg-green-900/30 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-green-800 shadow-lg">
                  <Expand className="h-5 w-5" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open && index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative h-[82vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {/* Counter */}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
