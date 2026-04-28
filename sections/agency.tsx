"use client";

import { Building2, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { WorkWithSeomoreModal } from "@/components/work-with-seomore-modal";
import { agencyHighlights, contact } from "@/lib/data";

export function Agency() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="seomore" className="pt-4 sm:pt-8">
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="premium-border overflow-hidden rounded-[8px] bg-gradient-to-br from-[#0F2854] via-[#0A1830] to-[#050914] shadow-glow">
            <Image
              src="/seomore-agency-visual.svg"
              alt="SEOmore agency growth visual with campaign charts and founder-led marketing signals"
              width={1100}
              height={760}
              className="h-auto w-full border-b border-white/10"
            />
            <div className="p-7 sm:p-9">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 text-sm font-semibold text-mist">
              <Building2 className="h-4 w-4 text-blue-300" aria-hidden="true" />
              Founder of SEOmore
            </div>
            <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              SEOmore is the agency behind Rohit&apos;s performance marketing systems.
            </h2>
            <p className="mt-5 text-base leading-8 text-steel sm:text-lg">
              Rohit Das founded SEOmore to help businesses move from scattered marketing activity to clear, measurable growth. The agency brings SEO, paid acquisition, conversion strategy, and automation together for brands that want better leads and stronger ROI.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#1C4D8D] to-[#3D7ED6] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Work with SEOmore
              </button>
              <Link
                href="https://www.facebook.com/SEOmore1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.26] hover:bg-white/[0.11]"
              >
                Visit SEOmore
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            {agencyHighlights.map((highlight) => (
              <div key={highlight} className="gold-border rounded-[8px] p-5">
                <CheckCircle2 className="mb-4 h-6 w-6 text-[#FFE6A3]" aria-hidden="true" />
                <p className="text-base font-semibold leading-7 text-mist">{highlight}</p>
              </div>
            ))}
            <div className="rounded-[8px] border border-emerald-300/20 bg-emerald-400/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Quick contact</p>
              <Link href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-2xl font-semibold text-white hover:underline">
                {contact.whatsappDisplay}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      <WorkWithSeomoreModal open={open} onClose={() => setOpen(false)} />
    </Section>
  );
}
