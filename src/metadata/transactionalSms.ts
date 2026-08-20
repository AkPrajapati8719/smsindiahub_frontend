import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const transactionalSmsMetadata: Metadata = {
  title: "Transactional SMS Service in India | 24x7 DND Delivery & 6-Char Header",
  description:
    "Send critical alerts, invoice receipts, booking confirmations, and status updates 24/7/365 to all numbers including DND using approved 6-character sender headers.",
  alternates: {
    canonical: `${BASE_URL}/transactional-sms/`,
  },
  openGraph: {
    title: "Transactional SMS Gateway India | 24/7 Delivery | SMSIndiaHub",
    description: "24/7 mission-critical transactional SMS routes with TRAI approved headers.",
    url: `${BASE_URL}/transactional-sms/`,
  },
};
