"use client";

import { useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { contact } from "@/lib/data";

type WorkWithSeomoreModalProps = {
  open: boolean;
  onClose: () => void;
};

const profiles = ["SEO Intern", "Google Ads Intern", "Content Writer", "Social Media Executive", "Sales Partner", "Other"];

export function WorkWithSeomoreModal({ open, onClose }: WorkWithSeomoreModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] grid items-start justify-items-center overflow-y-auto bg-black/72 px-3 py-3 backdrop-blur-xl sm:px-4 sm:py-6 md:place-items-center" role="dialog" aria-modal="true" aria-labelledby="work-with-seomore-title">
      <div className="glass premium-border max-h-[calc(100dvh-24px)] w-full max-w-2xl overflow-y-auto rounded-[8px] sm:max-h-[calc(100dvh-48px)]">
        <div className="sticky top-0 z-10 mb-4 flex items-start justify-between gap-3 border-b border-white/10 bg-[#07111F]/95 p-4 backdrop-blur-xl sm:mb-5 sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE6A3]">Join SEOmore</p>
            <h2 id="work-with-seomore-title" className="mt-2 text-xl font-semibold text-white sm:text-3xl">
              Apply as an intern or working partner.
            </h2>
            <p className="mt-2 max-w-md text-xs leading-6 text-steel sm:text-sm sm:leading-7">
              Share your details and the profile you are interested in. After submitting, you will be redirected to WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-red-300/40 bg-red-500 px-3 py-2 text-xs font-extrabold text-white shadow-[0_12px_40px_rgba(239,68,68,0.28)] transition hover:-translate-y-0.5 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-ink sm:px-4 sm:text-sm"
            aria-label="Close SEOmore application form"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span>Close</span>
          </button>
        </div>

        <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="grid gap-3 px-4 pb-4 sm:gap-4 sm:px-6 sm:pb-6">
          <input type="hidden" name="_subject" value="New SEOmore Work Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={contact.workWhatsappHref} />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <label className="grid gap-1.5 text-sm font-semibold text-mist">
              Name
              <input required name="name" autoComplete="name" className="min-h-11 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50 sm:min-h-12" placeholder="Your name" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-mist">
              Phone
              <input required name="phone" type="tel" autoComplete="tel" className="min-h-11 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50 sm:min-h-12" placeholder="+91 98765 43210" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-mist">
              Email
              <input required name="email" type="email" autoComplete="email" className="min-h-11 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50 sm:min-h-12" placeholder="you@email.com" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-mist">
              City
              <input required name="city" autoComplete="address-level2" className="min-h-11 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50 sm:min-h-12" placeholder="Your city" />
            </label>
          </div>

          <fieldset className="rounded-[8px] border border-white/10 bg-white/[0.035] p-3 sm:p-4">
            <legend className="px-2 text-sm font-bold text-white">Interested profile</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-3">
              {profiles.map((profile) => (
                <label key={profile} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm font-semibold text-mist sm:py-3">
                  <input required type="radio" name="profile" value={profile} className="h-4 w-4 accent-emerald-400" />
                  {profile}
                </label>
              ))}
            </div>
            <label className="mt-3 grid gap-1.5 text-sm font-semibold text-mist sm:mt-4">
              Other profile
              <input name="other_profile" className="min-h-11 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50 sm:min-h-12" placeholder="Type another profile if not listed" />
            </label>
          </fieldset>

          <label className="grid gap-1.5 text-sm font-semibold text-mist">
            Why do you want to work with SEOmore?
            <textarea required name="message" rows={3} className="resize-none rounded-[8px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50 sm:rows-4" placeholder="Tell us about your skills, interest, and availability." />
          </label>

          <button type="submit" className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-[#1C4D8D] px-5 py-3 text-sm font-bold text-white shadow-emerald transition hover:-translate-y-0.5 sm:min-h-12">
            Submit Application
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
