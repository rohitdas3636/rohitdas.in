import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const pillars = [
  "Data-driven decisions backed by clean tracking",
  "Performance marketing built around buyer intent",
  "Conversion optimization across ads, pages, and follow-up",
  "Funnel strategy that turns traffic into qualified sales conversations",
];

export function Solution() {
  return (
    <Section className="pt-4 sm:pt-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass premium-border rounded-[8px] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">The Rohit Das approach</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-white sm:text-4xl">
              A senior growth partner for businesses that need measurable acquisition.
            </h2>
            <p className="mt-5 text-base leading-8 text-steel">
              Rohit connects strategy, execution, analytics, and CRO into one focused growth system. The goal is not more activity. The goal is better decisions, stronger lead quality, and clear commercial outcomes.
            </p>
            <div className="mt-7">
              <Button href="#strategy-call">Get a Growth Audit</Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
                <CheckCircle2 className="mb-4 h-6 w-6 text-blue-300" aria-hidden="true" />
                <p className="text-base font-semibold leading-7 text-mist">{pillar}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
