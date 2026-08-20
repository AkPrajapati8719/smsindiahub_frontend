import type { Metadata } from "next";
import { BASE_URL } from "./site";
import { CITIES_DATA } from "@/data/cities";
import { INDUSTRIES_DATA } from "@/data/industries";
import { SERVICES_DATA } from "@/data/services";

export function getDynamicSlugMetadata(slug: string): Metadata {
  const canonicalUrl = `${BASE_URL}/${slug}/`;

  // 1. City Hub Match
  const city = CITIES_DATA.find((c) => c.slug === slug);
  if (city) {
    const title = `Bulk SMS Service Provider in ${city.name} | SMSIndiaHub`;
    const description = `Best Bulk SMS Service Provider in ${city.name}, ${city.state}. High-priority OTP SMS, WhatsApp Business API, and Voice Call broadcasting with direct telecom connectivity.`;
    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        images: ["/assets/img/smsindiahub-new-logo.png"],
      },
    };
  }

  // 2. Industry Sector Match
  const indMatch = slug.replace(/^bulk-sms-for-/, "");
  const industry = INDUSTRIES_DATA.find((i) => i.slug === indMatch);
  if (industry) {
    const title = `Bulk SMS & Lead Automation for ${industry.title} | SMSIndiaHub`;
    const description = `${industry.description} Pre-approved DLT templates, WhatsApp chatbots, and automated lead capture for ${industry.title}.`;
    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        images: ["/assets/img/smsindiahub-new-logo.png"],
      },
    };
  }

  // 3. Service Match
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (service) {
    const title = `${service.title} in India | SMSIndiaHub`;
    const description = service.shortDesc;
    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        images: ["/assets/img/smsindiahub-new-logo.png"],
      },
    };
  }

  // 4. Default Fallback
  return {
    title: "SMSIndiaHub Enterprise Messaging Gateway",
    description: "Enterprise CPaaS platform for Bulk SMS, WhatsApp Business API, and Voice IVR in India.",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      images: ["/assets/img/smsindiahub-new-logo.png"],
    },
  };
}
