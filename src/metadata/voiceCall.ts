import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const voiceCallMetadata: Metadata = {
  title: "Voice Call & IVR Broadcast Gateway India | SMSINDIAHUB",
  description:
    "Automated voice call broadcasting in India. Broadcast pre-recorded MP3 messages, multi-tier IVR keypress surveys & voice OTPs with high concurrency.",
  alternates: {
    canonical: `${BASE_URL}/voice-call-service-provider/`,
  },
  openGraph: {
    title: "Outbound Voice Call & IVR Broadcasting India | SMSIndiaHub",
    description: "Automated bulk voice call broadcast with keypress response tracking.",
    url: `${BASE_URL}/voice-call-service-provider/`,
  },
};
