import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const whatsappChatbotMetadata: Metadata = {
  title: "AI WhatsApp Chatbot Builder India | 24/7 Lead Support",
  description:
    "Deploy conversational AI WhatsApp chatbots for Real Estate, BFSI, Healthcare & E-Commerce. Automate customer support & 24/7 lead qualification.",
  alternates: {
    canonical: `${BASE_URL}/whatsapp-chatbot/`,
  },
  openGraph: {
    title: "Conversational AI WhatsApp Chatbot Builder | SMSIndiaHub",
    description: "24/7 automated customer support, lead qualification, and booking bots on WhatsApp.",
    url: `${BASE_URL}/whatsapp-chatbot/`,
  },
};
