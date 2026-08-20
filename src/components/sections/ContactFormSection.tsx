"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";

const COUNTRY_CODES = [
  { code: "+91", label: "+91 (India)", flag: "🇮🇳" },
  { code: "+1", label: "+1 (USA/Canada)", flag: "🇺🇸" },
  { code: "+44", label: "+44 (UK)", flag: "🇬🇧" },
  { code: "+971", label: "+971 (UAE)", flag: "🇦🇪" },
  { code: "+65", label: "+65 (Singapore)", flag: "🇸🇬" },
  { code: "+61", label: "+61 (Australia)", flag: "🇦🇺" },
  { code: "+966", label: "+966 (Saudi Arabia)", flag: "🇸🇦" },
  { code: "+974", label: "+974 (Qatar)", flag: "🇶🇦" },
  { code: "+968", label: "+968 (Oman)", flag: "🇴🇲" },
  { code: "+965", label: "+965 (Kuwait)", flag: "🇰🇼" },
  { code: "+973", label: "+973 (Bahrain)", flag: "🇧🇭" },
  { code: "+49", label: "+49 (Germany)", flag: "🇩🇪" },
  { code: "+33", label: "+33 (France)", flag: "🇫🇷" },
  { code: "+81", label: "+81 (Japan)", flag: "🇯🇵" },
  { code: "+880", label: "+880 (Bangladesh)", flag: "🇧🇩" },
  { code: "+977", label: "+977 (Nepal)", flag: "🇳🇵" },
  { code: "+94", label: "+94 (Sri Lanka)", flag: "🇱🇰" },
];

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    service: "otp-sms",
    volume: "50000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        company: "",
        service: "otp-sms",
        volume: "50000",
        message: "",
      });
    }, 4000);
  };

  return (
    <section className="bg-white py-20 dark:bg-slate-950" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="radiant" size="md">
              Get in Touch
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Ready to Upgrade Your{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Messaging Infrastructure?
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Connect with our telecom consultants for custom high-volume
              pricing, DLT chain binding support, and instant API sandbox keys.
            </p>

            <div className="space-y-4 pt-4 text-sm">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Call Sales & Support
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phones.primary}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {COMPANY_INFO.phones.primary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <Mail className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Email Us
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.emails.support}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {COMPANY_INFO.emails.support}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Central India HQ
                  </div>
                  <div className="text-xs text-slate-500 leading-snug">
                    {COMPANY_INFO.addresses.headquarters.fullAddress}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-8 sm:p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Request Free Trial & Custom Quote
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Receive 1,000 free test SMS/OTP credits upon KYC verification.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-3 dark:bg-emerald-950/60 dark:border-emerald-800">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-sm mx-auto">
                    Our telecom account manager will contact you within 15
                    minutes with your custom rate card and free sandbox API key.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <div className="flex gap-2">
                        {/* Country Code Dropdown */}
                        <select
                          value={formData.countryCode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              countryCode: e.target.value,
                            })
                          }
                          className="w-32 rounded-xl border border-slate-200 bg-white px-2.5 py-2.5 text-xs font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white shrink-0"
                          aria-label="Country Code"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>

                        {/* 10-digit Mobile Number Input */}
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          minLength={10}
                          pattern="[0-9]{10}"
                          title="Please enter a valid 10-digit mobile number"
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={(e) => {
                            const numericVal = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                            setFormData({ ...formData, phone: numericVal });
                          }}
                          className="w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      >
                        <option value="otp-sms">OTP SMS Gateway</option>
                        <option value="promotional-sms">
                          Promotional Bulk SMS
                        </option>
                        <option value="transactional-sms">
                          Transactional SMS
                        </option>
                        <option value="whatsapp-api">
                          WhatsApp Business API
                        </option>
                        <option value="whatsapp-chatbot">
                          AI WhatsApp Chatbots
                        </option>
                        <option value="rcs-messaging">RCS Messaging</option>
                        <option value="voice-calls">
                          Voice Call Broadcasting
                        </option>
                        <option value="reseller-panel">
                          White-Label Reseller
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Estimated Monthly Volume
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) =>
                          setFormData({ ...formData, volume: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      >
                        <option value="10000">10,000 - 25,000</option>
                        <option value="50000">25,001 - 1,00,000</option>
                        <option value="250000">1,00,001 - 5,00,000</option>
                        <option value="1000000">
                          5,00,001+ (Enterprise Tier)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Message / Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your use-case or DLT requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 py-3.5 text-sm font-bold text-white shadow-radiant-sm hover:from-violet-700 hover:to-cyan-700 hover:scale-[1.01] transition-all"
                  >
                    Submit & Get Instant 1,000 Free Credits
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
