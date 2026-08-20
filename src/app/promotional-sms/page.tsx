import React from "react";
import { Metadata } from "next";
import { Megaphone, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { promotionalSmsMetadata } from "@/metadata/promotionalSms";

export const metadata: Metadata = promotionalSmsMetadata;

export default function PromotionalSmsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl space-y-6">
          <Badge variant="blue" size="md">
            100% Lifetime Unlimited Validity
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Boost Sales with High-Converting{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Promotional Bulk SMS
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach millions of prospective buyers across India with high-speed promotional message broadcasting. Supports multi-lingual regional Unicode texts, scheduled campaigns, and automated DND filtering.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Start Promo Campaign
            </Button>
            <Button href="#pricing-calculator" variant="outline" size="lg">
              View Tariff Rates
            </Button>
          </div>
        </div>
      </section>

      <PricingCalculator />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
