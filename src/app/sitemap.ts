import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";
import { CITIES_DATA } from "@/data/cities";
import { INDUSTRIES_DATA } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.smsindiahub.in";

  const staticRoutes = [
    "/",
    "/otp-sms-service-provider/",
    "/promotional-sms/",
    "/transactional-sms/",
    "/whatsapp-business-api/",
    "/whatsapp-chatbot/",
    "/rcs-messaging-services/",
    "/voice-call-service-provider/",
    "/missed-call-service-provider/",
    "/excel-plugin/",
    "/dlt-registration/",
    "/api/india/",
    "/pricing/",
    "/about-us/",
    "/clients/",
    "/contact/",
    "/registration/",
    "/banking-details/",
    "/privacy-policy/",
    "/terms-and-conditions/",
    "/refund-policy/",
    "/no-spam/",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const cityRoutes = CITIES_DATA.map((city) => ({
    url: `${baseUrl}/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = SERVICES_DATA.map((srv) => ({
    url: `${baseUrl}/${srv.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryRoutes = INDUSTRIES_DATA.map((ind) => ({
    url: `${baseUrl}/bulk-sms-for-${ind.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...industryRoutes];
}
