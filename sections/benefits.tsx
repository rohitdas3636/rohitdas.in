import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { benefits } from "@/lib/data";

export function Benefits() {
  return (
    <Section
      eyebrow="Business outcomes"
      title="Marketing that makes growth easier to understand, forecast, and scale."
      description="The offer is simple: sharper acquisition, better conversion, and numbers your business can trust."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit.title} delay={index * 0.05}>
            <Card className="h-full">
              <benefit.icon className="mb-5 h-10 w-10 rounded-[8px] bg-blue-400/[0.12] p-2 text-blue-200" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{benefit.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
