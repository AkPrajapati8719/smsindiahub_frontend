import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const refundPolicyMetadata: Metadata = {
  title: "Refund & Cancellation Policy | SMSIndiaHub",
  description:
    "Official credit refund and billing policy for SMSIndiaHub and Cloud Wireless Technologies.",
  alternates: {
    canonical: `${BASE_URL}/refund-policy/`,
  },
  openGraph: {
    title: "Refund & Cancellation Policy | SMSIndiaHub",
    description: "Transparent prepaid credit billing and refund terms.",
    url: `${BASE_URL}/refund-policy/`,
  },
};
