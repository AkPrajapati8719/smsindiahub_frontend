import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const otpSmsMetadata: Metadata = {
  title: "OTP SMS Provider India | Sub-2.5s Instant Delivery Gateway",
  description:
    "Fastest OTP SMS gateway in India by SMSIndiaHub. Sub-2.5s delivery, 99.99% uptime, multi-operator fallback & high-concurrency API for logins & 2FA.",
  alternates: {
    canonical: `${BASE_URL}/otp-sms-service-provider/`,
  },
  openGraph: {
    title: "OTP SMS Provider India | Sub-2.5s Latency | SMSIndiaHub",
    description: "Enterprise OTP SMS delivery with multi-operator fallback and 99.99% telecom uptime.",
    url: `${BASE_URL}/otp-sms-service-provider/`,
  },
};
