import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case studies"
      title="Results that come from fixing the whole acquisition system."
      description="Campaign performance improves fastest when tracking, intent, page conversion, and lead handling work together."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.06}>
            <Card className="h-full">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  {study.industry}
                </span>
                <ArrowUpRight className="h-5 w-5 text-blue-300" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-white">{study.title}</h3>
              <div className="mt-6 space-y-5 text-sm leading-7">
                <p className="text-steel"><span className="font-bold text-mist">Problem:</span> {study.problem}</p>
                <p className="text-steel"><span className="font-bold text-mist">Strategy:</span> {study.strategy}</p>
                <p className="rounded-[8px] border border-blue-300/[0.18] bg-blue-300/10 p-4 font-semibold text-white">
                  {study.result}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
