import React from "react";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { termsMetadata } from "@/metadata/termsConditions";

export const metadata: Metadata = termsMetadata;

export default function TermsPage() {
  return (
    <div className="bg-white py-16 dark:bg-slate-950 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-6 text-slate-800 dark:text-slate-200">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">Terms & Conditions</h1>
        <p className="text-xs text-slate-500">Effective Date: January 2026 | Cloud Wireless Technologies (I) Pvt. Ltd.</p>

        <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            By accessing or utilizing the messaging services, developer APIs, or web portals provided by <strong>{COMPANY_INFO.name}</strong>, you agree to be bound by these terms.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">1. Regulatory Compliance (TRAI & DLT)</h3>
          <p>
            All users must strictly comply with TRAI (Telecom Regulatory Authority of India) regulations and DLT guidelines. Customers must possess approved Principal Entity registrations, sender headers, and content templates prior to transmitting SMS or Voice traffic in India.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">2. Account Responsibility & KYC</h3>
          <p>
            Account holders are responsible for maintaining confidentiality of their API keys and portal login credentials. Business KYC documents (PAN, GSTIN, Aadhaar/Certificate of Incorporation) must be provided prior to commercial account activation.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">3. Prohibited Content</h3>
          <p>
            Transmission of abusive, fraudulent, defamatory, phishing, unsolicited spam, or unlawful material is strictly prohibited and results in immediate account suspension without refund and reporting to law enforcement authorities.
          </p>
        </div>
      </div>
    </div>
  );
}
