"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  Mail,
  MessageSquare,
  FileSpreadsheet,
  Paperclip,
  Settings,
  Smartphone,
  GraduationCap,
  Shuffle,
  Users,
  Mic,
  Phone,
  RotateCcw,
  Building,
  Building2,
  Train,
  Landmark,
  Home,
  HeartPulse,
  Bot,
  Share2,
  Code2,
} from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setMobileExpanded({});
  }, [pathname]);

  const toggleMobile = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md dark:bg-slate-950/95 dark:border-b dark:border-slate-800"
          : "bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800"
      )}
    >
      {/* Top Value Banner Strip (Previous UI with 3 Centered Links) */}
      <div className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 px-4 py-1.5 text-xs font-semibold text-white">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Announcement */}
          <span className="hidden xl:inline">
            🚀 High-Priority OTP &amp; WhatsApp Business API Routes Available with 99.99% SLA
          </span>
          <span className="xl:hidden hidden sm:inline">
            🚀 High-Priority OTP &amp; WhatsApp Gateway
          </span>

          {/* Center: The 3 Links in Previous Clean Style */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium">
            <Link
              href="/business-softwares-reselling"
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <Paperclip className="h-3 w-3" />
              <span>The VAULT</span>
            </Link>
            <span className="opacity-40">|</span>
            <Link
              href="/magic-qr-code"
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <Paperclip className="h-3 w-3" />
              <span>Magic QR Code</span>
            </Link>
            <span className="opacity-40">|</span>
            <Link
              href="/seo-aeo-geo-optimization-services"
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
            >
              <Paperclip className="h-3 w-3" />
              <span>SEO</span>
            </Link>
          </div>

          {/* Right: Phone Contact & DLT */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium">
            <a
              href={`tel:${COMPANY_INFO.phones.primary}`}
              className="hover:underline flex items-center gap-1 font-bold"
            >
              📞 {COMPANY_INFO.phones.primary}
            </a>
            <span className="opacity-60 hidden sm:inline">|</span>
            <Link
              href="/dlt-registration"
              className="hover:underline font-bold hidden sm:inline"
            >
              DLT Assistance →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-48 sm:w-56 transition-all duration-300 dark:bg-white/95 dark:rounded-xl dark:px-3 dark:py-1.5 dark:shadow-[0_0_25px_rgba(255,255,255,0.15)] group-hover:scale-105">
            <Image
              src="/assets/img/smsindiahub-new-logo.png"
              alt="SMSIndiaHub Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Each child has a 100% DISTINCT, dedicated route) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 text-slate-800 dark:text-slate-200">
          {/* 1. SMS Dropdown with Flyouts */}
          <div
            className="relative"
            onMouseEnter={() => {
              setActiveDropdown("sms");
              setActiveSubmenu("send-sms");
            }}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setActiveSubmenu(null);
            }}
          >
            <button
              className={cn(
                "flex items-center gap-1 px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                activeDropdown === "sms" && "text-blue-600 dark:text-blue-400"
              )}
            >
              <span>SMS</span>
              <ChevronDown className="h-4 w-4 transition-transform" />
            </button>

            {activeDropdown === "sms" && (
              <div className="absolute right-0 sm:left-0 top-full pt-2 flex">
                {/* Main SMS Dropdown Card */}
                <div className="w-56 rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  {/* Send SMS Submenu Trigger */}
                  <div
                    onMouseEnter={() => setActiveSubmenu("send-sms")}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold cursor-pointer transition-colors",
                      activeSubmenu === "send-sms"
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Send SMS</span>
                    </div>
                    <ChevronLeft className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Receive SMS Submenu Trigger */}
                  <div
                    onMouseEnter={() => setActiveSubmenu("receive-sms")}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold cursor-pointer transition-colors",
                      activeSubmenu === "receive-sms"
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                      <span>Receive SMS</span>
                    </div>
                    <ChevronLeft className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Bulk SMS Reseller (Distinct Route: /bulk-sms-reseller/) */}
                  <Link
                    href="/bulk-sms-reseller"
                    onMouseEnter={() => setActiveSubmenu(null)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                  >
                    <Users className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                    <span>Bulk SMS Reseller</span>
                  </Link>
                </div>

                {/* Send SMS Flyout Submenu to the Left */}
                {activeSubmenu === "send-sms" && (
                  <div className="absolute right-full top-2 mr-1 w-64 rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 animate-in fade-in duration-150">
                    <div className="space-y-0.5">
                      <Link
                        href="/otp-sms-service-provider"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
                        <span>OTP SMS</span>
                      </Link>
                      <Link
                        href="/two-factor-authentication"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
                        <span>Two Factor (2FA)</span>
                      </Link>
                      <Link
                        href="/promotional-sms"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                        <span>Promotional SMS</span>
                      </Link>
                      <Link
                        href="/transactional-sms"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                        <span>Transactional SMS</span>
                      </Link>
                      <Link
                        href="/excel-plugin"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <FileSpreadsheet className="h-3.5 w-3.5 text-slate-400" />
                        <span>Free Excel Plugin</span>
                      </Link>
                      <Link
                        href="/send-attachments-via-sms"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Paperclip className="h-3.5 w-3.5 text-slate-400" />
                        <span>Send Attachments</span>
                      </Link>
                      <Link
                        href="/smart-sms"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Settings className="h-3.5 w-3.5 text-slate-400" />
                        <span>Smart SMS</span>
                      </Link>
                      <Link
                        href="/sim-based-sms-gateway"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Smartphone className="h-3.5 w-3.5 text-slate-400" />
                        <span>SIM Based SMS</span>
                      </Link>
                      <Link
                        href="/bulk-sms-for-education"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <GraduationCap className="h-3.5 w-3.5 text-slate-400" />
                        <span>Smart School</span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Receive SMS Flyout Submenu to the Left */}
                {activeSubmenu === "receive-sms" && (
                  <div className="absolute right-full top-12 mr-1 w-56 rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 animate-in fade-in duration-150">
                    <div className="space-y-0.5">
                      <Link
                        href="/short-code-service-provider"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Shuffle className="h-3.5 w-3.5 text-slate-400" />
                        <span>Short Code Service</span>
                      </Link>
                      <Link
                        href="/long-code-service"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Shuffle className="h-3.5 w-3.5 text-slate-400" />
                        <span>Long Code Service</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 2. Call Dropdown (Each item has its own distinct route) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("call")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={cn(
                "flex items-center gap-1 px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                activeDropdown === "call" && "text-blue-600 dark:text-blue-400"
              )}
            >
              <span>Call</span>
              <ChevronDown className="h-4 w-4 transition-transform" />
            </button>

            {activeDropdown === "call" && (
              <div className="absolute left-0 top-full pt-2 w-56">
                <div className="rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 animate-in fade-in duration-150">
                  <div className="space-y-0.5">
                    <Link
                      href="/voice-otp-service"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <Mic className="h-3.5 w-3.5 text-slate-400" />
                      <span>Voice OTP Service</span>
                    </Link>
                    <Link
                      href="/voice-call-service-provider"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-slate-400" />
                      <span>Voice Call Service</span>
                    </Link>
                    <Link
                      href="/missed-call-service-provider"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
                      <span>Missed Call Service</span>
                    </Link>
                    <Link
                      href="/multi-level-ivr"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <Building className="h-3.5 w-3.5 text-slate-400" />
                      <span>Multi Tier IVR</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. WhatsApp Dropdown (Green Accent with Flyout Submenu - Each child has its own distinct route) */}
          <div
            className="relative"
            onMouseEnter={() => {
              setActiveDropdown("whatsapp");
              setActiveSubmenu("industries");
            }}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setActiveSubmenu(null);
            }}
          >
            <button
              className={cn(
                "flex items-center gap-1 px-2.5 py-2 text-sm font-bold text-[#25D366] hover:text-emerald-600 transition-colors",
                activeDropdown === "whatsapp" && "text-emerald-600"
              )}
            >
              <span>WhatsApp</span>
              <ChevronDown className="h-4 w-4 text-[#25D366] transition-transform" />
            </button>

            {activeDropdown === "whatsapp" && (
              <div className="absolute right-0 sm:left-0 top-full pt-2 flex">
                {/* Main WhatsApp Dropdown Card */}
                <div className="w-64 rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  {/* Industries Flyout Submenu Trigger */}
                  <div
                    onMouseEnter={() => setActiveSubmenu("industries")}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold cursor-pointer transition-colors",
                      activeSubmenu === "industries"
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Industries</span>
                    </div>
                    <ChevronLeft className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Main WhatsApp Items with Distinct Routes */}
                  <div className="space-y-0.5 mt-0.5">
                    <Link
                      href="/whatsapp-business-api"
                      onMouseEnter={() => setActiveSubmenu(null)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 transition-colors"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                      <span>WhatsApp Business API</span>
                    </Link>
                    <Link
                      href="/whatsapp-chatbot"
                      onMouseEnter={() => setActiveSubmenu(null)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Bot className="h-3.5 w-3.5 text-emerald-500" />
                      <span>WhatsApp Chatbot</span>
                    </Link>
                    <Link
                      href="/whatsapp-flows"
                      onMouseEnter={() => setActiveSubmenu(null)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Share2 className="h-3.5 w-3.5 text-emerald-500" />
                      <span>WhatsApp Flows</span>
                    </Link>
                    <Link
                      href="/white-label-whatsapp-reseller-panel"
                      onMouseEnter={() => setActiveSubmenu(null)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Users className="h-3.5 w-3.5 text-emerald-500" />
                      <span>WhatsApp Reseller</span>
                    </Link>
                  </div>
                </div>

                {/* Industries Flyout Submenu to the Left (Each industry has its own distinct route) */}
                {activeSubmenu === "industries" && (
                  <div className="absolute right-full top-2 mr-1 w-56 rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 animate-in fade-in duration-150">
                    <div className="space-y-0.5">
                      <Link
                        href="/whatsapp-chatbot-for-edutech"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <GraduationCap className="h-3.5 w-3.5 text-slate-400" />
                        <span>Education</span>
                      </Link>
                      <Link
                        href="/whatsapp-chatbot-for-travel-and-tourism"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Train className="h-3.5 w-3.5 text-slate-400" />
                        <span>Travel</span>
                      </Link>
                      <Link
                        href="/banking-chatbots"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Landmark className="h-3.5 w-3.5 text-slate-400" />
                        <span>BSFI</span>
                      </Link>
                      <Link
                        href="/whatsapp-chatbot-for-real-estate"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <Home className="h-3.5 w-3.5 text-slate-400" />
                        <span>Real Estate</span>
                      </Link>
                      <Link
                        href="/whatsapp-chatbot-for-health-wellness-brands"
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                      >
                        <HeartPulse className="h-3.5 w-3.5 text-slate-400" />
                        <span>Healthcare</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4. RCS (Single Direct Link) */}
          <Link
            href="/rcs-messaging-services"
            className="px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            RCS
          </Link>

          {/* 5. APIs Dropdown (Distinct routes) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("apis")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={cn(
                "flex items-center gap-1 px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                activeDropdown === "apis" && "text-blue-600 dark:text-blue-400"
              )}
            >
              <span>APIs</span>
              <ChevronDown className="h-4 w-4 transition-transform" />
            </button>

            {activeDropdown === "apis" && (
              <div className="absolute left-0 top-full pt-2 w-56">
                <div className="rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 animate-in fade-in duration-150">
                  <div className="space-y-0.5">
                    <Link
                      href="/api/india"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <Settings className="h-3.5 w-3.5 text-slate-400" />
                      <span>India</span>
                    </Link>
                    <Link
                      href="/free-sms-gateway-developer-api"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <Code2 className="h-3.5 w-3.5 text-slate-400" />
                      <span>International</span>
                    </Link>
                    <Link
                      href="/whatsapp-business-api"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 transition-colors"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Whatsapp API</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. Pricing (Single Direct Link - No Dropdown) */}
          <Link
            href="/pricing"
            className="px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Pricing
          </Link>

          {/* 7. Pay (Single Direct Link) */}
          <Link
            href="/banking-details"
            className="px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Pay
          </Link>

          {/* 8. Sign Up (Single Direct Link to Registration Form) */}
          <Link
            href="/registration"
            className="px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Sign Up
          </Link>

          {/* 9. Connect (Single Direct Link) */}
          <Link
            href="/contact"
            className="px-2.5 py-2 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Connect
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/clients"
            className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors"
          >
            Clients
          </Link>
          <Button href="/registration" variant="radiant" size="sm">
            Free Demo
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-xl dark:border-slate-800 dark:bg-slate-950 max-h-[80vh] overflow-y-auto">
          <div className="space-y-3">
            {/* SMS Mobile Accordion */}
            <div>
              <button
                onClick={() => toggleMobile("sms")}
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900 dark:text-white"
              >
                <span>SMS</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    mobileExpanded["sms"] && "rotate-180"
                  )}
                />
              </button>
              {mobileExpanded["sms"] && (
                <div className="pl-4 space-y-2 pt-1 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                  <div className="text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400">
                    Send SMS
                  </div>
                  <div className="pl-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <Link href="/otp-sms-service-provider" className="block py-1">
                      OTP SMS
                    </Link>
                    <Link href="/two-factor-authentication" className="block py-1">
                      Two Factor (2FA)
                    </Link>
                    <Link href="/promotional-sms" className="block py-1">
                      Promotional SMS
                    </Link>
                    <Link href="/transactional-sms" className="block py-1">
                      Transactional SMS
                    </Link>
                    <Link href="/excel-plugin" className="block py-1">
                      Free Excel Plugin
                    </Link>
                    <Link href="/send-attachments-via-sms" className="block py-1">
                      Send Attachments
                    </Link>
                    <Link href="/smart-sms" className="block py-1">
                      Smart SMS
                    </Link>
                    <Link href="/sim-based-sms-gateway" className="block py-1">
                      SIM Based SMS
                    </Link>
                    <Link href="/bulk-sms-for-education" className="block py-1">
                      Smart School
                    </Link>
                  </div>

                  <div className="text-[11px] font-bold uppercase text-violet-600 dark:text-violet-400 pt-2">
                    Receive SMS
                  </div>
                  <div className="pl-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <Link href="/short-code-service-provider" className="block py-1">
                      Short Code Service
                    </Link>
                    <Link href="/long-code-service" className="block py-1">
                      Long Code Service
                    </Link>
                  </div>

                  <Link href="/bulk-sms-reseller" className="block pt-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    Bulk SMS Reseller
                  </Link>
                </div>
              )}
            </div>

            {/* Call Mobile Accordion */}
            <div>
              <button
                onClick={() => toggleMobile("call")}
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900 dark:text-white"
              >
                <span>Call</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    mobileExpanded["call"] && "rotate-180"
                  )}
                />
              </button>
              {mobileExpanded["call"] && (
                <div className="pl-4 space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                  <Link href="/voice-otp-service" className="block py-1">
                    Voice OTP Service
                  </Link>
                  <Link href="/voice-call-service-provider" className="block py-1">
                    Voice Call Service
                  </Link>
                  <Link href="/missed-call-service-provider" className="block py-1">
                    Missed Call Service
                  </Link>
                  <Link href="/multi-level-ivr" className="block py-1">
                    Multi Tier IVR
                  </Link>
                </div>
              )}
            </div>

            {/* WhatsApp Mobile Accordion */}
            <div>
              <button
                onClick={() => toggleMobile("whatsapp")}
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-[#25D366]"
              >
                <span>WhatsApp</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-[#25D366] transition-transform",
                    mobileExpanded["whatsapp"] && "rotate-180"
                  )}
                />
              </button>
              {mobileExpanded["whatsapp"] && (
                <div className="pl-4 space-y-2 pt-1 border-l-2 border-emerald-100 dark:border-slate-800 ml-2">
                  <div className="text-[11px] font-bold uppercase text-emerald-600 dark:text-emerald-400">
                    Industries
                  </div>
                  <div className="pl-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <Link href="/whatsapp-chatbot-for-edutech" className="block py-1">
                      Education
                    </Link>
                    <Link href="/whatsapp-chatbot-for-travel-and-tourism" className="block py-1">
                      Travel
                    </Link>
                    <Link href="/banking-chatbots" className="block py-1">
                      BSFI
                    </Link>
                    <Link href="/whatsapp-chatbot-for-real-estate" className="block py-1">
                      Real Estate
                    </Link>
                    <Link href="/whatsapp-chatbot-for-health-wellness-brands" className="block py-1">
                      Healthcare
                    </Link>
                  </div>

                  <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300 pt-2 font-medium">
                    <Link href="/whatsapp-business-api" className="block py-1">
                      WhatsApp Business API
                    </Link>
                    <Link href="/whatsapp-chatbot" className="block py-1">
                      WhatsApp Chatbot
                    </Link>
                    <Link href="/whatsapp-flows" className="block py-1">
                      WhatsApp Flows
                    </Link>
                    <Link href="/white-label-whatsapp-reseller-panel" className="block py-1">
                      WhatsApp Reseller
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* RCS Mobile */}
            <Link
              href="/rcs-messaging-services"
              className="block py-2 text-sm font-bold text-slate-900 dark:text-white"
            >
              RCS
            </Link>

            {/* APIs Mobile Accordion */}
            <div>
              <button
                onClick={() => toggleMobile("apis")}
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-slate-900 dark:text-white"
              >
                <span>APIs</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    mobileExpanded["apis"] && "rotate-180"
                  )}
                />
              </button>
              {mobileExpanded["apis"] && (
                <div className="pl-4 space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                  <Link href="/api/india" className="block py-1">
                    India
                  </Link>
                  <Link href="/free-sms-gateway-developer-api" className="block py-1">
                    International
                  </Link>
                  <Link href="/whatsapp-business-api" className="block py-1">
                    Whatsapp API
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing Mobile */}
            <Link
              href="/pricing"
              className="block py-2 text-sm font-bold text-slate-900 dark:text-white"
            >
              Pricing
            </Link>

            {/* Pay Mobile */}
            <Link
              href="/banking-details"
              className="block py-2 text-sm font-bold text-slate-900 dark:text-white"
            >
              Pay
            </Link>

            {/* Sign Up Mobile */}
            <Link
              href="/registration"
              className="block py-2 text-sm font-bold text-slate-900 dark:text-white"
            >
              Sign Up
            </Link>

            {/* Connect Mobile */}
            <Link
              href="/contact"
              className="block py-2 text-sm font-bold text-slate-900 dark:text-white"
            >
              Connect
            </Link>

            {/* Happy Clients Mobile */}
            <Link
              href="/clients"
              className="block py-2 text-sm font-bold text-blue-600 dark:text-blue-400"
            >
              ★ Our Happy Clients
            </Link>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <Button href="/registration" variant="radiant" size="lg" className="w-full">
                Register & Get Free Test Credits
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
