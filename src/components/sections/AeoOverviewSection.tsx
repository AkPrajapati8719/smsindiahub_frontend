"use client";

import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  CheckCircle2,
  Table,
  Zap,
  ShieldCheck,
  Building,
  Code2,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card3D } from "@/components/ui/Card3D";

export function AeoOverviewSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800" id="cpaas-overview">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header with Question-Style H2 for AEO SearchGPT/Perplexity Extraction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="radiant" size="md">
            Direct Answer &amp; Enterprise Guide
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What Is an Enterprise CPaaS Gateway &amp;{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              How Does It Work?
            </span>
          </h2>

          {/* Direct Answer Signal for Search Engines & Generative AI Models */}
          <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-left sm:text-center">
            <p>
              <strong>Direct Answer:</strong> An <strong>Enterprise CPaaS (Communications Platform as a Service) gateway</strong> is cloud-based telecom infrastructure that enables businesses to programmatically send high-velocity transactional OTPs, marketing broadcasts, verified WhatsApp chats, rich RCS messages, and automated Voice IVR broadcasts via REST APIs and SMPP protocols without managing physical telecom hardware.
            </p>
          </div>

          {/* GEO Freshness & Regulatory Signal */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Last Updated: <time dateTime="2026-08-21">August 2026</time></span>
            </span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              ✓ 100% TRAI DLT Mandate v2.0 Compliant
            </span>
            <span>•</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              ✓ Official Meta Cloud API Partner
            </span>
          </div>
        </div>

        {/* Audience & Use-Case Clarity (Target Personas for AEO/GEO) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card3D
            tiltIntensity={6}
            glowColor="rgba(37, 99, 235, 0.15)"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
              <Code2 className="h-5 w-5" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">For Developers</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Integrate in minutes with REST APIs &amp; SMPP v3.4. SDKs ready for Node.js, Python, PHP, Java, and cURL with instant webhooks.
            </p>
          </Card3D>

          <Card3D
            tiltIntensity={6}
            glowColor="rgba(16, 185, 129, 0.15)"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">For BFSI &amp; FinTech</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sub-2.5s login OTPs, 256-bit encryption, ISO 27001 certified data pipelines, and automatic multi-operator carrier fallback.
            </p>
          </Card3D>

          <Card3D
            tiltIntensity={6}
            glowColor="rgba(139, 92, 246, 0.15)"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 text-violet-600 dark:text-violet-400">
              <TrendingUp className="h-5 w-5" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">For E-Commerce &amp; D2C</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Automate WhatsApp abandoned cart recovery, order dispatch alerts with live tracking maps, and cash-on-delivery OTP verification.
            </p>
          </Card3D>

          <Card3D
            tiltIntensity={6}
            glowColor="rgba(245, 158, 11, 0.15)"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400">
              <Building className="h-5 w-5" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">For Enterprises</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Scale to 10,000 TPS peak capacity with dedicated account managers, 99.99% uptime SLA, and assistance with TRAI DLT chain binding.
            </p>
          </Card3D>
        </div>

        {/* Structured Multi-Channel Comparison Table for AI Engine Answer Extraction */}
        <div className="mt-14 space-y-4">
          <div className="text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                How Do CPaaS Channels Compare for Speed, Open Rates &amp; DLT Compliance?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                <strong>Direct Comparison Summary:</strong> While OTP SMS provides the fastest authentication under 2.5 seconds, WhatsApp Business API achieves the highest rich-media open rates (98%+), and Voice IVR delivers immediate audio broadcasts with DTMF response capture.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline shrink-0"
            >
              <span>View Tariff Calculator</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 dark:bg-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3.5">Channel</th>
                  <th scope="col" className="px-4 py-3.5">Delivery Latency</th>
                  <th scope="col" className="px-4 py-3.5">Open Rate</th>
                  <th scope="col" className="px-4 py-3.5">Rich Media / Interactivity</th>
                  <th scope="col" className="px-4 py-3.5">TRAI DLT Mandate</th>
                  <th scope="col" className="px-4 py-3.5">Best Enterprise Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-normal">
                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                  <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-blue-600">⚡</span> OTP SMS Gateway
                  </th>
                  <td className="px-4 py-3.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">Sub-2.5s</td>
                  <td className="px-4 py-3.5 font-semibold">98%</td>
                  <td className="px-4 py-3.5 text-slate-500">Plain Text (160 Chars)</td>
                  <td className="px-4 py-3.5 text-emerald-600 font-semibold">Explicit PE Header Required</td>
                  <td className="px-4 py-3.5">Banking 2FA, Secure Logins, Password Resets</td>
                </tr>

                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                  <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-blue-600">📱</span> Bulk &amp; Promotional SMS
                  </th>
                  <td className="px-4 py-3.5 font-mono text-slate-700 dark:text-slate-300">&lt; 5.0s</td>
                  <td className="px-4 py-3.5 font-semibold">92% – 95%</td>
                  <td className="px-4 py-3.5 text-slate-500">Text + Shortlinks</td>
                  <td className="px-4 py-3.5 text-emerald-600 font-semibold">Consent &amp; DND Filtered</td>
                  <td className="px-4 py-3.5">Flash Sales, Product Launches, Festive Offers</td>
                </tr>

                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                  <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-emerald-600">💬</span> WhatsApp Business API
                  </th>
                  <td className="px-4 py-3.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">&lt; 1.0s (Real-Time)</td>
                  <td className="px-4 py-3.5 font-semibold font-mono text-emerald-600">98%+</td>
                  <td className="px-4 py-3.5 text-blue-600 dark:text-blue-400 font-semibold">Images, PDF, Video, Buttons, Catalogs</td>
                  <td className="px-4 py-3.5 text-slate-500">Meta Template Pre-Approval</td>
                  <td className="px-4 py-3.5">Order Tracking, Support Chatbots, Lead Nurturing</td>
                </tr>

                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                  <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-cyan-600">✨</span> RCS Business Messaging
                  </th>
                  <td className="px-4 py-3.5 font-mono text-slate-700 dark:text-slate-300">&lt; 2.0s</td>
                  <td className="px-4 py-3.5 font-semibold">85%+</td>
                  <td className="px-4 py-3.5 text-blue-600 dark:text-blue-400 font-semibold">Interactive Carousels, Action Chips</td>
                  <td className="px-4 py-3.5 text-slate-500">Google Verified Brand Agent</td>
                  <td className="px-4 py-3.5">App-like Brand Experiences in Native Android SMS</td>
                </tr>

                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                  <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-violet-600">📞</span> Automated Voice IVR
                  </th>
                  <td className="px-4 py-3.5 font-mono text-slate-700 dark:text-slate-300">Instant Broadcast</td>
                  <td className="px-4 py-3.5 font-semibold">70%+ (Pickup Rate)</td>
                  <td className="px-4 py-3.5 text-violet-600 dark:text-violet-400 font-semibold">Dynamic MP3 Audio + DTMF Keypress</td>
                  <td className="px-4 py-3.5 text-slate-500">Telecom PRI/SIP Trunk Line</td>
                  <td className="px-4 py-3.5">Critical Emergency Alerts, Payment Reminders, Surveys</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
