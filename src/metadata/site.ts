import type { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";

export const BASE_URL = "https://www.smsindiahub.in";

export const DEFAULT_SITE_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Bulk SMS, WhatsApp API & OTP Gateway India | SMSINDIAHUB",
    template: "%s | SMSINDIAHUB",
  },
  description:
    "India's leading CPaaS gateway for Sub-2.5s OTP SMS, Meta WhatsApp Business API & Voice IVR broadcasts. 100% TRAI DLT compliant. Get free trial credits.",
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
    title: "Bulk SMS, WhatsApp API & OTP Gateway India | SMSINDIAHUB",
    description:
      "Enterprise CPaaS gateway for Sub-2.5s OTP SMS, Meta WhatsApp Business API & Voice IVR broadcasts with 99.99% uptime and TRAI DLT compliance.",
    images: [
      {
        url: "/assets/img/smsindiahub-new-logo.png",
        width: 1200,
        height: 630,
        alt: "SMSINDIAHUB Enterprise CPaaS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk SMS, WhatsApp API & OTP Gateway India | SMSINDIAHUB",
    description:
      "Sub-2.5s OTP SMS, Meta WhatsApp Business API & Voice IVR with 99.99% uptime and TRAI DLT compliance.",
  },
};
