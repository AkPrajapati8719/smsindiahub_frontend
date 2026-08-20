import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickContactFab } from "@/components/layout/QuickContactFab";
import { COMPANY_INFO } from "@/data/company";
import { DEFAULT_SITE_METADATA } from "@/metadata/site";

export const metadata: Metadata = DEFAULT_SITE_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SMSINDIAHUB",
              legalName: "Cloud Wireless Technologies (I) Pvt. Ltd.",
              url: "https://www.smsindiahub.in",
              logo: "https://www.smsindiahub.in/assets/img/smsindiahub-new-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8305781001",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "202 IInd Floor, Geet Vaikunth Ayodhya Bypass Road",
                addressLocality: "Bhopal",
                addressRegion: "MP",
                postalCode: "462041",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickContactFab />
      </body>
    </html>
  );
}
