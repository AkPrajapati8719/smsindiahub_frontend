"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Zap,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card3D } from "@/components/ui/Card3D";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  ENTERPRISE_CLIENTS,
  TESTIMONIALS_DATA,
  CLIENT_CASE_STUDIES,
  ClientLogo,
} from "@/data/clients";

const CATEGORIES = [
  "All",
  "Government & PSUs",
  "Banking & BFSI",
  "Education & Universities",
  "Automotive & Manufacturing",
  "Aviation & Travel",
  "Retail, Media & Real Estate",
] as const;

export function ClientsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredClients =
    activeCategory === "All"
      ? ENTERPRISE_CLIENTS
      : ENTERPRISE_CLIENTS.filter((c) => c.category === activeCategory);

  return (
    <div className="space-y-24 py-12">
      {/* 1. Hero & Trust Metrics Header */}
      <section className="container mx-auto px-4 sm:px-6 text-center max-w-4xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="radiant" size="md">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            India&apos;s Most Trusted CPaaS Network
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Trusted by{" "}
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            25,000+ Enterprises,
          </span>{" "}
          Universities & Government Bodies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          From Fortune 500 conglomerates and national airlines to premier
          central universities and government departments, see how India&apos;s
          leading organizations scale their mission-critical communications with
          SMSIndiaHub.
        </motion.p>

        {/* Highlight Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
        >
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              <AnimatedCounter value="25,000+" duration={2200} />
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Enterprise Clients
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              <AnimatedCounter value="99.99%" duration={2200} />
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Guaranteed SLA Uptime
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-violet-600 dark:text-violet-400">
              <AnimatedCounter value="10B+" duration={2200} />
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Monthly Message Volume
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
              <AnimatedCounter value="< 2.1s" duration={2200} />
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Average OTP Delivery Speed
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Interactive Category Filter Bar */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 text-white shadow-md scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:border-blue-500"
              }`}
            >
              {cat}
              {cat === "All" && ` (${ENTERPRISE_CLIENTS.length})`}
            </button>
          ))}
        </div>
      </section>

      {/* 3. High-Contrast Client Logos Grid with Animations */}
      <section className="container mx-auto px-4 sm:px-6">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card3D className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between group">
                    <div>
                      {/* Enlarged Logo Container */}
                      <div className="relative h-20 w-full rounded-xl bg-slate-50 dark:bg-white/95 p-3 flex items-center justify-center border border-slate-100 dark:border-slate-700 shadow-inner mb-4 overflow-hidden">
                        <Image
                          src={client.logoUrl}
                          alt={`${client.name} Logo`}
                          fill
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Client Details */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                            {client.name}
                          </h3>
                          <Badge variant="slate" size="sm">
                            {client.category.split(" ")[0]}
                          </Badge>
                        </div>
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {client.tagline}
                        </p>
                      </div>

                      {client.useCase && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                          {client.useCase}
                        </p>
                      )}
                    </div>

                    {/* Metric Footer */}
                    {client.metrics && (
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                        <span>{client.metrics}</span>
                      </div>
                    )}
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Enterprise Case Studies / Success Stories */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-blue-600/30 to-violet-600/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="blue" size="md">
                Proven Impact
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Enterprise Success Stories & Case Studies
              </h2>
              <p className="text-sm text-slate-400">
                Discover how organizations achieved 99.99% delivery reliability
                and multi-fold engagement with SMSIndiaHub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CLIENT_CASE_STUDIES.map((study, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between space-y-4 hover:border-blue-500 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                      {study.client}
                    </div>
                    <h3 className="font-bold text-white text-lg leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-white">Challenge:</strong>{" "}
                      {study.challenge}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-white">Solution:</strong>{" "}
                      {study.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-700/80 text-center">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-base font-extrabold text-cyan-400">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="radiant" size="md">
            Customer Feedback
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            What Leaders Say About Us
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real experiences from enterprise VPs, CTOs, and digital marketing
            leaders across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.role}, {t.company}
                  </div>
                </div>
                {t.verified && (
                  <Badge variant="green" size="sm">
                    Verified Buyer
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Enterprise Call to Action */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 p-8 sm:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto tracking-tight">
            Ready to Deliver 99.99% Reliability to Your Customers?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Join 25,000+ businesses across India. Get instant sandbox API keys,
            free testing credits, and dedicated telecom account manager support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href="/contact"
              variant="white"
              size="lg"
              icon={<ArrowRight className="h-5 w-5 text-blue-600" />}
            >
              Get Free Enterprise Account
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              View Transparent Tariffs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
