// Ek service ka card — home page aur services overview dono jagah use hota hai.
// Upar cover image (folder ki pehli image), neeche icon + title + excerpt + link.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  /** Folder ki pehli image — card ka cover. Na ho to placeholder dikhega. */
  coverSrc?: string;
}

export default function ServiceCard({ service, coverSrc }: ServiceCardProps) {
  const { slug, title, emoji, icon: Icon, excerpt } = service;

  return (
    <Link
      href={`/services/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
    >
      {/* Cover image */}
      <div className="relative">
        <SmartImage
          src={coverSrc ?? `/services/${service.imageFolder}/cover.jpg`}
          alt={`${title} by Agro Greenvibe`}
          emoji={emoji}
          rounded="rounded-none"
          className="aspect-16/10"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
        />
        {/* gradient + emoji badge */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-green-700 shadow-sm backdrop-blur-sm">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-slate-900">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
