import React from "react";
import { Metadata } from "next";
import { Bot, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppSimulator } from "@/components/sections/WhatsAppSimulator";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { whatsappChatbotMetadata } from "@/metadata/whatsappChatbot";

export const metadata: Metadata = whatsappChatbotMetadata;

export default function WhatsAppChatbotPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 text-center">
          <Badge variant="violet" size="md">
            No-Code Conversational AI
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Automate 24/7 Sales & Support with{" "}
            <span className="bg-gradient-to-r from-violet-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
              AI WhatsApp Chatbots
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate response delays. Deploy pre-configured WhatsApp chatbots that answer FAQs, qualify leads, schedule appointments, and seamlessly transfer chats to live agents.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="#whatsapp-bot-simulator" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Test Live Chatbot Flow
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Custom Bot Consultation
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppSimulator />
      <IndustrySolutions />
      <ContactFormSection />
    </div>
  );
}
