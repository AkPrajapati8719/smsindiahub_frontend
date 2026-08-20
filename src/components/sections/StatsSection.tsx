"use client";

import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsSection() {
  return (
    <section className="relative bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 py-16 text-white overflow-hidden shadow-radiant-lg">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-mono">
              <AnimatedCounter value={COMPANY_INFO.stats.uptime} duration={2200} />
            </div>
            <div className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
              Infrastructure Uptime SLA
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-mono">
              <AnimatedCounter value={COMPANY_INFO.stats.messagesDeliveredPerMonth} duration={2400} />
            </div>
            <div className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
              Monthly Messages
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-mono">
              <AnimatedCounter value={COMPANY_INFO.stats.activeClients} duration={2200} />
            </div>
            <div className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
              Active Enterprise Clients
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-mono">
              <AnimatedCounter value={COMPANY_INFO.stats.averageOtpLatency} duration={1800} />
            </div>
            <div className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
              Avg OTP Latency
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-mono">
              <AnimatedCounter value={COMPANY_INFO.stats.directTelecomBinds} duration={2000} />
            </div>
            <div className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
              Direct Telecom Binds
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-mono">
              <AnimatedCounter value={COMPANY_INFO.stats.countriesCovered} duration={2200} />
            </div>
            <div className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
              Countries Covered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
