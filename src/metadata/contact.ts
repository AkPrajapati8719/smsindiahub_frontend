import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const contactMetadata: Metadata = {
  title: "Contact Us & Office Locations (Bhopal, Indore) | SMSIndiaHub",
  description:
    "Get in touch with SMSIndiaHub support, sales, and billing teams. Bhopal Central India HQ, Indore branch, 24/7 hotline (+91 8305781001), and WhatsApp desk.",
  alternates: {
    canonical: `${BASE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact SMSIndiaHub Sales & 24/7 Support Desk",
    description: "Connect with our telecom consultants in Bhopal HQ and Indore branch.",
    url: `${BASE_URL}/contact/`,
  },
};
