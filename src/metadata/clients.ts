import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const clientsMetadata: Metadata = {
  title: "Our Happy Clients & Case Studies | Trusted by 25,000+ Enterprises - SMSIndiaHub",
  description:
    "Explore our 25,000+ happy enterprise clients, premier universities, and government bodies including India Post, Indian Railways, State Bank of India, Adani, IGNOU, Maruti Suzuki, Air India, and more.",
  alternates: {
    canonical: `${BASE_URL}/clients/`,
  },
  openGraph: {
    title: "Happy Clients & Case Studies - SMSIndiaHub CPaaS",
    description: "Trusted by 25,000+ enterprises, banks, universities, and government bodies across India.",
    url: `${BASE_URL}/clients/`,
  },
};
