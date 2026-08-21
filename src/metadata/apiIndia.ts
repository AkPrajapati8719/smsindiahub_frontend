import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const apiIndiaMetadata: Metadata = {
  title: "SMS & WhatsApp Developer API Docs | REST & SMPP v3.4",
  description:
    "Developer-friendly REST API & SMPP v3.4 documentation. Sample code in Node.js, Python, PHP, Java & cURL with sub-2.5s OTP delivery and live webhooks.",
  alternates: {
    canonical: `${BASE_URL}/api/india/`,
  },
  openGraph: {
    title: "SMS & WhatsApp Developer API Docs | REST & SMPP v3.4",
    description: "Enterprise REST API and SMPP documentation with live code playgrounds.",
    url: `${BASE_URL}/api/india/`,
  },
};
