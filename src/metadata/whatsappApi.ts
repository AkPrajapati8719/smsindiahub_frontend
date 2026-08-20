import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const whatsappApiMetadata: Metadata = {
  title: "WhatsApp Business API Provider in India | Official Meta Cloud Partner",
  description:
    "Official Meta WhatsApp Business API solution provider in India. Get verified Green Tick badge, broadcast marketing campaigns, interactive buttons, and AI chatbots with SMSIndiaHub.",
  alternates: {
    canonical: `${BASE_URL}/whatsapp-business-api/`,
  },
  openGraph: {
    title: "Official Meta WhatsApp Business API Partner | SMSIndiaHub",
    description: "Broadcast marketing messages, interactive chatbots, and green tick verification.",
    url: `${BASE_URL}/whatsapp-business-api/`,
  },
};
