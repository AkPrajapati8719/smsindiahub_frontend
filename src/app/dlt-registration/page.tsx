import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, ArrowRight, CheckCircle2, FileText, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DltWizard } from "@/components/sections/DltWizard";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { dltRegistrationMetadata } from "@/metadata/dltRegistration";

export const metadata: Metadata = dltRegistrationMetadata;

export default function DltRegistrationPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl space-y-6">
          <Badge variant="amber" size="md">
            TRAI Mandated Regulatory Portal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Complete Guide to{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
              TRAI DLT Registration
            </span>{" "}
            & Chain Binding
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every business entity in India sending SMS or Voice traffic must register on telecom DLT portals. SMSIndiaHub provides 100% free regulatory onboarding and chain binding support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="#dlt-compliance-wizard" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Start Chain Binding Guide
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get Free DLT Assistance
            </Button>
          </div>

          {/* DLT Operators Graphic */}
          <div className="pt-8 flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Supported Telecom DLT Portals:</span>
            <div className="relative h-14 w-80 rounded-2xl bg-white p-2 shadow-md border border-slate-200 dark:bg-white/95 dark:border-slate-800 transition-all hover:scale-105">
              <Image
                src="/assets/img/operators-logo.png"
                alt="Jio, Airtel, Vodafone Idea, BSNL, Tata Tele DLT Portals"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <DltWizard />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
