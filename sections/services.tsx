import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Performance marketing services built around revenue, not vanity metrics."
      description="Each service is designed to improve a specific part of your acquisition system, from demand capture to conversion and follow-up."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <Card className="group h-full">
              <service.icon className="mb-6 h-11 w-11 rounded-[8px] bg-gradient-to-br from-[#1C4D8D] to-[#0F2854] p-2.5 text-white transition group-hover:scale-105" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
