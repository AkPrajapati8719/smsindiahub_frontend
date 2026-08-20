import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const pricingMetadata: Metadata = {
  title: "Bulk SMS Pricing & Tariff Plans in India | OTP, Transactional, Promotional, WhatsApp",
  description:
    "Transparent Bulk SMS pricing in India. Promotional SMS from ₹0.10, OTP SMS from ₹0.11, Voice Calls from ₹0.13 with 100% lifetime unlimited validity and zero hidden charges.",
  alternates: {
    canonical: `${BASE_URL}/pricing/`,
  },
  openGraph: {
    title: "Transparent Bulk SMS Pricing & Tariff Calculator | SMSIndiaHub",
    description: "Calculate wholesale SMS, OTP, WhatsApp, and Voice rates with lifetime validity.",
    url: `${BASE_URL}/pricing/`,
  },
};
