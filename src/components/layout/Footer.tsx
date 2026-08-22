import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { CITIES_DATA } from "@/data/cities";
import { INDUSTRIES_DATA } from "@/data/industries";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      {/* Top Value Banner */}
      <div className="border-b border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900/50 py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  TRAI DLT Compliant
                </h4>
                <p className="text-xs text-slate-500">
                  100% Verified Telemarketer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  99.99% Uptime SLA
                </h4>
                <p className="text-xs text-slate-500">
                  Direct Telecom Operator Pipes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  24/7 Priority NOC
                </h4>
                <p className="text-xs text-slate-500">
                  Dedicated Enterprise Account Managers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  ISO 9001 & 27001
                </h4>
                <p className="text-xs text-slate-500">
                  Bank-Grade Data Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Headquarters */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative h-12 w-56 transition-all duration-300 dark:bg-white/95 dark:rounded-xl dark:px-3 dark:py-1.5 dark:shadow-[0_0_25px_rgba(255,255,255,0.15)] group-hover:scale-105">
                <Image
                  src="/assets/img/smsindiahub-new-logo.png"
                  alt="SMSIndiaHub Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              {COMPANY_INFO.name} (a unit of {COMPANY_INFO.legalName}) is
              India&apos;s leading CPaaS & business messaging provider.
              Delivering high-priority OTP SMS, WhatsApp Business API, RCS, and
              Voice solutions since {COMPANY_INFO.foundedYear}.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                <span>{COMPANY_INFO.addresses.headquarters.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-600" />
                <a
                  href={`tel:${COMPANY_INFO.phones.primary}`}
                  className="hover:text-blue-600"
                >
                  {COMPANY_INFO.phones.primary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-600" />
                <a
                  href={`mailto:${COMPANY_INFO.emails.support}`}
                  className="hover:text-blue-600"
                >
                  {COMPANY_INFO.emails.support}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Messaging Suite */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              Messaging Suite
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/otp-sms-service-provider"
                  className="hover:text-blue-600"
                >
                  OTP SMS Gateway
                </Link>
              </li>
              <li>
                <Link href="/promotional-sms" className="hover:text-blue-600">
                  Promotional Bulk SMS
                </Link>
              </li>
              <li>
                <Link href="/transactional-sms" className="hover:text-blue-600">
                  Transactional SMS
                </Link>
              </li>
              <li>
                <Link
                  href="/two-factor-authentication"
                  className="hover:text-blue-600"
                >
                  Two Factor (2FA)
                </Link>
              </li>
              <li>
                <Link href="/smart-sms" className="hover:text-blue-600">
                  Smart SMS Link Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/send-attachments-via-sms"
                  className="hover:text-blue-600"
                >
                  Send Attachments via SMS
                </Link>
              </li>
              <li>
                <Link
                  href="/sim-based-sms-gateway"
                  className="hover:text-blue-600"
                >
                  SIM-Based SMS Gateway
                </Link>
              </li>
              <li>
                <Link
                  href="/international-bulk-sms"
                  className="hover:text-blue-600"
                >
                  International Bulk SMS
                </Link>
              </li>
              <li>
                <Link href="/bulk-sms-reseller" className="hover:text-blue-600">
                  White-Label Reseller
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: WhatsApp, RCS & Voice */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              WhatsApp, RCS & Voice
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/whatsapp-business-api"
                  className="hover:text-blue-600"
                >
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-chatbot" className="hover:text-blue-600">
                  AI WhatsApp Chatbots
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-flows" className="hover:text-blue-600">
                  WhatsApp Interactive Flows
                </Link>
              </li>
              <li>
                <Link
                  href="/rcs-messaging-services"
                  className="hover:text-blue-600"
                >
                  RCS Rich Messaging
                </Link>
              </li>
              <li>
                <Link
                  href="/voice-call-service-provider"
                  className="hover:text-blue-600"
                >
                  Voice Call Broadcasting
                </Link>
              </li>
              <li>
                <Link href="/voice-otp-service" className="hover:text-blue-600">
                  Voice OTP Service
                </Link>
              </li>
              <li>
                <Link
                  href="/missed-call-service-provider"
                  className="hover:text-blue-600"
                >
                  Missed Call Alert Service
                </Link>
              </li>
              <li>
                <Link href="/multi-level-ivr" className="hover:text-blue-600">
                  Multi-Level IVR System
                </Link>
              </li>
              <li>
                <Link
                  href="/toll-free-service-provider-india"
                  className="hover:text-blue-600"
                >
                  1800 Toll-Free Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: DLT & Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              DLT & Developers
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dlt-registration" className="hover:text-blue-600">
                  DLT Registration Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/dlt-content-templates-explained"
                  className="hover:text-blue-600"
                >
                  DLT Content Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/pe-tm-binding-chain-process-in-dlt-portal"
                  className="hover:text-blue-600"
                >
                  PE-TM Chain Binding
                </Link>
              </li>
              <li>
                <Link href="/api/india" className="hover:text-blue-600">
                  India SMS REST API
                </Link>
              </li>
              <li>
                <Link
                  href="/free-sms-gateway-developer-api"
                  className="hover:text-blue-600"
                >
                  International SMS API
                </Link>
              </li>
              <li>
                <Link
                  href="/business-softwares-reselling"
                  className="hover:text-blue-600"
                >
                  The VAULT
                </Link>
              </li>
              <li>
                <Link href="/magic-qr-code" className="hover:text-blue-600">
                  Magic QR Code for Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-aeo-geo-optimization-services"
                  className="hover:text-blue-600"
                >
                  SEO, AEO & GEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/excel-plugin" className="hover:text-blue-600">
                  Free Excel SMS Plugin
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600">
                  Pricing & Tariff Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  ★ Our Happy Clients
                </Link>
              </li>
              <li>
                <Link href="/banking-details" className="hover:text-blue-600">
                  Official Bank Wire Details
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Office Addresses & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* City-wise Programmatic SEO Links Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            City-Wise Bulk SMS Hubs Across India
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {CITIES_DATA.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-slate-600 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
              >
                Bulk SMS in {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Industry Use Cases Bar */}
        <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Industry Lead Management & Automated Use Cases
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {INDUSTRIES_DATA.map((ind) => (
              <Link
                key={ind.slug}
                href={`/bulk-sms-for-${ind.slug}`}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-slate-600 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
              >
                Bulk SMS for {ind.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Legal links */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 text-xs text-slate-500 dark:border-slate-800">
          <div>
            &copy; {COMPANY_INFO.copyrightYears}{" "}
            <strong>{COMPANY_INFO.name}</strong> (A unit of{" "}
            {COMPANY_INFO.legalName}). All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 font-medium">
            <Link href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-600">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-blue-600">
              Refund Policy
            </Link>
            <Link href="/no-spam" className="hover:text-blue-600">
              Anti-Spam Policy
            </Link>
            <Link href="/banking-details" className="hover:text-blue-600">
              Bank Details
            </Link>
            <Link href="/sitemap.xml" className="hover:text-blue-600">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
