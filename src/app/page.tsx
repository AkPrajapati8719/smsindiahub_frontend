import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhatsAppSimulator } from "@/components/sections/WhatsAppSimulator";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { ApiPlayground } from "@/components/sections/ApiPlayground";
import { DltWizard } from "@/components/sections/DltWizard";
import { StatsSection } from "@/components/sections/StatsSection";
import { LeadAutomationShowcase } from "@/components/sections/LeadAutomationShowcase";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { Metadata } from "next";
import { homeMetadata } from "@/metadata/home";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustLogos />
      <ServicesGrid />
      <StatsSection />
      <WhatsAppSimulator />
      <LeadAutomationShowcase />
      <PricingCalculator />
      <ApiPlayground />
      <IndustrySolutions />
      <DltWizard />
      <Testimonials />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
