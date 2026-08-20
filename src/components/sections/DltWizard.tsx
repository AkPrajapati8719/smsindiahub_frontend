"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DLT_PORTALS_DATA, DltPortal } from "@/data/dlt";

export function DltWizard() {
  const [selectedPortal, setSelectedPortal] = useState<DltPortal>(DLT_PORTALS_DATA[0]);

  return (
    <section className="bg-white py-20 dark:bg-slate-950" id="dlt-compliance-wizard">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="amber" size="md">
            TRAI Regulatory Compliance
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Seamless{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
              PE-TM Chain Binding
            </span>{" "}
            Across All Telecom Portals
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Mandated by TRAI, Principal Entity (PE) to Telemarketer (TM) chain binding ensures your approved headers and message templates route securely through SMSIndiaHub.
          </p>
        </div>

        {/* Operator Selection Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {DLT_PORTALS_DATA.map((portal) => (
            <button
              key={portal.id}
              onClick={() => setSelectedPortal(portal)}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-200 ${
                selectedPortal.id === portal.id
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-radiant-sm scale-105"
                  : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {portal.name}
            </button>
          ))}
        </div>

        {/* Operator Walkthrough Card */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400">Carrier Partner</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {selectedPortal.telecomOperator}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedPortal.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 shadow-sm"
              >
                <span>Open {selectedPortal.name}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Telemarketer Details Callout */}
          <div className="mt-6 rounded-2xl bg-blue-50/80 p-4 border border-blue-200 dark:bg-blue-950/40 dark:border-blue-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400">
                SMSIndiaHub Registered Telemarketer ID
              </div>
              <div className="font-mono text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                {selectedPortal.telemarketerId}
              </div>
            </div>
            <span className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
              {selectedPortal.telemarketerName}
            </span>
          </div>

          {/* Step By Step Instructions */}
          <div className="mt-8 space-y-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Step-By-Step Binding Instructions:
            </h4>
            <div className="space-y-3">
              {selectedPortal.chainBindingSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-sm dark:bg-slate-800 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-xs text-white">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Help callout */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-500 shrink-0" />
              <span>Need 1-on-1 assistance with DLT Registration? Our regulatory team helps for free.</span>
            </div>
            <Link href="/dlt-registration" className="font-bold text-blue-600 hover:underline shrink-0">
              Read Complete DLT Guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
