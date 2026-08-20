import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const apiIndiaMetadata: Metadata = {
  title: "India SMS REST API Documentation & Code Snippets | SMSIndiaHub",
  description:
    "Developer HTTP REST API documentation for sending transactional and OTP SMS in India with DLT parameters. Code snippets for Node.js, Python, PHP, Java, and cURL.",
  alternates: {
    canonical: `${BASE_URL}/api/india/`,
  },
  openGraph: {
    title: "SMSIndiaHub India SMS REST API Documentation",
    description: "High-throughput HTTP REST API with multi-carrier failover and DLT parameter support.",
    url: `${BASE_URL}/api/india/`,
  },
};
