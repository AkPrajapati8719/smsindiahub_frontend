import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TESTIMONIALS_DATA } from "@/data/clients";

export function Testimonials() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="radiant" size="md">
            Customer Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by 25,000+ Growth Teams,{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Engineers & Marketers
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                  <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{item.author}</div>
                  <div className="text-xs text-slate-500">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
