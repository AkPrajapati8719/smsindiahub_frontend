import React from "react";
import { FAQS_DATA } from "@/data/faq";
import { COMPANY_INFO } from "@/data/company";

export function JsonLd() {
  const baseUrl = "https://www.smsindiahub.in";

  // 1. Organization Schema with Entity Disambiguation & Social SameAs Links
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "SMSINDIAHUB",
    legalName: "Cloud Wireless Technologies (I) Pvt. Ltd.",
    alternateName: ["SMS India Hub", "SMSIndiaHub CPaaS", "SMSIndiaHub Gateway"],
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/assets/img/smsindiahub-new-logo.png`,
      width: 512,
      height: 128,
      caption: "SMSINDIAHUB Enterprise CPaaS Logo",
    },
    image: `${baseUrl}/assets/img/smsindiahub-new-logo.png`,
    description:
      "SMSIndiaHub is India's leading CPaaS (Communications Platform as a Service) provider delivering enterprise Bulk SMS, OTP Gateway, official WhatsApp Business API, RCS messaging, and automated Voice IVR.",
    foundingDate: "2012-05-15",
    founders: [
      {
        "@type": "Person",
        name: "SMSIndiaHub Leadership Team",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8305781001",
        contactType: "customer service",
        areaServed: ["IN", "AE", "US", "GB", "SG"],
        availableLanguage: ["en", "hi"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7554910800",
        contactType: "technical support",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "202 IInd Floor, Geet Vaikunth, Ayodhya Bypass Road",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      postalCode: "462041",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/smsindiahub",
      "https://twitter.com/smsindiahub",
      "https://www.linkedin.com/company/smsindiahub",
      "https://www.youtube.com/@smsindiahub",
      "https://www.instagram.com/smsindiahub",
    ],
    awards: [
      "ISO 9001:2015 Certified Enterprise Quality Management",
      "ISO 27001:2013 Information Security Management",
      "MSME Registered Enterprise India",
      "MPSEDC Associated Partner",
      "Official Meta Cloud API Partner",
    ],
    knowsAbout: [
      "Bulk SMS Gateway",
      "OTP SMS API",
      "WhatsApp Business API",
      "RCS Business Messaging",
      "Voice IVR Broadcasting",
      "TRAI DLT Compliance",
      "SMPP Protocol",
      "Telecom Carrier Interconnects",
    ],
  };

  // 2. SoftwareApplication / Service Schema with Pricing & Aggregate Rating
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#software`,
    name: "SMSIndiaHub CPaaS Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Web API, REST, SMPP, Node.js, Python, PHP, Java, cURL",
    url: baseUrl,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    description:
      "Enterprise Cloud Communications Platform offering Sub-2.5s OTP SMS delivery, WhatsApp Business API with verified Green Tick, RCS rich media cards, and automated Voice IVR broadcasts with 99.99% uptime.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "0.11",
      highPrice: "0.25",
      offerCount: "10",
      offers: [
        {
          "@type": "Offer",
          name: "Transactional & OTP SMS Route",
          price: "0.11",
          priceCurrency: "INR",
          description: "Sub-2.5s delivery with 100% DLT compliance and multi-operator failover.",
        },
        {
          "@type": "Offer",
          name: "WhatsApp Business API",
          price: "0.45",
          priceCurrency: "INR",
          description: "Official Meta Cloud API integration with Green Tick verification.",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "15420",
      reviewCount: "8950",
    },
    featureList: [
      "Sub-2.5s OTP Delivery SLA",
      "Tier-1 Direct Carrier Connectivity (Jio, Airtel, Vi, BSNL)",
      "Official Meta WhatsApp Business API Partner",
      "100% TRAI DLT Compliant with Automatic PE-TM Chain Validation",
      "10,000 TPS Peak Concurrency",
      "Interactive 24/7 Voice IVR with DTMF Capture",
      "Next-Gen Rich RCS Messaging",
    ],
  };

  // 3. WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "SMSINDIAHUB",
    description: "Enterprise CPaaS, Bulk SMS, WhatsApp Business API & Voice Gateway in India",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/pricing?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "CPaaS Solutions",
        item: `${baseUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing & Plans",
        item: `${baseUrl}/pricing`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Developer API",
        item: `${baseUrl}/api/india`,
      },
    ],
  };

  // 5. FAQPage Schema for Rich Snippets & AI Engine Answer Extraction
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 6. WebPage & Article Schema for Freshness & GEO Author Verification
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "Bulk SMS, WhatsApp API & OTP Gateway India | SMSINDIAHUB",
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    description:
      "India's leading CPaaS gateway for Sub-2.5s OTP SMS, Meta WhatsApp Business API & Voice IVR broadcasts. 100% TRAI DLT compliant. Get free trial credits.",
    inLanguage: "en-IN",
    datePublished: "2024-01-01T00:00:00+05:30",
    dateModified: "2026-08-21T12:00:00+05:30",
    author: {
      "@id": `${baseUrl}/#organization`,
    },
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    breadcrumb: {
      "@id": `${baseUrl}/#breadcrumb`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
