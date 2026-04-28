import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative z-10 overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-screen lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-radial-premium" aria-hidden="true" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1C4D8D]/20 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 text-sm font-semibold text-mist backdrop-blur">
              <Sparkles className="h-4 w-4 text-blue-300" aria-hidden="true" />
              <span>5+ Years Experience in Performance Marketing</span>
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-7xl">
              I Help Businesses Generate High-Quality Leads with Data-Driven Digital Marketing
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-steel sm:text-xl">
              Google Ads, SEO, lead generation funnels, conversion optimization, and automation systems built to reduce wasted spend and create predictable growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#strategy-call">Book a Strategy Call</Button>
              <Button href="#case-studies" variant="secondary">
                View Case Studies
              </Button>
            </div>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100 transition hover:border-emerald-200/50 hover:bg-emerald-400/15"
            >
              WhatsApp: <span className="animate-pulse text-white">{contact.whatsappDisplay}</span>
            </a>
            <div className="mt-9 grid gap-3 text-sm text-mist sm:grid-cols-3">
              {["Clear tracking", "Qualified leads", "Scalable funnels"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="glass premium-border relative overflow-hidden rounded-[8px] p-3 shadow-glow">
            <Image
              src="/rohit-strategy-visual.svg"
              alt="Premium founder strategy visual showing Rohit Das, marketing analytics, lead growth, and performance signals"
              width={1200}
              height={900}
              priority
              className="h-auto w-full rounded-[6px]"
            />
          </div>
          <div className="gold-border absolute -bottom-5 left-4 max-w-[284px] rounded-[8px] p-4 shadow-gold sm:left-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFE6A3]">Premium growth signal</p>
                <p className="mt-1 text-2xl font-semibold text-white">+72%</p>
              </div>
              <ArrowUpRight className="h-9 w-9 rounded-full bg-[#D7A84A]/18 p-2 text-[#FFE6A3]" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
