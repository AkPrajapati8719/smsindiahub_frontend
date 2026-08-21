import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const pricingMetadata: Metadata = {
  title: "Bulk SMS Pricing & Plans India | OTP, WhatsApp & SMS Tariff",
  description:
    "Transparent Bulk SMS pricing in India. Promotional SMS from ₹0.10, OTP from ₹0.11 & WhatsApp API from ₹0.45. Lifetime validity & zero setup fees.",
  alternates: {
    canonical: `${BASE_URL}/pricing/`,
  },
  openGraph: {
    title: "Bulk SMS Pricing & Plans India | SMSIndiaHub Tariff",
    description: "Calculate wholesale SMS, OTP, WhatsApp, and Voice rates with lifetime validity and zero hidden charges.",
    url: `${BASE_URL}/pricing/`,
  },
};
