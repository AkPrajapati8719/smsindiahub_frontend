import React from "react";
import { Metadata } from "next";
import { MessageSquare, Bot, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppSimulator } from "@/components/sections/WhatsAppSimulator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { whatsappApiMetadata } from "@/metadata/whatsappApi";

export const metadata: Metadata = whatsappApiMetadata;

export default function WhatsAppApiPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl space-y-6">
          <Badge variant="green" size="md">
            Official Meta Cloud API Solution
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Scale Your Sales & Support with{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              WhatsApp Business API
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Send rich interactive notifications, automated abandoned cart recovery, media carousels, and 24/7 AI chatbot flows directly on WhatsApp with 98%+ open rates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Get Green Tick Verification
            </Button>
            <Button href="#whatsapp-bot-simulator" variant="outline" size="lg">
              Try Live Chatbot Simulator
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppSimulator />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
