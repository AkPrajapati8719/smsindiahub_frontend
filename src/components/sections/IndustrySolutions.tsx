import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Car,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { INDUSTRIES_DATA } from "@/data/industries";

const INDUSTRY_IMAGES: Record<string, string> = {
  "real-estate": "/assets/img/lead-generation-for-real-estate.png",
  "education-and-schools": "/assets/img/lead-automation-for-edutech.png",
  "healthcare-and-hospitals": "/assets/img/appointment-automation-for-lead-generation.png",
  "banking-and-finance": "/assets/img/Two-factor-authentication-service.png",
  "ecommerce-and-retail": "/assets/img/IndiaMart-Lead-Automation-via-WhatsApp.png",
  "automotive": "/assets/img/lead-generation-for-automobile-industry.png",
};

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-5 w-5" />,
  GraduationCap: <GraduationCap className="h-5 w-5" />,
  HeartPulse: <HeartPulse className="h-5 w-5" />,
  Landmark: <Landmark className="h-5 w-5" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5" />,
  Car: <Car className="h-5 w-5" />,
};

export function IndustrySolutions() {
  // Exactly 6 Core Industry Cards
  const coreIndustries = INDUSTRIES_DATA.slice(0, 6);

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50" id="industries">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="blue" size="md">
            Industry-Specific Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored Automation for{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Every Business Vertical
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Pre-built communication workflows, verified DLT message templates, and automated lead capture pipelines configured for your industry.
          </p>
        </div>

        {/* Exactly 6 Clean Industry Cards with Compact 3-Line Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreIndustries.map((ind) => (
            <div
              key={ind.slug}
              className="group rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
            >
              <div>
                {/* Visual Industry Graphic */}
                {INDUSTRY_IMAGES[ind.slug] && (
                  <div className="relative mb-3 h-32 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 p-2 border border-slate-100 dark:border-slate-800">
                    <Image
                      src={INDUSTRY_IMAGES[ind.slug]}
                      alt={ind.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Header: Icon & Title */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                    {INDUSTRY_ICONS[ind.icon] || <Building2 className="h-4 w-4" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                    {ind.title}
                  </h3>
                </div>

                {/* Tagline */}
                <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 truncate">
                  {ind.tagline}
                </div>

                {/* Compact Description (2-3 Lines) */}
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {ind.description}
                </p>

                {/* 2 Key Solution Bullets */}
                <ul className="mt-3 space-y-1.5 border-t border-slate-100 dark:border-slate-800 pt-3 text-xs text-slate-700 dark:text-slate-300">
                  {ind.solutions.slice(0, 2).map((sol, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/bulk-sms-for-${ind.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore {ind.title.split(" ")[0]} Stack</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
