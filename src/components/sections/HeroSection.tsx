"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Zap,
  MessageSquare,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card3D } from "@/components/ui/Card3D";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"otp" | "whatsapp" | "voice">(
    "otp",
  );

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 dark:bg-slate-950 md:pt-16 md:pb-28">
      {/* Ambient Top Radiant Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-400/20 via-blue-400/15 to-cyan-400/20 blur-[100px]" />

      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-blue-700 backdrop-blur-sm dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                India&apos;s #1 Enterprise CPaaS & Cloud Messaging Platform
              </span>
              <span className="text-blue-400">|</span>
              <span className="text-violet-600 dark:text-violet-400">
                Sub-2.5s OTP SLA
              </span>
            </div>

            {/* Radiant Main Headline Aligned with Title Tag */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12]">
              Enterprise Bulk SMS, WhatsApp API &amp;{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                OTP Gateway in India
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empower your business with high-throughput{" "}
              <strong>OTP SMS</strong>, official{" "}
              <strong>WhatsApp Business API</strong>, next-gen{" "}
              <strong>RCS messaging</strong>, and automated{" "}
              <strong>Voice IVR broadcasts</strong> backed by direct Tier-1
              telecom carrier connectivity.
            </p>

            {/* Key Value Checks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>100% TRAI DLT Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>99.99% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-violet-600" />
                <span>Zero Setup Fees</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/pricing"
                variant="radiant"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto text-base font-bold shadow-radiant-md"
              >
                Get Free Test Credits
              </Button>

              <Button
                href="/api/india"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base font-semibold"
              >
                Explore Developer API
              </Button>
            </div>

            {/* Trust Badges & Carrier Logos Bar */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Direct Carrier Interconnects:
                </span>
                <div className="relative h-11 w-64 rounded-xl bg-white p-2 shadow-md border border-slate-200/80 dark:bg-white/95 dark:border-slate-700 transition-all hover:scale-105">
                  <Image
                    src="/assets/img/operators-logo.png"
                    alt="Jio Airtel Vi BSNL Telecom Operators"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                {/* ISO 9001 & 27001 */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="relative h-16 w-36 sm:w-40 rounded-2xl bg-slate-50/90 border border-slate-200/90 dark:bg-slate-900/90 dark:border-slate-800 p-2.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-blue-500 group-hover:bg-blue-50/60 dark:group-hover:bg-slate-800 flex items-center justify-center">
                    <Image
                      src="/assets/img/associations/iso.png"
                      alt="ISO 9001 & 27001 Certified"
                      fill
                      className="object-contain p-1 filter brightness-0 opacity-80 group-hover:opacity-100 dark:invert dark:opacity-90 transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-center max-w-[140px] leading-snug">
                    ISO 9001 &amp; 27001 Certified
                  </span>
                </div>

                {/* MSME Registered */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="relative h-16 w-36 sm:w-40 rounded-2xl bg-slate-50/90 border border-slate-200/90 dark:bg-slate-900/90 dark:border-slate-800 p-2.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-blue-500 group-hover:bg-blue-50/60 dark:group-hover:bg-slate-800 flex items-center justify-center">
                    <Image
                      src="/assets/img/associations/msme.png"
                      alt="MSME Registered Enterprise"
                      fill
                      className="object-contain p-0.5 filter brightness-0 opacity-80 group-hover:opacity-100 dark:invert dark:opacity-90 transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-center max-w-[140px] leading-snug">
                    MSME Registered Enterprise
                  </span>
                </div>

                {/* MPSEDC Partner */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="relative h-16 w-36 sm:w-40 rounded-2xl bg-slate-50/90 border border-slate-200/90 dark:bg-slate-900/90 dark:border-slate-800 p-2.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-blue-500 group-hover:bg-blue-50/60 dark:group-hover:bg-slate-800 flex items-center justify-center">
                    <Image
                      src="/assets/img/associations/mpsedc.png"
                      alt="MPSEDC Associated Partner"
                      fill
                      className="object-contain p-0.5 filter brightness-0 opacity-80 group-hover:opacity-100 dark:invert dark:opacity-90 transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-center max-w-[140px] leading-snug">
                    MPSEDC Associated Partner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Phone Simulator + Executive Key Takeaways Below It */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            {/* 3D Phone & Channel Simulator Card */}
            <Card3D
              tiltIntensity={10}
              glowColor="rgba(139, 92, 246, 0.25)"
              className="w-full max-w-md border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90"
            >
              {/* Channel Selector Pills */}
              <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800 mb-6">
                <button
                  onClick={() => setActiveTab("otp")}
                  className={cn(
                    "flex-1 py-2 text-xs font-bold rounded-lg transition-all",
                    activeTab === "otp"
                      ? "bg-white text-blue-600 shadow-sm dark:bg-slate-900 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900",
                  )}
                >
                  ⚡ OTP SMS
                </button>
                <button
                  onClick={() => setActiveTab("whatsapp")}
                  className={cn(
                    "flex-1 py-2 text-xs font-bold rounded-lg transition-all",
                    activeTab === "whatsapp"
                      ? "bg-white text-emerald-600 shadow-sm dark:bg-slate-900 dark:text-emerald-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900",
                  )}
                >
                  💬 WhatsApp
                </button>
                <button
                  onClick={() => setActiveTab("voice")}
                  className={cn(
                    "flex-1 py-2 text-xs font-bold rounded-lg transition-all",
                    activeTab === "voice"
                      ? "bg-white text-violet-600 shadow-sm dark:bg-slate-900 dark:text-violet-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900",
                  )}
                >
                  📞 Voice IVR
                </button>
              </div>

              {/* Simulated Mobile Notification Card */}
              {activeTab === "otp" && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-4 shadow-sm dark:border-blue-950 dark:from-slate-800 dark:to-slate-900">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400">
                        <ShieldCheck className="h-4 w-4" />
                        <span>SMSINDIAHUB • VIA JIO-DLT</span>
                      </div>
                      <span>Just Now</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white leading-snug">
                      Your verification OTP is{" "}
                      <span className="font-mono text-base font-extrabold text-blue-600">
                        849201
                      </span>{" "}
                      for secure login. Valid for 10 minutes.
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="font-mono text-emerald-600 font-bold">
                        ⚡ Latency: 1.84s
                      </span>
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        Delivered
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center text-xs">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                      <div className="font-bold text-lg text-slate-900 dark:text-white">
                        99.99%
                      </div>
                      <div className="text-slate-500">Delivery Ratio</div>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                      <div className="font-bold text-lg text-blue-600">
                        10,000 TPS
                      </div>
                      <div className="text-slate-500">Peak Capacity</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "whatsapp" && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50/80 to-white p-4 shadow-sm dark:border-emerald-950 dark:from-slate-800 dark:to-slate-900">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                        W
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                        SMSIndiaHub Verified{" "}
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600 inline fill-emerald-600 text-white" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      🎉 Hello! Your order #IND-9482 is confirmed. Track your
                      package in real-time below:
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button className="rounded-lg bg-emerald-600 py-1.5 text-center text-xs font-bold text-white shadow-sm">
                        Track Shipment
                      </button>
                      <button className="rounded-lg border border-slate-200 py-1.5 text-center text-xs font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300">
                        Chat Support
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "voice" && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-violet-100 bg-gradient-to-b from-violet-50/80 to-white p-4 shadow-sm dark:border-violet-950 dark:from-slate-800 dark:to-slate-900">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-bold text-violet-600">
                        Automated IVR Broadcast
                      </span>
                      <span className="text-emerald-600 font-bold animate-pulse">
                        ● Connected (00:18)
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      &quot;Press 1 to confirm your service appointment, or
                      Press 2 to speak directly with an engineer.&quot;
                    </p>
                    <div className="mt-3 flex gap-2 justify-center">
                      <span className="rounded-lg bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                        Key [1] Captured
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quick Feature Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  REST API & SMPP v3.4 Ready
                </span>
                <Link
                  href="/api/india"
                  className="font-bold text-blue-600 hover:underline"
                >
                  View API Snippets →
                </Link>
              </div>
            </Card3D>

            {/* Executive Top Summary / Key Takeaway Card (Shifted to Right Column below Simulator) */}
            <div className="w-full max-w-md rounded-2xl border border-blue-100/90 bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-cyan-50/80 p-4 text-left dark:border-blue-900/40 dark:from-slate-900/90 dark:to-slate-850 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Executive Summary &amp; Key Takeaways</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Bottom-Line Answer:</strong> SMSIndiaHub is India&apos;s
                leading CPaaS gateway providing{" "}
                <strong>sub-2.5s OTP SMS delivery</strong>, official{" "}
                <strong>Meta WhatsApp Business API</strong> solutions, and
                automated <strong>Voice IVR broadcasts</strong> with 99.99%
                uptime and 100% TRAI DLT compliance for developers, BFSI,
                E-commerce, and high-growth enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
