import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const otpSmsMetadata: Metadata = {
  title: "OTP SMS Service Provider in India | Sub-2.5s Instant Delivery Gateway",
  description:
    "Fastest OTP SMS Service in India by SMSIndiaHub. Guaranteed 2 to 5 second delivery, 99.99% uptime, multi-operator fallback, and high-concurrency API for logins and banking 2FA.",
  alternates: {
    canonical: `${BASE_URL}/otp-sms-service-provider/`,
  },
  openGraph: {
    title: "OTP SMS Gateway Provider in India | Sub-2.5s Latency | SMSIndiaHub",
    description: "Enterprise OTP SMS delivery with multi-operator fallback and 99.99% telecom uptime.",
    url: `${BASE_URL}/otp-sms-service-provider/`,
  },
};
