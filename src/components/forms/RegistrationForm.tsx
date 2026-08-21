"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, Smartphone, Mail, CheckCircle2, ShieldCheck, ArrowLeft, RefreshCw, KeyRound } from "lucide-react";

export function RegistrationForm() {
  const [step, setStep] = useState<"register" | "verify-otp" | "success">("register");

  // Registration form fields
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  // OTP verification state
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [resendTimer, setResendTimer] = useState(45);
  const [canResend, setCanResend] = useState(false);

  // UI state
  const [loading, setLoading] = useState(false);

  // Resend OTP countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "verify-otp" && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(val);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(val);
    if (otpError) setOtpError("");
  };

  // Step 1: Submit Registration -> Trigger OTP Dispatch
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || mobile.length !== 10 || !email.trim() || !agreeTerms) return;

    setLoading(true);

    // ========================================================
    // BACKEND INTEGRATION NOTE:
    // Replace this setTimeout with your actual API endpoint:
    // await fetch('/api/auth/send-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ fullName, mobile, email, newsletter })
    // });
    // ========================================================
    setTimeout(() => {
      setLoading(false);
      setResendTimer(45);
      setCanResend(false);
      setOtp("");
      setOtpError("");
      setStep("verify-otp");
    }, 800);
  };

  // Step 2: Verify OTP
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      setOtpError("Please enter a valid OTP code");
      return;
    }

    setLoading(true);

    // ========================================================
    // BACKEND INTEGRATION NOTE:
    // Replace this setTimeout with your actual OTP verification endpoint:
    // const res = await fetch('/api/auth/verify-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ mobile, otp, email, fullName })
    // });
    // ========================================================
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 900);
  };

  // Resend OTP trigger
  const handleResendOtp = () => {
    if (!canResend || loading) return;
    setLoading(true);

    // ========================================================
    // BACKEND INTEGRATION NOTE:
    // await fetch('/api/auth/resend-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ mobile })
    // });
    // ========================================================
    setTimeout(() => {
      setLoading(false);
      setResendTimer(45);
      setCanResend(false);
      setOtp("");
      setOtpError("");
    }, 600);
  };

  // Return to edit mobile number
  const handleChangeNumber = () => {
    setStep("register");
    setOtp("");
    setOtpError("");
  };

  return (
    <div className="min-h-[85vh] bg-slate-50/70 dark:bg-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <AnimatePresence mode="wait">
          {/* STEP 1: INITIAL SIGN UP FORM */}
          {step === "register" && (
            <motion.div
              key="register-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-10 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-8 tracking-tight font-heading">
                Sign Up
              </h1>

              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                {/* 1. Full Name Input */}
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

                {/* 2. Mobile No. Input */}
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
                    placeholder="Mobile No. (10 Digits)"
                    maxLength={10}
                    required
                    className="w-full px-3.5 py-3 text-sm bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </div>

                {/* 3. E-mail Input */}
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
                    disabled={loading || !agreeTerms || mobile.length !== 10}
                    className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Sending OTP...</span>
                      </>
                    ) : (
                      <span>Register</span>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 2: MOBILE NO. VERIFICATION (1:1 with Screenshot) */}
          {step === "verify-otp" && (
            <motion.div
              key="otp-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              {/* Card Container with Top Blue Bar Accent */}
              <div className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                {/* Top Blue Accent Bar */}
                <div className="h-1.5 w-full bg-blue-600" />

                <div className="py-8 px-6 sm:px-10">
                  {/* Card Title matching exact image */}
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-3 tracking-tight font-heading">
                    Mobile No. Verification
                  </h1>

                  {/* Phone Details & Change Number Button */}
                  <div className="flex items-center justify-center gap-2 mb-6 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span>
                      OTP sent to <strong className="text-slate-900 dark:text-white">+91 {mobile}</strong>
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <button
                      type="button"
                      onClick={handleChangeNumber}
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      <span>Change Number</span>
                    </button>
                  </div>

                  <form onSubmit={handleOtpSubmit} className="space-y-5">
                    {/* Enter OTP Input with Left Icon Segment (1:1 with image) */}
                    <div>
                      <div
                        className={`flex rounded-lg border overflow-hidden transition-all bg-white dark:bg-slate-900 ${
                          otpError
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-slate-300 dark:border-slate-700 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
                        }`}
                      >
                        <div className="flex items-center justify-center px-3.5 border-r border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">
                          <User className="h-5 w-5 stroke-[1.5]" />
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          name="otp"
                          autoFocus
                          value={otp}
                          onChange={handleOtpChange}
                          placeholder="Enter OTP"
                          maxLength={6}
                          required
                          className="w-full px-3.5 py-3 text-sm bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none font-medium tracking-wider"
                        />
                      </div>
                      {otpError && (
                        <p className="text-xs text-red-500 mt-1.5 font-medium">{otpError}</p>
                      )}
                    </div>

                    {/* Verify OTP Button (1:1 with image) */}
                    <div>
                      <button
                        type="submit"
                        disabled={loading || otp.length < 4}
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="h-4 w-4 animate-spin" />
                            <span>Verifying OTP...</span>
                          </>
                        ) : (
                          <span>Verify OTP</span>
                        )}
                      </button>
                    </div>

                    {/* Resend OTP Timer Action */}
                    <div className="text-center pt-1 text-xs text-slate-500">
                      {canResend ? (
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          disabled={loading}
                          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
                        >
                          Didn't receive OTP? Resend Now
                        </button>
                      ) : (
                        <span>
                          Resend OTP in <strong className="text-slate-700 dark:text-slate-300 font-mono">00:{resendTimer < 10 ? `0${resendTimer}` : resendTimer}</strong>
                        </span>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              {/* Exact Text Notice Below Card (matching screenshot) */}
              <p className="text-center text-blue-600 dark:text-blue-400 text-sm font-medium mt-6">
                Please submit OTP to verify your mobile number.
              </p>
            </motion.div>
          )}

          {/* STEP 3: REGISTRATION SUCCESS SCREEN */}
          {step === "success" && (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 py-10 px-6 sm:px-10 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800 text-center space-y-5"
            >
              <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Account Registered Successfully!
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Welcome to SMSIndiaHub, <strong className="text-slate-900 dark:text-white">{fullName}</strong>! Your mobile number (<strong className="text-blue-600 dark:text-blue-400">+91 {mobile}</strong>) has been verified. Free test credits have been loaded into your account.
              </p>

              <div className="pt-4 space-y-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
                >
                  Go to Dashboard / Portal
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setFullName("");
                    setMobile("");
                    setEmail("");
                    setStep("register");
                  }}
                  className="w-full text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 py-1"
                >
                  Register Another Account
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security / Assistance Footnote */}
        <div className="text-center mt-6 text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>256-Bit SSL Encrypted &amp; TRAI DLT Compliant Onboarding</span>
        </div>
      </div>
    </div>
  );
}
