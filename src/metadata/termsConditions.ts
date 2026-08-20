import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const termsMetadata: Metadata = {
  title: "Terms and Conditions | SMSIndiaHub Service Agreement",
  description:
    "Terms of service, acceptable use policy, and telecom compliance guidelines for SMSIndiaHub and Cloud Wireless Technologies.",
  alternates: {
    canonical: `${BASE_URL}/terms-and-conditions/`,
  },
  openGraph: {
    title: "Terms of Service & Regulatory Compliance | SMSIndiaHub",
    description: "Enterprise service agreement and acceptable usage policies.",
    url: `${BASE_URL}/terms-and-conditions/`,
  },
};
