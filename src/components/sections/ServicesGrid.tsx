"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Megaphone,
  Send,
  MessageSquareText,
  Bot,
  Sparkles,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { Badge } from "@/components/ui/Badge";
import { SERVICES_DATA } from "@/data/services";

// Exactly 6 Core Enterprise Services for a Clean 3x2 Grid
const CORE_6_SERVICE_IDS = [
  "otp-sms",
  "promotional-sms",
  "transactional-sms",
  "whatsapp-api",
  "whatsapp-chatbot",
  "voice-broadcasting",
];

const SERVICE_IMAGES: Record<string, string> = {
  "otp-sms": "/assets/img/Two-factor-authentication-service.png",
  "promotional-sms": "/assets/img/fast-bulk-sms-delivery-service.png",
  "transactional-sms": "/assets/img/transaction-confirmation.png",
  "whatsapp-api": "/assets/img/official-whatsapp-business-api-software.png",
  "whatsapp-chatbot": "/assets/img/whatsapp-chatbot.png",
  "voice-broadcasting": "/assets/img/voice-sms-art.png",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-5 w-5" />,
  Megaphone: <Megaphone className="h-5 w-5" />,
  Send: <Send className="h-5 w-5" />,
  MessageSquareText: <MessageSquareText className="h-5 w-5" />,
  Bot: <Bot className="h-5 w-5" />,
  PhoneCall: <PhoneCall className="h-5 w-5" />,
};

export function ServicesGrid() {
  const [filter, setFilter] = useState<string>("all");

  const coreServices = SERVICES_DATA.filter((s) =>
    CORE_6_SERVICE_IDS.includes(s.id)
  );

  const filteredServices =
    filter === "all"
      ? coreServices
      : coreServices.filter((s) => s.category === filter);

  return (
    <section className="bg-white py-20 dark:bg-slate-950" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="radiant" size="md">
            Omnichannel CPaaS Suite
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Reach &amp; Engage Millions
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            From lightning-fast OTP authentication to conversational WhatsApp bots and automated voice broadcasts, deploy your enterprise messaging stack in minutes.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {[
              { id: "all", label: "All 6 Services" },
              { id: "sms", label: "📱 SMS Gateways" },
              { id: "whatsapp", label: "💬 WhatsApp Solutions" },
              { id: "voice", label: "📞 Voice & IVR" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-blue-600 text-white shadow-radiant-sm scale-105"
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3x2 Service Cards Grid (Exactly 6 Core Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card3D
              key={service.id}
              tiltIntensity={7}
              glowColor="rgba(37, 99, 235, 0.16)"
              className="flex flex-col justify-between h-full group p-5 rounded-2xl"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="rounded-xl bg-gradient-to-tr from-violet-600/10 via-blue-600/10 to-cyan-600/10 p-2.5 text-blue-600 border border-blue-200/50 dark:border-blue-800/40 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {ICON_MAP[service.iconName] || <Send className="h-5 w-5" />}
                  </div>

                  {service.tag && (
                    <Badge variant="radiant" size="sm" className="text-[11px] py-0.5 px-2">
                      {service.tag}
                    </Badge>
                  )}
                </div>

                {/* Service Visual Preview Banner */}
                {SERVICE_IMAGES[service.id] && (
                  <div className="relative mb-3 h-32 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 p-2 border border-slate-100 dark:border-slate-800">
                    <Image
                      src={SERVICE_IMAGES[service.id]}
                      alt={service.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Title & Short Desc (Concise 2 Lines) */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Bullet Features (Concise 2 Bullets) */}
                <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  Instant Setup
                </span>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
