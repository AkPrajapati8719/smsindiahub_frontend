import React from "react";
import { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { contactMetadata } from "@/metadata/contact";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactFormSection />
    </div>
  );
}
