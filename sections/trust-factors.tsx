import { BadgeCheck, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { trustFactors } from "@/lib/data";

const icons = [BadgeCheck, ShieldCheck, TrendingUp, Star];
const accents = [
  "border-[#D7A84A]/28 bg-[#D7A84A]/12 text-[#FFE6A3]",
  "border-emerald-300/25 bg-emerald-400/10 text-emerald-100",
  "border-cyan-300/25 bg-cyan-400/10 text-cyan-100",
  "border-fuchsia-300/25 bg-fuchsia-400/10 text-fuchsia-100",
];

export function TrustFactors() {
  return (
    <Section
      eyebrow="Trust factors"
      title="A digital partner built for clarity, accountability, and practical growth."
      description="Strong marketing starts with trust: clean numbers, realistic expectations, and decisions tied to business outcomes."
      className="py-12 sm:py-16"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trustFactors.map((factor, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={factor.value} delay={index * 0.05}>
              <div className={`h-full rounded-[8px] border p-5 ${accents[index % accents.length]}`}>
                <Icon className="mb-5 h-8 w-8" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-white">{factor.value}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{factor.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
