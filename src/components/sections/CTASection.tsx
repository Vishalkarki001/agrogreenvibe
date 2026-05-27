// Call-to-action band — dark green, sabhi pages ke neeche use hota hai.

import { Phone, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-green-800 px-6 py-14 text-center sm:px-12 lg:py-16">
            {/* decorative pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, #fff 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden
            />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-500/20 blur-2xl" aria-hidden />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Transform Your Space?
              </h2>
              <p className="mt-4 text-lg text-green-100/90">
                Let&apos;s bring your green vision to life. Get a free consultation and
                quote today — no obligations, just great ideas.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" variant="secondary" size="lg">
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-amber-300"
                >
                  <Phone className="h-5 w-5" />
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
