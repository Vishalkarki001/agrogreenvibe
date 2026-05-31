import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { COMPANY } from "@/lib/constants";
import { CONTACT_DETAILS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Agro Greenvibe for landscaping, gardening and green-space projects. Call, email or send us a message for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Grow Something Beautiful"
        subtitle="Have a project in mind or just a question? We'd love to hear from you. Reach out and our team will respond within 24 hours."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          {/* Left — contact info */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
              Whether it&apos;s a cozy terrace garden or a sprawling park, we&apos;re
              here to help. Use any of the options below or fill out the form.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex h-full gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-[#26332c] dark:bg-[#1a241e]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    {/* min-w-0 flex-1 zaroori hai — warna lambi email/address card ke
                        bahar nikal jaati hai. break-words se long strings wrap hoti hain. */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {detail.label}
                      </p>
                      <p className="mt-1 wrap-break-word text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
                return detail.href ? (
                  <a key={detail.label} href={detail.href}>
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-sm dark:border-[#26332c]">
              <iframe
                title={`${COMPANY.shortName} location map`}
                src="https://maps.google.com/maps?q=Rudrapur%2C%20Udham%20Singh%20Nagar%2C%20Uttarakhand&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
