import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const aboutUsMetadata: Metadata = {
  title: "About Us | Cloud Wireless Technologies & SMSIndiaHub History",
  description:
    "Learn about SMSIndiaHub and Cloud Wireless Technologies (I) Pvt. Ltd., founded in 2008. Over 15+ years of telecom innovation, ISO 9001/27001 certifications, and 25,000+ happy clients.",
  alternates: {
    canonical: `${BASE_URL}/about-us/`,
  },
  openGraph: {
    title: "About SMSIndiaHub & Cloud Wireless Technologies (I) Pvt. Ltd.",
    description: "Enterprise CPaaS provider founded in 2008 with ISO 9001 & 27001 certifications.",
    url: `${BASE_URL}/about-us/`,
  },
};
