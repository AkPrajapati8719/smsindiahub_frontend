"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Radio,
  Globe2,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Card3D } from "@/components/ui/Card3D";

const STATS_ITEMS = [
  {
    id: "uptime",
    value: "99.99%",
    label: "Infrastructure Uptime SLA",
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    glowColor: "rgba(16, 185, 129, 0.28)",
    gradient: "from-emerald-400 to-teal-400",
    badge: "Tier-4 Carrier SLA",
  },
  {
    id: "volume",
    value: "500M+",
    label: "Monthly Messages",
    icon: <Zap className="h-5 w-5 text-blue-400" />,
    glowColor: "rgba(59, 130, 246, 0.28)",
    gradient: "from-blue-400 to-cyan-400",
    badge: "10,000 TPS Peak",
  },
  {
    id: "clients",
    value: "25,000+",
    label: "Active Clients",
    icon: <Users className="h-5 w-5 text-violet-400" />,
    glowColor: "rgba(139, 92, 246, 0.28)",
    gradient: "from-violet-400 to-purple-400",
    badge: "Pan-India Trust",
  },
  {
    id: "latency",
    value: "< 2.5s",
    label: "Avg OTP Latency",
    icon: <Clock className="h-5 w-5 text-amber-400" />,
    glowColor: "rgba(245, 158, 11, 0.28)",
    gradient: "from-amber-400 to-orange-400",
    badge: "Direct SMPP Bind",
  },
  {
    id: "binds",
    value: "12+",
    label: "Direct Telecom Binds",
    icon: <Radio className="h-5 w-5 text-sky-400" />,
    glowColor: "rgba(14, 165, 233, 0.28)",
    gradient: "from-sky-400 to-blue-400",
    badge: "Jio • Airtel • Vi • BSNL",
  },
  {
    id: "coverage",
    value: "190+",
    label: "Countries Covered",
    icon: <Globe2 className="h-5 w-5 text-indigo-400" />,
    glowColor: "rgba(99, 102, 241, 0.28)",
    gradient: "from-indigo-400 to-violet-400",
    badge: "Worldwide Reach",
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white dark:bg-slate-950">
      {/* Ambient Multi-Color Telecom Radial Glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

      {/* Futuristic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:28px_28px] opacity-70" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Single-Row 3D Telemetry Grid (6 Columns on Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {STATS_ITEMS.map((item) => (
            <Card3D
              key={item.id}
              tiltIntensity={9}
              glowColor={item.glowColor}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/85 p-4 sm:p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/95 flex flex-col justify-between items-center text-center h-full"
            >
              {/* Card Ambient Glow */}
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-10 blur-xl transition-opacity group-hover:opacity-35"
                style={{ backgroundColor: item.glowColor }}
              />

              <div className="relative z-10 flex flex-col items-center justify-between w-full h-full space-y-2">
                {/* Top Icon with Subtle Glow */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/80 shadow-inner transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* 3D Animated Value Counter */}
                <div className="text-2xl sm:text-3xl lg:text-3xl font-black tracking-tight font-mono text-white group-hover:scale-105 transition-transform duration-300 my-0.5">
                  <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    <AnimatedCounter value={item.value} duration={2200} />
                  </span>
                </div>

                {/* Label */}
                <div className="text-xs font-bold text-slate-200 leading-snug min-h-[32px] flex items-center justify-center">
                  {item.label}
                </div>

                {/* Micro Pill Badge */}
                <div className="pt-1.5 border-t border-slate-800/80 w-full">
                  <span className="inline-block rounded-full border border-slate-800 bg-slate-800/60 px-2 py-0.5 text-[10px] font-semibold text-slate-400 truncate max-w-full">
                    {item.badge}
                  </span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Bottom Verification Banner */}
        <div className="mt-8 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3 sm:p-4 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle className="h-4 w-4" />
            </div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>Official Meta Cloud API Partner</span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400 border border-emerald-500/30">
                Verified Tier
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="text-xs font-bold text-white">
              TRAI DLT Enforced • 100% PE-TM Chain Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
