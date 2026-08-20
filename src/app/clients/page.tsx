import React from "react";
import type { Metadata } from "next";
import { clientsMetadata } from "@/metadata/clients";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export const metadata: Metadata = clientsMetadata;

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pt-8 pb-20">
      <ClientsShowcase />
      <div className="mt-16">
        <ContactFormSection />
      </div>
    </main>
  );
}
