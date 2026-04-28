"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions growth-focused founders usually ask before working together."
      description="Straight answers on fit, timelines, guarantees, and communication."
    >
      <Reveal>
        <div className="mx-auto max-w-4xl divide-y divide-white/10 rounded-[8px] border border-white/10 bg-white/[0.045]">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                  aria-expanded={open}
                >
                  <span className="text-base font-semibold text-white sm:text-lg">{faq.question}</span>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-blue-300 transition", open && "rotate-180")} aria-hidden="true" />
                </button>
                <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-7 text-steel sm:px-7 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
