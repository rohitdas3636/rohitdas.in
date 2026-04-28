import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { painPoints } from "@/lib/data";

export function Problem() {
  return (
    <Section
      eyebrow="The real growth problem"
      title="Most marketing does not fail from lack of traffic. It fails from lack of precision."
      description="When targeting, tracking, messaging, and follow-up are disconnected, more budget only creates more noise."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {painPoints.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <Card className="h-full">
              <item.icon className="mb-5 h-9 w-9 rounded-[8px] bg-blue-400/[0.12] p-2 text-blue-200" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
