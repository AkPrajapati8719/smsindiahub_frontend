import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { FileSpreadsheet, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { excelPluginMetadata } from "@/metadata/excelPlugin";

export const metadata: Metadata = excelPluginMetadata;

export default function ExcelPluginPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 dark:bg-slate-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 text-center">
          <Badge variant="green" size="md">
            Free Desktop Add-in
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Send Bulk SMS Directly from{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Microsoft Excel
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate copy-pasting into web portals. Our native Excel Plugin integrates seamlessly into MS Excel 2010 to Office 365, allowing dynamic custom column mapping and one-click bulk dispatches.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="radiant"
              size="lg"
              icon={<Download className="h-5 w-5" />}
            >
              Get Free Excel Plugin Setup
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View SMS Pricing
            </Button>
          </div>

          {/* Visual Plugin Interface Preview */}
          <div className="pt-8 flex justify-center">
            <div className="relative h-64 sm:h-80 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:scale-[1.02]">
              <Image
                src="/assets/img/excel-plugins.png"
                alt="SMSIndiaHub Excel Bulk SMS Plugin Interface"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
