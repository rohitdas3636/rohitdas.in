import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Card } from "@/components/card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { contact, socialLinks } from "@/lib/data";

export function SocialMedia() {
  return (
    <Section
      id="socials"
      eyebrow="Social presence"
      title="Follow Rohit for digital marketing insights, proof points, and practical growth content."
      description="Connect across the platforms where Rohit shares campaign thinking, SEO education, agency updates, and performance marketing lessons."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((social, index) => (
          <Reveal key={social.platform} delay={index * 0.05}>
            <Link href={social.href} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="group h-full">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-gradient-to-br from-[#1C4D8D] to-[#0F2854] text-sm font-extrabold text-white">
                    {social.platform.slice(0, 2)}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-blue-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">{social.platform}</h3>
                <p className="mt-2 text-sm font-bold text-blue-200">{social.handle}</p>
                <p className="mt-4 text-sm leading-7 text-steel">{social.description}</p>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-6 grid gap-4 rounded-[8px] border border-emerald-300/20 bg-emerald-400/10 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Direct WhatsApp</p>
            <p className="mt-2 text-2xl font-semibold text-white">{contact.whatsappDisplay}</p>
            <p className="mt-2 text-sm leading-7 text-emerald-50/75">
              Message Rohit directly for digital marketing services, audits, and strategy calls.
            </p>
          </div>
          <Link
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Connect on WhatsApp
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
