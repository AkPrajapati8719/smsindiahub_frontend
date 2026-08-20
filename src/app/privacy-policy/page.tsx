import React from "react";
import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { privacyPolicyMetadata } from "@/metadata/privacyPolicy";

export const metadata: Metadata = privacyPolicyMetadata;

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 dark:bg-slate-950 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-6 text-slate-800 dark:text-slate-200">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Last Updated: January 2026 | ISO 27001:2013 Information Security Compliant</p>

        <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            {COMPANY_INFO.legalName} (operating as <strong>{COMPANY_INFO.name}</strong>) is committed to safeguarding the privacy of our website visitors, clients, and API users. This policy sets out how we treat personal information collected across our platform.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">1. Information Collection & Usage</h3>
          <p>
            We collect information provided during account signup, KYC verification, lead consultation, and API token creation. This includes full name, business email, contact phone number, company name, GST/billing details, and DLT Entity credentials strictly for service provisioning.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">2. Message Content & Recipient Data Confidentiality</h3>
          <p>
            We adhere to strict telecom non-disclosure and encryption standards. Recipient mobile numbers and message payloads dispatched through our APIs or web portals are processed securely and never sold, rented, or shared with third parties.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">3. Security & ISO 27001 Compliance</h3>
          <p>
            All data in transit is protected using industry-standard TLS 1.3 encryption. Our infrastructure is secured against unauthorized access, modification, or disclosure in accordance with ISO/IEC 27001:2013 certification guidelines.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">4. Contact Privacy Officer</h3>
          <p>
            If you have questions regarding data retention or privacy practices, reach our Data Protection Officer at: <a href={`mailto:${COMPANY_INFO.emails.support}`} className="text-blue-600 font-bold">{COMPANY_INFO.emails.support}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
