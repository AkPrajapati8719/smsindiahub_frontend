import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const voiceCallMetadata: Metadata = {
  title: "Outbound Voice Call & IVR Broadcasting Service in India | SMSIndiaHub",
  description:
    "Automated Voice Call Broadcasting in India. Broadcast pre-recorded MP3 voice messages, multi-tier IVR keypress surveys, and voice OTPs to 10,000+ numbers simultaneously.",
  alternates: {
    canonical: `${BASE_URL}/voice-call-service-provider/`,
  },
  openGraph: {
    title: "Outbound Voice Call & IVR Broadcasting India | SMSIndiaHub",
    description: "Automated bulk voice call broadcast with keypress response tracking.",
    url: `${BASE_URL}/voice-call-service-provider/`,
  },
};
