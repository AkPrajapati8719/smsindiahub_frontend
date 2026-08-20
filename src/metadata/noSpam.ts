import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const noSpamMetadata: Metadata = {
  title: "Anti-Spam & NDNC Compliance Policy | SMSIndiaHub",
  description:
    "National Do Not Call (NDNC) registry compliance and zero-tolerance spam policy for SMSIndiaHub and Cloud Wireless Technologies.",
  alternates: {
    canonical: `${BASE_URL}/no-spam/`,
  },
  openGraph: {
    title: "Zero-Tolerance Anti-Spam Policy | SMSIndiaHub",
    description: "Strict TRAI NDNC compliance and opt-in marketing enforcement.",
    url: `${BASE_URL}/no-spam/`,
  },
};
