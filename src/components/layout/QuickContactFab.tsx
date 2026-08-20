"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, X, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function QuickContactFab() {
  const [showCallModal, setShowCallModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [requested, setRequested] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setRequested(true);
    setTimeout(() => {
      setShowCallModal(false);
      setRequested(false);
      setPhoneNumber("");
    }, 2500);
  };

  return (
    <>
      {/* Floating Action Buttons Dock */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Call Back Button */}
        <button
          onClick={() => setShowCallModal(true)}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-radiant-md hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          aria-label="Request Instant Callback"
        >
          <Phone className="h-4 w-4 animate-bounce" />
          <span className="hidden sm:inline">Instant Callback</span>
        </button>

        {/* WhatsApp Direct Chat Trigger */}
        <a
          href={`https://api.whatsapp.com/send?phone=919981188868&text=Hi%20SMSIndiaHub,%20I%20am%20interested%20in%20your%20services!`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </div>

      {/* Callback Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Request Free Instant Callback
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Our telecom telecom engineers will call you within 5 minutes
                with free demo credits.
              </p>
            </div>

            {requested ? (
              <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                ✓ Callback request received! Calling you shortly at{" "}
                {phoneNumber}...
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your 10-Digit Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    placeholder="9876543210"
                    value={phoneNumber}
                    onChange={(e) => {
                      const numericVal = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setPhoneNumber(numericVal);
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 py-3 text-sm font-bold text-white shadow-md hover:from-violet-700 hover:to-cyan-700"
                >
                  Call Me Now
                </button>

                <div className="text-center text-xs text-slate-500">
                  Or dial direct:{" "}
                  <a
                    href={`tel:${COMPANY_INFO.phones.primary}`}
                    className="font-bold text-blue-600 hover:underline"
                  >
                    {COMPANY_INFO.phones.primary}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
