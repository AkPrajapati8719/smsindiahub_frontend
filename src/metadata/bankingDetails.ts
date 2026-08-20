import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const bankingDetailsMetadata: Metadata = {
  title: "Official Banking Details & Payment Instructions | SMSIndiaHub",
  description:
    "Official bank account numbers, IFSC codes, and NEFT/RTGS wire transfer instructions for Cloud Wireless Technologies (I) Pvt. Ltd. (SMSIndiaHub).",
  alternates: {
    canonical: `${BASE_URL}/banking-details/`,
  },
  openGraph: {
    title: "Corporate Banking & Wire Transfer Details | SMSIndiaHub",
    description: "Official Current Account details for HDFC Bank NEFT/RTGS wire payments.",
    url: `${BASE_URL}/banking-details/`,
  },
};
