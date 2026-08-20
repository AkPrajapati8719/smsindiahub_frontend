import React from "react";
import { Metadata } from "next";
import { ApiPlayground } from "@/components/sections/ApiPlayground";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { apiIndiaMetadata } from "@/metadata/apiIndia";

export const metadata: Metadata = apiIndiaMetadata;

export default function ApiIndiaPage() {
  return (
    <div className="flex flex-col">
      <ApiPlayground />
      <ContactFormSection />
    </div>
  );
}
