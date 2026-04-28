import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How it works"
      title="A structured path from audit to scalable acquisition."
      description="No vague retainers. Every phase has a purpose, a measurable output, and a direct connection to growth."
    >
      <div className="relative grid gap-4 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.05}>
            <div className="relative h-full rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
              <p className="text-sm font-extrabold text-blue-300">{step.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
