import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Building2, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { CITIES_DATA } from "@/data/cities";
import { INDUSTRIES_DATA } from "@/data/industries";
import { SERVICES_DATA } from "@/data/services";

import { ALL_LEGACY_SLUGS } from "@/data/legacyRoutes";
import { getDynamicSlugMetadata } from "@/metadata/dynamicSlug";

interface Props {
  params: { slug: string };
}

const TOP_LEVEL_APP_ROUTES = new Set([
  "about-us",
  "banking-details",
  "clients",
  "contact",
  "dlt-registration",
  "excel-plugin",
  "missed-call-service-provider",
  "no-spam",
  "otp-sms-service-provider",
  "pricing",
  "privacy-policy",
  "promotional-sms",
  "rcs-messaging-services",
  "refund-policy",
  "registration",
  "signup",
  "terms-and-conditions",
  "transactional-sms",
  "voice-call-service-provider",
  "whatsapp-business-api",
  "whatsapp-chatbot",
]);

export async function generateStaticParams() {
  const citySlugs = CITIES_DATA.map((c) => ({ slug: c.slug }));
  const industrySlugs = INDUSTRIES_DATA.map((i) => ({ slug: `bulk-sms-for-${i.slug}` }));
  const serviceSlugs = SERVICES_DATA.map((s) => ({ slug: s.slug }));
  const legacySlugs = ALL_LEGACY_SLUGS.map((s) => ({ slug: s }));

  const allSlugs = [...citySlugs, ...industrySlugs, ...serviceSlugs, ...legacySlugs]
    .filter((item) => !TOP_LEVEL_APP_ROUTES.has(item.slug));

  const uniqueSlugs = Array.from(new Set(allSlugs.map((s) => s.slug))).map((slug) => ({ slug }));
  return uniqueSlugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return getDynamicSlugMetadata(params.slug);
}

export default function DynamicPage({ params }: Props) {
  const { slug } = params;

  const city = CITIES_DATA.find((c) => c.slug === slug);
  const indMatch = slug.replace(/^bulk-sms-for-/, "");
  const industry = INDUSTRIES_DATA.find((i) => i.slug === indMatch);
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!city && !industry && !service) {
    // If not matching predefined list, still display a sleek landing page for any other scraped route
    const formattedTitle = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
      <div className="flex flex-col">
        <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-6">
            <Badge variant="radiant" size="md">
              SMSIndiaHub Enterprise Gateway
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {formattedTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Empower your communication workflow with high-throughput SMS routes, WhatsApp API, and automated voice broadcasts with 99.99% uptime SLA.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Get Free Trial Credits
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Rate Cards
              </Button>
            </div>
          </div>
        </section>
        <PricingCalculator />
        <FaqSection />
        <ContactFormSection />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* City Hero */}
      {city && (
        <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-6">
            <Badge variant="blue" size="md" icon={<MapPin className="h-3.5 w-3.5" />}>
              {city.name} Regional Hub • {city.region}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Bulk SMS Service Provider in{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {city.name}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {city.description}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Connect with {city.name} Account Manager
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                Calculate Rates
              </Button>
            </div>

            {/* City Regional Gateway Graphic */}
            <div className="pt-8 flex justify-center">
              <div className="relative h-64 sm:h-72 w-full max-w-xl overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:scale-[1.02]">
                <Image
                  src="/assets/img/Fast-SMS-Delivery.png"
                  alt={`Bulk SMS Gateway Infrastructure ${city.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industry Hero */}
      {industry && (
        <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-6">
            <Badge variant="violet" size="md" icon={<Building2 className="h-3.5 w-3.5" />}>
              Industry Specialized Solution
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Bulk SMS & Automation for{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {industry.title}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {industry.description}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Get {industry.title} Template Pack
              </Button>
              <Button href="/whatsapp-chatbot" variant="outline" size="lg">
                View Chatbot Flows
              </Button>
            </div>

            {/* Industry Specific Visual Diagram */}
            <div className="pt-8 flex justify-center">
              <div className="relative h-64 sm:h-80 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:scale-[1.02]">
                <Image
                  src={
                    industry.slug === "real-estate"
                      ? "/assets/img/lead-generation-for-real-estate.png"
                      : industry.slug === "automotive"
                      ? "/assets/img/lead-generation-for-automobile-industry.png"
                      : industry.slug === "education-and-schools"
                      ? "/assets/img/lead-automation-for-edutech.png"
                      : industry.slug === "healthcare-and-hospitals"
                      ? "/assets/img/appointment-automation-for-lead-generation.png"
                      : industry.slug === "banking-and-finance"
                      ? "/assets/img/Two-factor-authentication-service.png"
                      : "/assets/img/IndiaMart-Lead-Automation-via-WhatsApp.png"
                  }
                  alt={`Bulk SMS & Automation for ${industry.title}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Hero */}
      {service && (
        <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-6">
            <Badge variant="radiant" size="md">
              {service.tag || "Enterprise Solution"}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {service.longDesc}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="radiant" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                {service.ctaText}
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      )}

      <PricingCalculator />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
