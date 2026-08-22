import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { rcsMessagingMetadata } from "@/metadata/rcsMessaging";

export const metadata: Metadata = rcsMessagingMetadata;

export default function RcsMessagingPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 text-center">
          <Badge variant="blue" size="md">
            Next-Gen Rich Messaging
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Upgrade Standard SMS to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              RCS Business Messaging
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Deliver app-like rich interactive experiences natively inside
            Android default messaging apps with verified checkmarks, dynamic
            horizontal carousels, and one-tap action chips.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="radiant"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Get Verified RCS Profile
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Request Live Demo
            </Button>
          </div>

          {/* RCS Interactive Visual Preview */}
          <div className="pt-8 flex justify-center">
            <div className="relative h-64 sm:h-80 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:scale-[1.02]">
              <Image
                src="/assets/doodle/RCS-Messaging-Services.png"
                alt="SMSIndiaHub RCS Business Rich Messaging Carousel"
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
