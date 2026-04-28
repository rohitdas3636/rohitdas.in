import { Gift, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { noBrainerOffer } from "@/lib/data";

export function NoBrainerOffer() {
  return (
    <Section id="offer" className="py-12 sm:py-16">
      <Reveal>
        <div className="premium-border overflow-hidden rounded-[8px] bg-gradient-to-br from-[#1B1230] via-[#0A1830] to-[#06170F] p-7 shadow-gold sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D7A84A]/30 bg-[#D7A84A]/12 px-4 py-2 text-sm font-bold text-[#FFE6A3]">
                <Gift className="h-4 w-4" aria-hidden="true" />
                No-brainer starting offer
              </p>
              <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Try Rohit as your digital partner before committing to a large plan.
              </h2>
              <p className="mt-5 text-base leading-8 text-steel sm:text-lg">
                If you are unsure what to fix first, start with a focused growth audit. You will leave with clarity on tracking, lead quality, landing page gaps, and the highest-leverage marketing actions.
              </p>
              <div className="mt-7">
                <Button href="#strategy-call">Claim Free Strategy Audit</Button>
              </div>
            </div>
            <div className="grid gap-4">
              {noBrainerOffer.map((item) => (
                <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.055] p-5">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-[#FFE6A3]" aria-hidden="true" />
                  <p className="text-base font-semibold leading-7 text-mist">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
