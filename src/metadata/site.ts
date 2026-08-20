import type { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";

export const BASE_URL = "https://www.smsindiahub.in";

export const DEFAULT_SITE_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SMSINDIAHUB® | Enterprise Bulk SMS, WhatsApp Business API & Voice Gateway in India",
    template: "%s | SMSIndiaHub",
  },
  description:
    "SMSIndiaHub is India's leading CPaaS & business messaging provider. Send sub-2.5s OTP SMS, Promotional/Transactional Bulk SMS, official WhatsApp Business API, RCS messaging & Voice IVR with direct telecom operator connectivity.",
  keywords: [
    "Bulk SMS Service Provider In India",
    "OTP SMS Provider",
    "WhatsApp Business API India",
    "Transactional SMS",
    "Promotional SMS",
    "Voice Call Broadcast",
    "TRAI DLT Registration",
    "PE-TM Chain Binding",
    "SMS Gateway API",
    "RCS Messaging India",
  ],
  authors: [{ name: COMPANY_INFO.name, url: BASE_URL }],
  creator: COMPANY_INFO.legalName,
  publisher: COMPANY_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${BASE_URL}/`,
    siteName: "SMSIndiaHub",
    title: "SMSINDIAHUB® | Enterprise Bulk SMS, WhatsApp Business API & Voice Gateway in India",
    description:
      "Enterprise CPaaS & Cloud Messaging platform in India. High-priority OTP routes, WhatsApp Business API, Voice IVR, and DLT compliance.",
    images: [
      {
        url: "/assets/img/smsindiahub-new-logo.png",
        width: 1200,
        height: 630,
        alt: "SMSIndiaHub CPaaS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMSINDIAHUB® | Enterprise Bulk SMS & WhatsApp API",
    description: "High-priority OTP routes, WhatsApp Business API, and Voice IVR with direct operator connectivity.",
    images: ["/assets/img/smsindiahub-new-logo.png"],
  },
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
  classification: "Enterprise CPaaS, Bulk SMS & WhatsApp Business Messaging",
  appleWebApp: {
    capable: true,
    title: "SMSIndiaHub",
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Bhopal",
    "geo.position": "23.259933;77.412615",
    "ICBM": "23.259933, 77.412615",
    "telecom:provider": "Cloud Wireless Technologies (I) Pvt. Ltd.",
    "telecom:trai_registered": "true",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/icon.png",
  },
};
