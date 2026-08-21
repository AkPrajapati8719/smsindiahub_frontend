import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const rcsMessagingMetadata: Metadata = {
  title: "RCS Business Messaging India | Next-Gen Rich SMS Partner",
  description:
    "Google RCS Business Messaging partner in India. Send verified brand messages with rich media carousels, action chips & interactive maps on Android.",
  alternates: {
    canonical: `${BASE_URL}/rcs-messaging-services/`,
  },
  openGraph: {
    title: "Google RCS Business Messaging in India | SMSIndiaHub",
    description: "Verified rich interactive messaging with carousels and suggested action chips.",
    url: `${BASE_URL}/rcs-messaging-services/`,
  },
};
