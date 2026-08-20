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
  PhoneIncoming,
  Link2,
  FileSpreadsheet,
  Cpu,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { Badge } from "@/components/ui/Badge";
import { SERVICES_DATA, ServiceItem } from "@/data/services";

const SERVICE_IMAGES: Record<string, string> = {
  "otp-sms": "/assets/img/Two-factor-authentication-service.png",
  "promotional-sms": "/assets/img/fast-bulk-sms-delivery-service.png",
  "transactional-sms": "/assets/img/transaction-confirmation.png",
  "whatsapp-api": "/assets/img/official-whatsapp-business-api-software.png",
  "whatsapp-chatbot": "/assets/img/whatsapp-chatbot.png",
  "rcs-messaging": "/assets/img/re-engagement-campaigns.png",
  "voice-broadcasting": "/assets/img/voice-sms-art.png",
  "missed-call-service": "/assets/img/assign-and-distribute-leads-on-missed-call.png",
  "smart-sms": "/assets/img/Smart-SMS-Service.png",
  "excel-plugin": "/assets/img/excel-plugins.png",
  "lead-automation": "/assets/img/IndiaMart-Lead-Automation-via-WhatsApp.png",
  "bulk-sms-reseller": "/assets/img/become-bulk-sms-reseller.png",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Megaphone: <Megaphone className="h-6 w-6" />,
  Send: <Send className="h-6 w-6" />,
  MessageSquareText: <MessageSquareText className="h-6 w-6" />,
  Bot: <Bot className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  PhoneCall: <PhoneCall className="h-6 w-6" />,
  PhoneIncoming: <PhoneIncoming className="h-6 w-6" />,
  Link2: <Link2 className="h-6 w-6" />,
  FileSpreadsheet: <FileSpreadsheet className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
};

export function ServicesGrid() {
  const [filter, setFilter] = useState<string>("all");

  const filteredServices =
    filter === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === filter);

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
              Reach & Engage Millions
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From lightning-fast OTP authentication pipelines to conversational WhatsApp bots and automated voice broadcasts, deploy your enterprise messaging stack in minutes.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Services" },
              { id: "sms", label: "📱 SMS Solutions" },
              { id: "whatsapp", label: "💬 WhatsApp & Bots" },
              { id: "voice", label: "📞 Voice & IVR" },
              { id: "rcs", label: "✨ RCS Next-Gen" },
              { id: "automation", label: "⚡ Lead Automation" },
              { id: "tools", label: "🛠️ Tools & Plugins" },
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

        {/* 3D Service Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card3D
              key={service.id}
              tiltIntensity={8}
              glowColor="rgba(37, 99, 235, 0.18)"
              className="flex flex-col justify-between h-full group"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="rounded-xl bg-gradient-to-tr from-violet-600/10 via-blue-600/10 to-cyan-600/10 p-3 text-blue-600 border border-blue-200/50 dark:border-blue-800/40 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {ICON_MAP[service.iconName] || <Send className="h-6 w-6" />}
                  </div>

                  {service.tag && (
                    <Badge variant="radiant" size="sm">
                      {service.tag}
                    </Badge>
                  )}
                </div>

                {/* Service Visual Preview Banner */}
                {SERVICE_IMAGES[service.id] && (
                  <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 p-2 border border-slate-100 dark:border-slate-800">
                    <Image
                      src={SERVICE_IMAGES[service.id]}
                      alt={service.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Title & Short Desc */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Bullet Features */}
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                {service.startingPrice ? (
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Starts At</span>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {service.startingPrice}
                    </div>
                  </div>
                ) : (
                  <span className="text-xs font-semibold text-emerald-600">Enterprise Ready</span>
                )}

                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 group-hover:translate-x-1 transition-all"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
