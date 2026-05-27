// Home page — saare sections ek saath. Hero aur About preview ke liye real
// landscaping images server par hi fetch karke pass karte hain (taaki page
// shuru se hi attractive lage).

import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import { getServiceImages } from "@/lib/serviceImages";

export default function HomePage() {
  // Landscaping folder se kuch images — hero aur about section ke liye.
  const imgs = getServiceImages("landscaping");

  return (
    <>
      <Hero imageSrc={imgs[1] ?? imgs[0]} />
      <StatsBar />
      <ServicesOverview />
      <AboutPreview image1={imgs[4] ?? imgs[0]} image2={imgs[8] ?? imgs[1]} />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <CTASection />
    </>
  );
}
