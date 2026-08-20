import React from "react";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { refundPolicyMetadata } from "@/metadata/refundPolicy";

export const metadata: Metadata = refundPolicyMetadata;

export default function RefundPolicyPage() {
  return (
    <div className="bg-white py-16 dark:bg-slate-950 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-6 text-slate-800 dark:text-slate-200">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">Refund & Cancellation Policy</h1>
        <p className="text-xs text-slate-500">Cloud Wireless Technologies (I) Pvt. Ltd. Billing Policy</p>

        <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            At <strong>{COMPANY_INFO.name}</strong>, we are dedicated to providing enterprise-level carrier uptime and customer satisfaction.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">1. Unused Balance Refund</h3>
          <p>
            If our services fail to deliver according to agreed technical SLAs or service levels due to platform-side failure, clients may request a refund for the remaining unused prepaid balance within 30 days of purchase.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">2. Non-Refundable Items</h3>
          <p>
            Consumed SMS, OTP, WhatsApp, or Voice credits that have already been transmitted to carrier networks cannot be refunded. Dedicated virtual short/long code setup fees and WhatsApp onboarding fees are non-refundable once provisioned with telecom operators.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">3. Request Process</h3>
          <p>
            To initiate a billing inquiry or refund request, submit an email with your account ID and payment UTR to: <a href="mailto:billing@smsindiahub.in" className="text-blue-600 font-bold">billing@smsindiahub.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
