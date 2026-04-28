"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Gift, X } from "lucide-react";
import { contact } from "@/lib/data";

export function InactivityPopup() {
  const [open, setOpen] = useState(false);
  const shown = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (shown.current) return;
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        shown.current = true;
        setOpen(true);
      }, 15000);
    };

    const events = ["mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      if (timer.current) clearTimeout(timer.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[75] grid place-items-center bg-black/70 px-4 py-6 backdrop-blur-xl" role="dialog" aria-modal="true" aria-labelledby="free-strategy-popup-title">
      <div className="glass premium-border w-full max-w-xl rounded-[8px] p-5 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D7A84A]/30 bg-[#D7A84A]/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#FFE6A3]">
              <Gift className="h-4 w-4" aria-hidden="true" />
              Free strategy call
            </p>
            <h2 id="free-strategy-popup-title" className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Want a quick growth audit?
            </h2>
            <p className="mt-2 text-sm leading-7 text-steel">
              Share your details and Rohit will connect with you for a free strategy call.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-red-300/40 bg-red-500 px-4 py-2 text-sm font-extrabold text-white shadow-[0_12px_40px_rgba(239,68,68,0.28)] transition hover:-translate-y-0.5 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Close free strategy call popup"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span>Close</span>
          </button>
        </div>

        <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="grid gap-4">
          <input type="hidden" name="_subject" value="Free Strategy Call Popup Lead" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://rohitdas.in/thank-you" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-mist">
              Name
              <input required name="name" autoComplete="name" className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-mist">
              Number
              <input required name="number" type="tel" autoComplete="tel" className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="+91 98765 43210" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-mist">
              Email
              <input required name="email" type="email" autoComplete="email" className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="you@email.com" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-mist">
              City
              <input required name="city" autoComplete="address-level2" className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Your city" />
            </label>
          </div>
          <button type="submit" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D7A84A] to-[#1C4D8D] px-5 py-3 text-sm font-bold text-white shadow-gold transition hover:-translate-y-0.5">
            Book Free Strategy Call
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
