import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SMSINDIAHUB - Enterprise Bulk SMS & WhatsApp Business API",
    short_name: "SMSIndiaHub",
    description:
      "India's leading CPaaS & business messaging provider. Send sub-2.5s OTP SMS, Promotional/Transactional Bulk SMS, WhatsApp Business API & Voice IVR.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
