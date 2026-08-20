"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Smartphone, Mail, CheckCircle2, ShieldCheck } from "lucide-react";

export function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile || !email || !agreeTerms) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-[85vh] bg-slate-50/70 dark:bg-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Card Container matching exact image layout */}
        <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-10 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-8 tracking-tight font-heading">
            Sign Up
          </h1>

          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Registration Received!
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Thank you, <span className="font-semibold text-slate-900 dark:text-white">{fullName}</span>. An onboarding specialist will verify your number (<span className="font-semibold text-blue-600 dark:text-blue-400">+91 {mobile}</span>) and deliver your test credits.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 1. Full Name Input with Left Icon Segment */}
              <div className="flex rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all bg-white dark:bg-slate-900">
                <div className="flex items-center justify-center px-3.5 border-r border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">
                  <User className="h-5 w-5 stroke-[1.5]" />
                </div>
                <input
                  type="text"
                  name="fullname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full px-3.5 py-3 text-sm bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              {/* 2. Mobile No. Input with Left Icon Segment */}
              <div className="flex rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all bg-white dark:bg-slate-900">
                <div className="flex items-center justify-center px-3.5 border-r border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">
                  <Smartphone className="h-5 w-5 stroke-[1.5]" />
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  name="mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                  placeholder="Mobile No."
                  maxLength={10}
                  required
                  className="w-full px-3.5 py-3 text-sm bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              {/* 3. E-mail Input with Left Icon Segment */}
              <div className="flex rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all bg-white dark:bg-slate-900">
                <div className="flex items-center justify-center px-3.5 border-r border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">
                  <Mail className="h-5 w-5 stroke-[1.5]" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  required
                  className="w-full px-3.5 py-3 text-sm bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              {/* 4. Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="h-4 w-4 mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="text-xs text-slate-600 dark:text-slate-300 select-none cursor-pointer leading-snug">
                  I agree with{" "}
                  <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                  ,{" "}
                  <Link href="/terms-and-conditions" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              {/* 5. Newsletter Checkbox */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="h-4 w-4 mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 cursor-pointer"
                />
                <label htmlFor="newsletter" className="text-xs text-slate-600 dark:text-slate-300 select-none cursor-pointer leading-snug">
                  I want to receive the newsletter
                </label>
              </div>

              {/* 6. Register Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading || !agreeTerms}
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Security / Assistance Footnote */}
        <div className="text-center mt-6 text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>256-Bit SSL Encrypted & TRAI DLT Compliant Onboarding</span>
        </div>
      </div>
    </div>
  );
}
