import React from "react";
import { Metadata } from "next";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { noSpamMetadata } from "@/metadata/noSpam";

export const metadata: Metadata = noSpamMetadata;

export default function NoSpamPage() {
  return (
    <div className="bg-white py-16 dark:bg-slate-950 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-6 text-slate-800 dark:text-slate-200">
        <div className="flex items-center gap-3">
          <ShieldAlert className="h-9 w-9 text-red-600" />
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">Anti-Spam Policy</h1>
        </div>
        <p className="text-xs text-slate-500">Zero-Tolerance Spam & TRAI NDNC Directives</p>

        <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            <strong>{COMPANY_INFO.name}</strong> enforces a strict zero-tolerance anti-spam policy. As a registered Telemarketer with TRAI, we mandate that all client marketing lists are strictly opt-in and adhere to National Do Not Call (NDNC) regulations.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">1. Opt-In Requirement</h3>
          <p>
            You may only send promotional messages to recipients who have explicitly consented and provided verifiable opt-in permission to receive communications from your brand.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">2. DND Filtering</h3>
          <p>
            All promotional bulk SMS campaigns dispatched through our gateway are automatically scrubbed against the National Customer Preference Register (NCPR/DND) in real time.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">3. Violations & Penalties</h3>
          <p>
            Any entity found transmitting unsolicited spam, phishing scams, or deceptive messages will have their account immediately terminated, their remaining credit balance forfeited, and their entity blacklisted across all Indian telecom carrier networks.
          </p>
        </div>
      </div>
    </div>
  );
}
