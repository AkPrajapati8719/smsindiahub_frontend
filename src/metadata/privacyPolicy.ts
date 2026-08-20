import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const privacyPolicyMetadata: Metadata = {
  title: "Privacy Policy | SMSIndiaHub & Cloud Wireless Technologies",
  description:
    "Privacy and data protection policy for SMSIndiaHub and Cloud Wireless Technologies (I) Pvt. Ltd. adhering to ISO 27001 security standards.",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy/`,
  },
  openGraph: {
    title: "Privacy Policy & Data Security Standards | SMSIndiaHub",
    description: "ISO 27001 compliant enterprise data protection and privacy terms.",
    url: `${BASE_URL}/privacy-policy/`,
  },
};
