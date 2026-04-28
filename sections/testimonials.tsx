import { Quote } from "lucide-react";
import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="Clear strategy, cleaner execution, and measurable confidence."
      description="Clients trust Rohit for direct communication, practical growth systems, and commercial focus."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.05}>
            <Card className="h-full">
              <Quote className="mb-5 h-8 w-8 text-blue-300" aria-hidden="true" />
              <blockquote className="text-base leading-8 text-mist">
                <span aria-hidden="true">&quot;</span>
                {testimonial.quote}
                <span aria-hidden="true">&quot;</span>
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-steel">{testimonial.role}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
