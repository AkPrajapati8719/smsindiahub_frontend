import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { PhoneCall, ArrowRight, CheckCircle2, Mic } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { voiceCallMetadata } from "@/metadata/voiceCall";

export const metadata: Metadata = voiceCallMetadata;

export default function VoiceCallPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 text-center">
          <Badge variant="violet" size="md">
            10,000+ Parallel Call Channels
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Automated{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Voice Call Broadcasting
            </span>{" "}
            & IVR Systems
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Deliver pre-recorded audio announcements, multilingual text-to-speech calls, and interactive DTMF keypress capture across India with charges only on successfully answered calls.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Start Voice Broadcast
            </Button>
            <Button href="#pricing-calculator" variant="outline" size="lg">
              View Voice Rates
            </Button>
          </div>

          {/* Voice Broadcast Visual Architecture Diagram */}
          <div className="pt-8 flex justify-center">
            <div className="relative h-64 sm:h-80 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:scale-[1.02]">
              <Image
                src="/assets/img/voice-sms-art.png"
                alt="SMSIndiaHub Voice Call Service Provider"
                fill
                className="object-contain"
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
