"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ENTERPRISE_CLIENTS } from "@/data/clients";

export function TrustLogos() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/70 py-14 dark:border-slate-800 dark:bg-slate-950/70 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Trusted by India&apos;s Leading Enterprises, Universities & Government Bodies
          </p>

          <Link
            href="/clients"
            className="group inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 px-4 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm hover:shadow"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500 group-hover:text-white transition-colors" />
            <span>Explore All Happy Clients</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Infinite Scrolling Logo Stream with Increased Size Logos */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 sm:gap-8 items-center py-2">
          {[...ENTERPRISE_CLIENTS, ...ENTERPRISE_CLIENTS].map((client, idx) => (
            <Link
              key={idx}
              href="/clients"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 pr-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 shrink-0"
            >
              {/* Increased Logo Container Size */}
              <div className="relative h-14 w-28 sm:h-16 sm:w-32 rounded-xl bg-white p-2 flex items-center justify-center border border-slate-100 dark:bg-white/95 dark:border-slate-700 shadow-inner">
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                  {client.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{client.category}</div>
                {client.metrics && (
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                    ✓ {client.metrics}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
