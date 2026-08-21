import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickContactFab } from "@/components/layout/QuickContactFab";
import { JsonLd } from "@/components/seo/JsonLd";
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
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <JsonLd />
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
