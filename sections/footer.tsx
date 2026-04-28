import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { contact, navLinks, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.7fr] lg:px-8">
        <div>
          <Link href="#top" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-gradient-to-br from-[#1C4D8D] to-[#0F2854] text-sm font-extrabold text-white">
              RD
            </span>
            <span>
              <span className="block font-bold text-white">Rohit Das</span>
              <span className="block text-sm text-steel">Digital Marketing Strategist & Performance Expert</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-steel">
            Helping growth-focused businesses generate better leads with Google Ads, SEO, CRO, funnels, and automation.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Quick links</h2>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-steel transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Connect</h2>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.platform}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.platform}
                className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.07] text-steel transition hover:border-blue-300/30 hover:text-white"
              >
                <span className="text-xs font-extrabold">{item.platform.slice(0, 2)}</span>
              </Link>
            ))}
            <Link
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-[8px] border border-emerald-300/20 bg-emerald-400/10 text-emerald-100 transition hover:border-emerald-200/40 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.07] text-steel transition hover:border-blue-300/30 hover:text-white"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm font-semibold text-mist">{contact.whatsappDisplay}</p>
          <div className="mt-5">
            <Button href={`mailto:${contact.email}?subject=Strategy%20Call%20Request`} variant="secondary">
              Contact Rohit
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 text-sm text-steel sm:px-6 lg:px-8">
        <p>Copyright 2026 Rohit Das. All rights reserved.</p>
      </div>
    </footer>
  );
}
