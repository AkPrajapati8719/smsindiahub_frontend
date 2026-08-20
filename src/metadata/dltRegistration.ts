import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const dltRegistrationMetadata: Metadata = {
  title: "TRAI DLT Registration & PE-TM Chain Binding Guide | Jio, Airtel, Vi, BSNL, Tata",
  description:
    "Complete step-by-step guide for TRAI DLT Principal Entity (PE) registration, header approval, content template registration, and Telemarketer chain binding with SMSIndiaHub.",
  alternates: {
    canonical: `${BASE_URL}/dlt-registration/`,
  },
  openGraph: {
    title: "TRAI DLT Registration & Operator Chain Binding Guide | SMSIndiaHub",
    description: "Step-by-step PE registration and chain binding for Jio, Airtel, Vi, BSNL, and Tata.",
    url: `${BASE_URL}/dlt-registration/`,
  },
};
