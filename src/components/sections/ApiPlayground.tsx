"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Code2, Copy, Check, Terminal, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { API_ENDPOINTS } from "@/data/apiDocs";

export function ApiPlayground() {
  const [copied, setCopied] = useState(false);
  const endpoint = API_ENDPOINTS[0];
  const [activeLang, setActiveLang] = useState<string>("javascript");

  const currentSnippet =
    endpoint.snippets.find((s) => s.language === activeLang) || endpoint.snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-slate-950 py-20 text-white" id="developer-api-playground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: API Overview */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="violet" size="md">
              Developer-First CPaaS API
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Integrate High-Speed SMS in{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Under 5 Minutes
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our RESTful HTTP API & SMPP v3.4 endpoints allow your engineering team to send transactional notifications, automated OTPs, and WhatsApp broadcasts with comprehensive DLT template compliance.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/20 p-1.5 text-blue-400">
                  <Zap className="h-4 w-4" />
                </div>
                <span>JSON / URL-Encoded REST payloads & SMPP v3.4 Binds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/20 p-1.5 text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span>Mandatory TRAI PE-ID & Template-ID validation headers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-violet-500/20 p-1.5 text-violet-400">
                  <Terminal className="h-4 w-4" />
                </div>
                <span>Real-time webhook DLR callbacks with latency timestamping</span>
              </div>
            </div>

            <div className="pt-2 flex gap-4">
              <Button href="/api/india" variant="radiant" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Read Full API Documentation
              </Button>
            </div>
          </div>

          {/* Right Column: Code Editor Terminal */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              {/* Terminal Window Header Bar (2 lines on mobile, single line on desktop) */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-0 border-b border-slate-800 bg-slate-950 px-4 py-3">
                {/* Line 1 on mobile: Traffic lights & endpoint */}
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">POST /api/mt/SendSMS</span>
                </div>

                {/* Line 2 on mobile: Language Switcher Tabs & Copy button */}
                <div className="flex items-center justify-between sm:justify-end gap-1">
                  <div className="flex items-center gap-1">
                    {endpoint.snippets.map((snip) => (
                      <button
                        key={snip.language}
                        onClick={() => setActiveLang(snip.language)}
                        className={`rounded-lg px-2.5 py-1 font-mono text-xs font-semibold transition-colors ${
                          activeLang === snip.language
                            ? "bg-blue-600 text-white"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {snip.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="ml-2 flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-300 hover:bg-slate-700 transition-colors shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Snippet Display Area */}
              <div className="p-4 sm:p-6 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto max-h-[360px]">
                <pre>
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Simulated 200 OK Response Tab */}
              <div className="border-t border-slate-800 bg-slate-950/80 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-bold text-emerald-400">HTTP 200 OK (Response)</span>
                  <span>Execution: 42ms</span>
                </div>
                <pre className="font-mono text-[11px] text-emerald-300">
                  <code>{endpoint.responseSample.body}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
