import React from "react";
import { Metadata } from "next";
import { Send, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { transactionalSmsMetadata } from "@/metadata/transactionalSms";

export const metadata: Metadata = transactionalSmsMetadata;

export default function TransactionalSmsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl space-y-6">
          <Badge variant="green" size="md">
            24/7/365 Delivery on DND & Non-DND
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Mission-Critical{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Transactional SMS Gateway
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ensure your critical customer notifications, shipping updates, fee reminders, and banking alerts are delivered 24 hours a day with zero delays using your approved 6-character brand header.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Get Transactional Route
            </Button>
            <Button href="/api/india" variant="outline" size="lg">
              Integrate API
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
