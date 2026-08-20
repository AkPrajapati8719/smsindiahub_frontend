import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Cpu, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function LeadAutomationShowcase() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800" id="lead-automation-showcase">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="radiant" size="md">
            Zero-Lag Lead Capture
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect Every Lead Source to{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Instant Automated Outreach
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Automatically sync incoming leads from Facebook Lead Ads, Google Ads, IndiaMART, TradeIndia, and website forms directly into WhatsApp and SMS within milliseconds.
          </p>
        </div>

        {/* 2-Column Showcase Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Lead Ingestion & Webhooks */}
          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 flex flex-col justify-between">
            <div>
              <div className="relative mb-6 h-60 w-full overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                <Image
                  src="/assets/img/Capture-Leads-From-Various-Lead-Sources.png"
                  alt="Capture Leads from Various Sources"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <Badge variant="blue" size="sm" className="mb-3">
                Multi-Source Ingestion
              </Badge>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Multi-Channel Lead Ingestion Engine
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Capture high-intent prospects from B2B marketplaces, social ad clicks, landing page QR codes, and incoming missed calls into a unified real-time stream.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <Link href="/leads-automation-software" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
                Explore Lead Engine →
              </Link>
            </div>
          </div>

          {/* Card 2: IndiaMART & WhatsApp Automation */}
          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 flex flex-col justify-between">
            <div>
              <div className="relative mb-6 h-60 w-full overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                <Image
                  src="/assets/img/IndiaMart-Lead-Automation-via-WhatsApp.png"
                  alt="IndiaMART Lead Automation via WhatsApp"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <Badge variant="green" size="sm" className="mb-3">
                Marketplace Auto-Responder
              </Badge>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Instant IndiaMART & TradeIndia WhatsApp Sync
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Never lose a buyer to competitor delay. Dispatches your product catalogue, price quote, and company brochure via WhatsApp the exact second an inquiry lands.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <Link href="/indiamart-lead-management-software" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline">
                Learn Marketplace Setup →
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Smaller Feature Image Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-center">
            <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-2">
              <Image
                src="/assets/img/Connect-Your-Real-Estate-Lead-Sources.png"
                alt="Real Estate Lead Connection"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Real Estate Auto-Routing</h4>
            <p className="text-xs text-slate-500 mt-1">Round-robin lead assignment to property agents with SMS alerts.</p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-center">
            <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-2">
              <Image
                src="/assets/img/Merge-ChatGPT.png"
                alt="AI Chatbot Integration"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">AI Chatbot Intelligence</h4>
            <p className="text-xs text-slate-500 mt-1">Natural language understanding & automated conversation workflows.</p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-center">
            <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-2">
              <Image
                src="/assets/img/assign-and-distribute-leads-on-missed-call.png"
                alt="Missed Call Distribution"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Missed Call Distribution</h4>
            <p className="text-xs text-slate-500 mt-1">Instant SMS callback & automated lead logging on caller ring.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
