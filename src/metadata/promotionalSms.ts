import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const promotionalSmsMetadata: Metadata = {
  title: "Promotional Bulk SMS Provider in India | Mass Marketing Broadcast Gateway",
  description:
    "Promotional Bulk SMS service provider in India. Send targeted marketing offers, festive discounts, and bulk announcements with lifetime unlimited validity and DND scrubbing.",
  alternates: {
    canonical: `${BASE_URL}/promotional-sms/`,
  },
  openGraph: {
    title: "Promotional Bulk SMS Provider India | SMSIndiaHub",
    description: "Send targeted promotional SMS campaigns across India with instant DND filtering.",
    url: `${BASE_URL}/promotional-sms/`,
  },
};
