import { CalendarDays, ShieldCheck } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function FinalCta() {
  return (
    <Section id="strategy-call" className="pb-12 sm:pb-16">
      <Reveal>
        <div className="premium-border overflow-hidden rounded-[8px] bg-gradient-to-br from-[#0F2854] via-[#0A1830] to-[#050914] p-7 shadow-glow sm:p-10 lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/[0.18] bg-blue-200/10 px-4 py-2 text-sm font-semibold text-blue-100">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Limited onboarding slots per month
              </p>
              <h2 className="max-w-3xl text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Ready to Scale Your Business with High-Performance Marketing?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/[0.78] sm:text-lg">
                Book a free strategy call and get a clear view of what is blocking growth, what to fix first, and how to build a cleaner lead generation system.
              </p>
            </div>
            <div>
              <BookingForm />
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-100/70">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <span>Fast audit, clear next steps, no pressure.</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
