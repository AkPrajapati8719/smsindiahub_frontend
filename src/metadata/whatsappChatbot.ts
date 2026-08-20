import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const whatsappChatbotMetadata: Metadata = {
  title: "AI WhatsApp Chatbot Builder in India | Automated Support & Lead Qualification",
  description:
    "Deploy conversational AI WhatsApp Chatbots tailored for EdTech, Real Estate, Healthcare, BFSI, and E-commerce. Automate customer support and lead bookings 24/7.",
  alternates: {
    canonical: `${BASE_URL}/whatsapp-chatbot/`,
  },
  openGraph: {
    title: "Conversational AI WhatsApp Chatbot Builder | SMSIndiaHub",
    description: "24/7 automated customer support, lead qualification, and booking bots on WhatsApp.",
    url: `${BASE_URL}/whatsapp-chatbot/`,
  },
};
