import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const homeMetadata: Metadata = {
  title: "SMSINDIAHUB® | Enterprise Bulk SMS, WhatsApp Business API & Voice Gateway in India",
  description:
    "SMSIndiaHub is India's leading CPaaS & business messaging provider. Send sub-2.5s OTP SMS, Promotional/Transactional Bulk SMS, official WhatsApp Business API, RCS messaging & Voice IVR with direct telecom operator connectivity.",
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    title: "SMSINDIAHUB® | Enterprise Bulk SMS, WhatsApp Business API & Voice Gateway in India",
    description:
      "Enterprise CPaaS & Cloud Messaging platform in India. High-priority OTP routes, WhatsApp Business API, Voice IVR, and DLT compliance.",
    url: `${BASE_URL}/`,
    images: [
      {
        url: "/assets/img/smsindiahub-new-logo.png",
        width: 1200,
        height: 630,
        alt: "SMSIndiaHub CPaaS Platform",
      },
    ],
  },
};
