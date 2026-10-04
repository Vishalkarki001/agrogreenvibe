import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { LightboxProvider, LightboxImage } from "@/components/ui/Lightbox";
import ServiceGallery from "@/components/ui/ServiceGallery";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import WhatsAppPopup from "@/components/sections/WhatsAppPopup";
import JsonLd from "@/components/seo/JsonLd";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { getServiceImages } from "@/lib/serviceImages";
import { faqsFor } from "@/lib/faqs";
import { LANDING_PAGES } from "@/lib/landingPages";
import { buildKeywords, PRIMARY_AREAS } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  // Title me sheher ka naam — "landscaping in Rudrapur" jaise searches ke liye.
  const cities = PRIMARY_AREAS.map((a) => a.name).join(" & ");
  const title = `${service.title} in ${cities}`;
  const description = `${service.excerpt} Serving Rudrapur, Haldwani and across Uttarakhand. Free site visit and quotation — call +91 88688 57255.`;
  const url = `/services/${slug}`;

  return {
    title,
    description,
    keywords: buildKeywords(slug),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const { title, tagline, intro, highlights, features, gallery, emoji } = service;
  const otherServices = SERVICES.filter((s) => s.slug !== slug);
  const faqs = faqsFor(slug);
  // Is service ke city-specific pages — topical internal linking se
  // dono pages ko rank karne me madad milti hai.
  const cityPages = LANDING_PAGES.filter((p) => p.serviceSlug === slug);

  // Folder se asli images uthao; na milein to data wale placeholders use karo.
  const real = getServiceImages(service.imageFolder);
  let images =
    real.length > 0
      ? real.map((src, i) => ({ src, alt: `${title} project ${i + 1}` }))
      : gallery.map((g) => ({ src: g.src, alt: g.alt }));

  // Agar featuredImage override diya hai to use front par pin karo (duplicate
  // se bachne ke liye baki list se filter kar dete hain).
  if (service.featuredImage) {
    const fi = service.featuredImage;
    images = [
      { src: fi, alt: `${title} featured project` },
      ...images.filter((img) => img.src !== fi),
    ];
  }

  const featured = images[0];
  const pool = images.slice(1);
  // "Content ke saath" section: 8 images (har highlight row me 2), baaki gallery me.
  const showcaseImages = pool.slice(0, 8);
  const galleryImages = pool.slice(8);
  const showcasePairs: { src: string; alt: string }[][] = [];
  for (let i = 0; i < showcaseImages.length; i += 2) {
    showcasePairs.push(showcaseImages.slice(i, i + 2));
  }

  return (
    <LightboxProvider images={images}>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: title, path: `/services/${slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${emoji} Service`}
        title={title}
        subtitle={tagline}
        crumbs={[{ label: "Services", href: "/services" }, { label: title }]}
      />

      {/* Featured image + intro */}
      <section className="py-16 lg:py-20">
        <Container>
          {featured && (
            <Reveal direction="zoom">
              <LightboxImage
                src={featured.src}
                alt={featured.alt}
                index={0}
                emoji={emoji}
                className="aspect-video shadow-2xl shadow-green-900/15 lg:aspect-21/9"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
            </Reveal>
          )}

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Overview"
                title={`Why choose our ${title.toLowerCase()}?`}
              />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {intro.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: renderBold(para) }} />
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="rounded-2xl border border-green-100 bg-green-50/50 p-7 dark:border-[#26332c] dark:bg-[#131d18]">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  What we offer
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href="/contact" size="md">
                    Request This Service
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Alternating image + content showcase — har row me 2 images */}
      {showcasePairs.length > 0 && (
        <section className="bg-green-50/50 py-16 lg:py-20 dark:bg-[#131d18]">
          <Container>
            <Reveal>
              <SectionHeading
                centered
                eyebrow="What's Included"
                title={`Everything our ${title.toLowerCase()} covers`}
                subtitle="A closer look at what makes our work stand out."
              />
            </Reveal>

            <div className="mt-16 space-y-16 lg:space-y-24">
              {showcasePairs.map((pair, i) => {
                const h = highlights[i % highlights.length];
                const Icon = h.icon;
                const flipped = i % 2 === 1;
                return (
                  <div
                    key={pair[0].src}
                    className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                  >
                    {/* Images (2 per row) */}
                    <Reveal
                      direction={flipped ? "right" : "left"}
                      className={flipped ? "lg:order-2" : ""}
                    >
                      {pair.length === 2 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {pair.map((img, j) => (
                            <LightboxImage
                              key={img.src}
                              src={img.src}
                              alt={img.alt}
                              index={1 + i * 2 + j}
                              emoji={emoji}
                              className="aspect-4/5 shadow-xl shadow-green-900/10"
                              sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                          ))}
                        </div>
                      ) : (
                        <LightboxImage
                          src={pair[0].src}
                          alt={pair[0].alt}
                          index={1 + i * 2}
                          emoji={emoji}
                          className="aspect-4/3 shadow-xl shadow-green-900/10"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )}
                    </Reveal>

                    {/* Content */}
                    <Reveal
                      direction={flipped ? "left" : "right"}
                      delay={100}
                      className={flipped ? "lg:order-1" : ""}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white shadow-sm shadow-green-700/25">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h3 className="mt-5 font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                        {h.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        {h.description}
                      </p>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Full gallery — baaki sari images */}
      {galleryImages.length > 0 && (
        <section className="py-16 lg:py-20">
          <Container>
            <Reveal>
              <SectionHeading
                centered
                eyebrow="Our Work"
                title={`${title} Gallery`}
                subtitle="Real projects we've designed and built — click any photo to view it full-screen."
              />
            </Reveal>

            <div className="mt-14">
              <ServiceGallery
                images={galleryImages}
                emoji={emoji}
                startIndex={1 + showcaseImages.length}
              />
            </div>
          </Container>
        </section>
      )}

      {/* City-wise pages — "landscaping in rudrapur" jaise searches ke liye */}
      {cityPages.length > 0 && (
        <section className="py-16 lg:py-20">
          <Container>
            <Reveal>
              <SectionHeading
                centered
                eyebrow="Your city"
                title={`${title} near you`}
                subtitle={`See how we handle ${title.toLowerCase()} in your city — local conditions, costs and the questions people there ask us.`}
              />
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
              {cityPages.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 90}>
                  <Link
                    href={`/${p.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-green-100 bg-green-50/60 p-5 transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 dark:border-[#26332c] dark:bg-[#131d18]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm dark:bg-[#1a241e]">
                      {p.emoji}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display font-bold text-slate-900 dark:text-white">
                        {p.shortLabel}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-600 dark:text-slate-400">
                        {p.city}, Uttarakhand
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-green-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Other services */}
      <section className="bg-green-50/50 py-16 lg:py-20 dark:bg-[#131d18]">
        <Container>
          <Reveal>
            <SectionHeading centered eyebrow="Explore More" title="Other Services" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} direction="up" delay={(i % 3) * 80}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 dark:bg-[#1a241e] dark:ring-[#26332c]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white dark:bg-green-900/40 dark:text-green-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="flex-1 font-display font-bold text-slate-900 dark:text-white">
                      {s.title}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-green-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Service-specific FAQs + FAQPage schema */}
      <FAQSection
        faqs={faqs}
        idPrefix={`faq-${slug}`}
        title={`${title} — Your Questions Answered`}
        subtitle="The things clients in Rudrapur and Haldwani ask us most often before starting."
      />

      <CTASection />
      {/* key={slug} se har naye service par WhatsAppPopup remount hota hai —
          isliye har service page par 15 sec ke liye dobara dikhta hai. */}
      <WhatsAppPopup key={slug} />
    </LightboxProvider>
  );
}

// Chhota helper: data ke **bold** markers ko <strong> mein badalta hai.
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
