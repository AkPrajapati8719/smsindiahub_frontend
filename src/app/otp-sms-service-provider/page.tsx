import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Zap, ArrowRight, CheckCircle2, Server, Lock, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card3D } from "@/components/ui/Card3D";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { otpSmsMetadata } from "@/metadata/otpSms";

export const metadata: Metadata = otpSmsMetadata;

export default function OtpSmsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-400/20 via-blue-400/15 to-cyan-400/20 blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="radiant" size="md">
                High-Priority Dedicated VIP Pipe
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                India&apos;s Fastest{" "}
                <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  OTP SMS Gateway
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Deliver mission-critical authentication codes, banking 2FA passwords, and verification PINs in <strong>sub-2.5 seconds</strong> with direct Tier-1 telecom operator connectivity and automatic carrier fallback.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Sub-2.5s Guaranteed Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  <span>99.99% Telecom Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-violet-600" />
                  <span>Multi-Carrier Fallback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                  <span>24/7 DND Exempt Delivery</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Get 1,000 Free Test OTPs
                </Button>
                <Button href="/api/india" variant="outline" size="lg">
                  View OTP API Docs
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card3D className="p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-lg">Live OTP Metrics</span>
                  <Badge variant="green">Operational</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Average Latency:</span>
                    <span className="font-mono font-bold text-emerald-600">1.82 seconds</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Delivery Ratio:</span>
                    <span className="font-mono font-bold text-blue-600">99.98%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Active Carrier Binds:</span>
                    <span className="font-mono font-bold text-violet-600">Jio, Airtel, Vi, BSNL</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Throughput:</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">10,000 TPS</span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-500 dark:bg-slate-800/50">
                  ⚡ Powered by Smart Routing Engine v3.0
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* FAQs */}
      <FaqSection />

      {/* Contact Form */}
      <ContactFormSection />
    </div>
  );
}
