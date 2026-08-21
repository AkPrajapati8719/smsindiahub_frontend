import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const homeMetadata: Metadata = {
  title: "Bulk SMS, WhatsApp API & OTP Gateway India | SMSINDIAHUB",
  description:
    "India's leading CPaaS gateway for Sub-2.5s OTP SMS, Meta WhatsApp Business API & Voice IVR broadcasts. 100% TRAI DLT compliant. Get free trial credits.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bulk SMS, WhatsApp API & OTP Gateway India | SMSINDIAHUB",
    description:
      "Enterprise CPaaS gateway for Sub-2.5s OTP SMS, Meta WhatsApp Business API & Voice IVR broadcasts with 99.99% uptime and TRAI DLT compliance.",
    url: `${BASE_URL}/`,
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
