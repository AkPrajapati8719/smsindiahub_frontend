import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { Badge } from "@/components/ui/Badge";
import { pricingMetadata } from "@/metadata/pricing";

export const metadata: Metadata = pricingMetadata;

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Visual Pricing Hero */}
      <section className="bg-white py-12 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-4">
          <Badge variant="radiant" size="md">
            Direct Operator Wholesale Rates
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Transparent Pricing &amp;{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Tariff Plans
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the ideal messaging plan for your volume. 100% lifetime validity, zero setup fees, and 24/7 dedicated support.
          </p>

          <div className="pt-6 flex justify-center">
            <div className="relative h-64 sm:h-80 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:scale-[1.02]">
              <Image
                src="/assets/img/pricing.png"
                alt="SMSIndiaHub Wholesale Pricing Plans"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <PricingCalculator />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
