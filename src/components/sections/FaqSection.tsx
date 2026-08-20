"use client";

import React, { useState } from "react";
import { Search, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { AccordionItem } from "@/components/ui/Accordion";
import { FAQS_DATA } from "@/data/faq";

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50" id="faqs">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="radiant" size="md">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Got Questions? We&apos;ve Got{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Clear Answers
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Everything you need to know about Bulk SMS routes, TRAI DLT compliance, API integrations, and billing.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="absolute left-4 top-7 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. DLT, OTP latency, validity)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpenDefault={idx === 0}
              />
            ))
          ) : (
            <div className="text-center py-10 text-slate-500 text-sm">
              No matching questions found for &quot;{searchQuery}&quot;. Please contact support directly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
