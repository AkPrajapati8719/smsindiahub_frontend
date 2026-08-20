"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
  className?: string;
}

export function AccordionItem({
  question,
  answer,
  isOpenDefault = false,
  className,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all duration-200 dark:border-slate-800 dark:bg-slate-900/60",
        isOpen && "border-blue-500/40 shadow-sm ring-1 ring-blue-500/20",
        className
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <ChevronDown
          className={cn(
            "ml-4 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
            isOpen && "rotate-180 text-blue-600 dark:text-blue-400"
          )}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-300 sm:text-base">
          {answer}
        </div>
      )}
    </div>
  );
}
