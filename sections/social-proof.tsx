import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { stats } from "@/lib/data";

const logos = ["GrowthOps", "LeadLab", "SearchScale", "FunnelX", "AdMetric"];

export function SocialProof() {
  return (
    <Section className="py-12 sm:py-16">
      <div className="grid gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 text-center">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-steel">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <div className="mt-10 rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Trusted growth systems for ambitious brands</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {logos.map((logo) => (
              <div key={logo} className="grid h-14 place-items-center rounded-[8px] border border-white/[0.08] bg-white/[0.035] text-sm font-bold text-steel">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
