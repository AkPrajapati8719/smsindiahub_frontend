import React from "react";
import { Metadata } from "next";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { pricingMetadata } from "@/metadata/pricing";

export const metadata: Metadata = pricingMetadata;

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PricingCalculator />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
