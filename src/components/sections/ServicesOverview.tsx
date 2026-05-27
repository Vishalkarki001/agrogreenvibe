// Services overview — 6 service cards ka grid. Home aur /services dono par
// use hota hai. `showAll` false ho to sirf heading + grid (CTA chhupa do).

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/services";
import { getServiceImages } from "@/lib/serviceImages";

interface ServicesOverviewProps {
  withCta?: boolean;
}

export default function ServicesOverview({ withCta = true }: ServicesOverviewProps) {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            eyebrow="What We Do"
            title="Our Green Services"
            subtitle="Six core services, one mission — to design, build and care for outdoor spaces that you'll love for years to come."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} direction="up" delay={(i % 3) * 100}>
              <ServiceCard
                service={service}
                coverSrc={getServiceImages(service.imageFolder)[0]}
              />
            </Reveal>
          ))}
        </div>

        {withCta && (
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
