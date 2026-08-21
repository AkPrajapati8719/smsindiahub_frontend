import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const clientsMetadata: Metadata = {
  title: "Enterprise Clients & Case Studies | SMSINDIAHUB India",
  description:
    "Discover how 25,000+ Indian enterprises, banks, and startups scale customer communications with SMSIndiaHub's 99.99% uptime CPaaS infrastructure.",
  alternates: {
    canonical: `${BASE_URL}/clients/`,
  },
  openGraph: {
    title: "Enterprise Clients & Case Studies | SMSIndiaHub",
    description: "Trusted by 25,000+ top Indian brands and government bodies for mission-critical messaging.",
    url: `${BASE_URL}/clients/`,
  },
};
