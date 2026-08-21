import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const aboutUsMetadata: Metadata = {
  title: "About SMSINDIAHUB | Leading Enterprise CPaaS Company India",
  description:
    "Learn about SMSIndiaHub, India's trusted CPaaS telecom provider since 2012. ISO 9001/27001 certified, direct carrier binds & 25,000+ happy clients.",
  alternates: {
    canonical: `${BASE_URL}/about-us/`,
  },
  openGraph: {
    title: "About SMSINDIAHUB | Enterprise Cloud Telecom Gateway",
    description: "Discover SMSIndiaHub's mission, infrastructure, and leadership in India's CPaaS ecosystem.",
    url: `${BASE_URL}/about-us/`,
  },
};
