import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { PhoneIncoming, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { missedCallMetadata } from "@/metadata/missedCall";

export const metadata: Metadata = missedCallMetadata;

export default function MissedCallPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 text-center">
          <Badge variant="amber" size="md">
            Zero Cost for Callers
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Capture 100% Leads with{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Missed Call Alert Service
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Provide a zero-friction way for prospects to show interest. A single missed call automatically logs the lead, triggers an instant WhatsApp/SMS catalogue, and notifies your sales team.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Get Dedicated Number
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to Sales
            </Button>
          </div>

          {/* Missed Call Workflow Diagram */}
          <div className="pt-8 flex justify-center">
            <div className="relative h-64 sm:h-80 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:scale-[1.02]">
              <Image
                src="/assets/img/assign-and-distribute-leads-on-missed-call.png"
                alt="Missed Call Lead Assignment & Auto Distribution"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
