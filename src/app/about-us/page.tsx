import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Award, Users, Globe2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { COMPANY_INFO } from "@/data/company";
import { aboutUsMetadata } from "@/metadata/aboutUs";

export const metadata: Metadata = aboutUsMetadata;

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 text-center">
          <Badge variant="radiant" size="md">
            Established 2008
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Pioneering Enterprise Telecom &{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Cloud Messaging in India
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {COMPANY_INFO.name} (a business unit of {COMPANY_INFO.legalName}) was founded in {COMPANY_INFO.foundedYear} with a mission to build transparent, reliable, high-throughput communication infrastructure for Indian enterprises.
          </p>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">ISO 9001 & 27001</h3>
              <p className="text-xs text-slate-500 mt-2">
                Certified Information Security and Quality Management systems protecting client data.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
              <Award className="h-8 w-8 text-violet-600 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">15+ Years Trust</h3>
              <p className="text-xs text-slate-500 mt-2">
                Over a decade and a half of carrier relationships, high SLAs, and technological leadership.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
              <Users className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">25,000+ Clients</h3>
              <p className="text-xs text-slate-500 mt-2">
                Serving leading banks, universities, hospitals, manufacturing hubs, and startups.
              </p>
            </div>
          </div>

          {/* Association & Telecom Partner Logos Bar */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-1.5">
              <div className="relative h-14 w-36 rounded-xl bg-white p-2 shadow-sm border border-slate-200 dark:bg-white/95 transition-all hover:scale-105">
                <Image src="/assets/img/associations/iso.png" alt="ISO 9001 & 27001 Certified" fill className="object-contain" />
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-center max-w-[130px] leading-tight">
                ISO 9001 &amp; 27001 Certified
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="relative h-14 w-36 rounded-xl bg-white p-2 shadow-sm border border-slate-200 dark:bg-white/95 transition-all hover:scale-105">
                <Image src="/assets/img/associations/msme.png" alt="MSME Registered Enterprise" fill className="object-contain" />
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-center max-w-[130px] leading-tight">
                MSME Registered Enterprise
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="relative h-14 w-36 rounded-xl bg-white p-2 shadow-sm border border-slate-200 dark:bg-white/95 transition-all hover:scale-105">
                <Image src="/assets/img/associations/mpsedc.png" alt="MPSEDC Associated Partner" fill className="object-contain" />
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-center max-w-[130px] leading-tight">
                MPSEDC Associated Partner
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="relative h-14 w-60 rounded-xl bg-white p-2 shadow-sm border border-slate-200 dark:bg-white/95 transition-all hover:scale-105">
                <Image src="/assets/img/operators-logo.png" alt="Jio Airtel Vi BSNL Telecom Connectivity" fill className="object-contain" />
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-center max-w-[200px] leading-tight">
                Direct Operator Connectivity
              </span>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ContactFormSection />
    </div>
  );
}
