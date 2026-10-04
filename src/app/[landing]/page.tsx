// ===========================================================================
// LANDING PAGE TEMPLATE — /landscaping-in-rudrapur, /terrace-gardening-in-haldwani ...
//
// Content src/lib/landingPages.ts se aata hai. Ye route site ke root par hai
// kyunki chhota URL (/landscaping-in-rudrapur) local SEO me behtar perform
// karta hai bajaye /services/landscaping/rudrapur ke.
//
// `dynamicParams = false` zaroori hai: iske bina ye dynamic route har unknown
// URL ko pakad leta. Ab sirf LANDING_PAGES wale slugs chalte hain, baaki 404.
// ===========================================================================

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone } from "lucide-react";

import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { LightboxProvider, LightboxImage } from "@/components/ui/Lightbox";
import ServiceGallery from "@/components/ui/ServiceGallery";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import WhatsAppPopup from "@/components/sections/WhatsAppPopup";
import JsonLd from "@/components/seo/JsonLd";

import {
  LANDING_PAGES,
  getLandingPageBySlug,
  relatedLandingPages,
} from "@/lib/landingPages";
import { getServiceBySlug } from "@/lib/services";
import { getServiceImages } from "@/lib/serviceImages";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ landing: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LANDING_PAGES.map((p) => ({ landing: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { landing } = await params;
  const page = getLandingPageBySlug(landing);
  if (!page) return { title: "Page Not Found" };

  const url = `/${page.slug}`;
  return {
    // absolute: title template (" | Agro Greenvibe — Rudrapur & Haldwani") skip
    // karne ke liye — landing page ka title already sheher ke saath optimised hai.
    title: { absolute: `${page.metaTitle} | ${COMPANY.shortName}` },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: page.h1 }],
    },
  };
}

export default async function LandingPageRoute({ params }: PageProps) {
  const { landing } = await params;
  const page = getLandingPageBySlug(landing);
  if (!page) notFound();

  const service = getServiceBySlug(page.serviceSlug);
  const related = relatedLandingPages(page.slug);

  // Gallery images usi service folder se jisse ye landing page juda hai.
  const raw = service ? getServiceImages(service.imageFolder) : [];
  const images = raw.map((src, i) => ({
    src,
    alt: `${page.shortLabel} — project ${i + 1} by ${COMPANY.shortName}`,
  }));
  const featured = images[0];
  const showcase = images.slice(1, 5);
  const galleryImages = images.slice(5, 17);
  const phoneHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  return (
    <LightboxProvider images={images}>
      <JsonLd
        data={[
          ...(service
            ? [
                serviceSchema(service, {
                  cityName: page.city,
                  url: `/${page.slug}`,
                }),
              ]
            : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.shortLabel, path: `/${page.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${page.emoji} ${page.city}, Uttarakhand`}
        title={page.h1}
        subtitle={page.heroSubtitle}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: page.shortLabel },
        ]}
      />

      {/* ---------------- Intro + quick contact card ---------------- */}
      <section className="py-16 lg:py-20">
        <Container>
          {featured && (
            <Reveal direction="zoom">
              <LightboxImage
                src={featured.src}
                alt={featured.alt}
                index={0}
                emoji={page.emoji}
                className="aspect-video shadow-2xl shadow-green-900/15 lg:aspect-21/9"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
            </Reveal>
          )}

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal direction="left">
              <SectionHeading
                eyebrow={`Overview`}
                title={`${page.shortLabel} — done properly`}
              />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {page.intro.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: renderBold(para) }} />
                ))}
              </div>

              {service && (
                <div className="mt-8">
                  <Button href={`/services/${service.slug}`} variant="outline" size="md">
                    See our full {service.title.toLowerCase()} service
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </Reveal>

            {/* Sticky contact card — har landing page ka main conversion point */}
            <Reveal direction="right" delay={100}>
              <div className="rounded-2xl border border-green-100 bg-green-50/60 p-7 lg:sticky lg:top-28 dark:border-[#26332c] dark:bg-[#131d18]">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Free site visit in {page.city}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  We visit, check the site conditions, understand what you want and
                  send an itemised quotation. No charge, no obligation.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Free site visit & written quote",
                    "Design approved before work starts",
                    "In-house team — one point of contact",
                    "Maintenance available after handover",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 space-y-3">
                  <Button href="/contact" size="md" className="w-full">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <a
                    href={phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full border-2 border-green-700 px-6 py-3 text-[0.95rem] font-semibold text-green-800 transition-colors hover:bg-green-100 dark:border-green-500 dark:text-green-300 dark:hover:bg-green-900/30"
                  >
                    <Phone className="h-4 w-4" />
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Local angle — har page ka unique hissa ---------------- */}
      <section className="bg-green-50/50 py-16 lg:py-20 dark:bg-[#131d18]">
        <Container>
          <Reveal>
            <SectionHeading
              centered
              eyebrow={`Local know-how`}
              title={page.localAngle.title}
              subtitle={page.localAngle.body}
            />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {page.localAngle.points.map((point, i) => (
              <Reveal key={i} delay={(i % 2) * 90}>
                <div className="flex h-full gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 dark:bg-[#1a241e] dark:ring-[#26332c]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-700 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p
                    className="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    dangerouslySetInnerHTML={{ __html: renderBold(point) }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Benefits + showcase images ---------------- */}
      <section className="py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              centered
              eyebrow="Why us"
              title={`What you get with ${COMPANY.shortName}`}
              subtitle={`How we approach ${
                service ? service.title.toLowerCase() : "this work"
              } in ${page.city} — and why it holds up over the years.`}
            />
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="grid gap-5 sm:grid-cols-2 lg:order-2 lg:content-start">
              {showcase.map((img, i) => (
                <Reveal key={img.src} delay={i * 80}>
                  <LightboxImage
                    src={img.src}
                    alt={img.alt}
                    index={1 + i}
                    emoji={page.emoji}
                    className="aspect-4/5 shadow-xl shadow-green-900/10"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </Reveal>
              ))}
            </div>

            <div className="space-y-7 lg:order-1">
              {page.benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Reveal key={benefit.title} direction="left" delay={i * 80}>
                    <div className="flex gap-5">
                      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-green-700 p-3 text-white shadow-sm shadow-green-700/25">
                        <Icon className="h-7 w-7" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                          {benefit.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Gallery ---------------- */}
      {galleryImages.length > 0 && (
        <section className="bg-green-50/50 py-16 lg:py-20 dark:bg-[#131d18]">
          <Container>
            <Reveal>
              <SectionHeading
                centered
                eyebrow="Our work"
                title={`${page.shortLabel} — recent projects`}
                subtitle="Real sites we have designed and built. Click any photo to view it full-screen."
              />
            </Reveal>
            <div className="mt-14">
              <ServiceGallery
                images={galleryImages}
                emoji={page.emoji}
                startIndex={5}
              />
            </div>
          </Container>
        </section>
      )}

      <ProcessSteps />

      {/* ---------------- Page-specific FAQs ---------------- */}
      <FAQSection
        faqs={page.faqs}
        tinted
        idPrefix={`faq-${page.slug}`}
        title={`${page.shortLabel} — Frequently Asked Questions`}
        subtitle={`The questions people in ${page.city} ask us most often.`}
      />

      {/* ---------------- Service area + related pages (internal linking) ---------------- */}
      <section className="py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              centered
              eyebrow="Service area"
              title={`We also serve around ${page.city}`}
              subtitle={`Beyond ${page.city} itself, our team regularly works in these nearby towns.`}
            />
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {page.nearbyAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-800 ring-1 ring-green-100 dark:bg-green-900/30 dark:text-green-200 dark:ring-[#26332c]"
              >
                <MapPin className="h-3.5 w-3.5" />
                {area}
              </span>
            ))}
          </Reveal>

          {related.length > 0 && (
            <>
              <Reveal className="mt-16">
                <SectionHeading centered eyebrow="Explore more" title="Related services" />
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r, i) => (
                  <Reveal key={r.slug} delay={(i % 3) * 80}>
                    <Link
                      href={`/${r.slug}`}
                      className="group flex h-full items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 dark:bg-[#1a241e] dark:ring-[#26332c]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl transition-colors group-hover:bg-green-700 dark:bg-green-900/40">
                        {r.emoji}
                      </span>
                      <span className="flex-1 font-display font-bold text-slate-900 dark:text-white">
                        {r.shortLabel}
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-green-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <CTASection />
      <WhatsAppPopup key={page.slug} />
    </LightboxProvider>
  );
}

// data ke **bold** markers ko <strong> me badalta hai (service page jaisa hi).
function renderBold(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-slate-800 dark:text-slate-200">$1</strong>'
  );
}
