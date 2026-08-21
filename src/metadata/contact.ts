import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const contactMetadata: Metadata = {
  title: "Contact SMSINDIAHUB | 24/7 Enterprise CPaaS Support India",
  description:
    "Get in touch with SMSIndiaHub for custom enterprise CPaaS pricing, DLT registration assistance & 24/7 technical support. Call +91-8305781001.",
  alternates: {
    canonical: `${BASE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact SMSINDIAHUB | Enterprise CPaaS Sales & Support",
    description: "Get 24/7 live assistance for Bulk SMS, WhatsApp API, and DLT verification.",
    url: `${BASE_URL}/contact/`,
  },
};
