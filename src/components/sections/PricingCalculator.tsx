"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calculator, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRICING_PLANS } from "@/data/pricing";
import { formatNumber, formatCurrency } from "@/lib/utils";

export function PricingCalculator() {
  const [activeChannel, setActiveChannel] = useState<"promotional" | "transactional" | "otp" | "voice">("otp");
  const [volume, setVolume] = useState<number>(50000);

  const plan = PRICING_PLANS[activeChannel];

  // Calculate rate based on volume tier
  let unitRate = 0.14;
  for (const tier of plan.tiers) {
    if (volume >= tier.minUnits && volume <= tier.maxUnits) {
      unitRate = tier.pricePerUnit;
      break;
    }
  }

  const estimatedTotal = volume * unitRate;
  const gstAmount = estimatedTotal * 0.18;
  const totalWithGst = estimatedTotal + gstAmount;

  return (
    <section className="bg-white py-20 dark:bg-slate-950" id="pricing-calculator">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="radiant" size="md">
            Transparent Pricing Calculator
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Estimate Your Monthly Messaging Costs with{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Zero Hidden Charges
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            All plans include 100% lifetime unlimited validity, direct Tier-1 telecom routes, free DLT assistance, and 24/7 dedicated support.
          </p>
        </div>

        {/* Channel Switcher */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { id: "otp", label: "⚡ High-Priority OTP SMS", desc: "Sub-2.5s Latency" },
            { id: "transactional", label: "📨 Transactional SMS", desc: "24/7 DND Delivery" },
            { id: "promotional", label: "📢 Promotional Bulk SMS", desc: "Marketing Broadcasts" },
            { id: "voice", label: "📞 Voice Call Broadcast", desc: "Automated IVR" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveChannel(item.id as any)}
              className={`rounded-2xl p-4 text-left border transition-all duration-300 w-full sm:w-64 ${
                activeChannel === item.id
                  ? "border-blue-600 bg-blue-50/70 shadow-radiant-sm dark:bg-blue-950/40 dark:border-blue-500 scale-[1.02]"
                  : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900"
              }`}
            >
              <div className="font-bold text-sm text-slate-900 dark:text-white">{item.label}</div>
              <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
            </button>
          ))}
        </div>

        {/* Calculator Main Box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-xl dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Slider Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Select Expected Monthly Volume:
                </span>
                <span className="rounded-xl bg-blue-600 px-4 py-1.5 font-mono text-base font-extrabold text-white shadow-sm">
                  {formatNumber(volume)} {plan.unitName}s
                </span>
              </div>

              {/* Range Input Slider */}
              <input
                type="range"
                min={10000}
                max={500000}
                step={5000}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-slate-700"
              />

              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>10,000</span>
                <span>1,00,000</span>
                <span>2,50,000</span>
                <span>5,00,000+</span>
              </div>

              {/* Features check list */}
              <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <div className="font-bold text-slate-900 dark:text-white mb-2">Plan Inclusions:</div>
                {plan.features.slice(0, 4).map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cost Summary Card */}
            <div className="lg:col-span-5 rounded-2xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-900/60 dark:bg-blue-950/30 text-center space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Calculated Rate
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                  ₹{unitRate}
                </span>
                <span className="text-xs font-semibold text-slate-500 ml-1">/ {plan.unitName}</span>
              </div>

              <div className="space-y-2 py-3 border-y border-blue-200/60 dark:border-blue-900/40 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal ({formatNumber(volume)} Units):</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    {formatCurrency(estimatedTotal)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>GST (18%):</span>
                  <span className="font-mono">{formatCurrency(gstAmount)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-blue-700 dark:text-blue-300 pt-1">
                  <span>Estimated Total:</span>
                  <span className="font-mono text-base">{formatCurrency(totalWithGst)}</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={`/contact?plan=${activeChannel}&volume=${volume}`}
                  variant="radiant"
                  size="md"
                  className="w-full shadow-radiant-sm font-bold"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Proceed with this Plan
                </Button>
                <div className="text-[11px] text-slate-500 mt-2">
                  ✓ Instant activation after KYC verification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
