"use client";

// Unified Lightbox — poori service detail page ki saari images (featured +
// showcase + gallery) ek hi viewer me khulti hain aur prev/next se ek se
// doosri me ja sakte hain. Kisi bhi image par click karke khulta hai.
//
// Usage:
//   <LightboxProvider images={allImages}>
//     <LightboxImage src=... alt=... index={0} ... />   // featured
//     <LightboxImage src=... alt=... index={1} ... />   // showcase #1
//     ... aur baki sari images ...
//   </LightboxProvider>

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import SmartImage from "./SmartImage";

interface LightboxImg {
  src: string;
  alt: string;
}

interface LightboxCtx {
  open: (index: number) => void;
}

const Ctx = createContext<LightboxCtx | null>(null);

function useLightbox(): LightboxCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("LightboxImage must be inside <LightboxProvider>");
  return ctx;
}

// ---------------------------------------------------------------------------
// Provider — page ko wrap karta hai, lightbox state aur overlay render karta hai
// ---------------------------------------------------------------------------
interface ProviderProps {
  images: LightboxImg[];
  children: ReactNode;
}

export function LightboxProvider({ images, children }: ProviderProps) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const open = useCallback((i: number) => setIndex(i), []);

  // Keyboard + scroll lock jab khula ho
  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, close, prev, next]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}

      {isOpen && index !== null && (
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
    </Ctx.Provider>
  );
}

// ---------------------------------------------------------------------------
// LightboxImage — SmartImage ko ek button me wrap karke clickable banata hai.
// `index` is image ka position hai LightboxProvider ke `images` array me.
// ---------------------------------------------------------------------------
interface ImageProps {
  src: string;
  alt: string;
  index: number;
  emoji?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Gallery jaise thumbs ke liye hover par "expand" overlay dikhana. */
  withOverlay?: boolean;
}

export function LightboxImage({
  src,
  alt,
  index,
  emoji,
  className,
  sizes,
  priority,
  withOverlay = false,
}: ImageProps) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={`View ${alt}`}
      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl"
    >
      <SmartImage
        src={src}
        alt={alt}
        emoji={emoji}
        className={className}
        sizes={sizes}
        priority={priority}
      />
      {withOverlay && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-green-900/0 opacity-0 transition-all duration-300 group-hover:bg-green-900/30 group-hover:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-green-800 shadow-lg">
            <Expand className="h-5 w-5" />
          </span>
        </span>
      )}
    </button>
  );
}
