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
      <div className="glass premium-border max-h-[calc(100dvh-24px)] w-full max-w-lg overflow-y-auto rounded-[8px] sm:max-h-[calc(100dvh-48px)]">
        <div className="sticky top-0 z-10 mb-3 flex items-center justify-between gap-3 border-b border-white/10 bg-[#07111F]/95 p-3 backdrop-blur-xl sm:p-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFE6A3]">Join SEOmore</p>
            <h2 id="work-with-seomore-title" className="mt-1 text-lg font-semibold text-white sm:text-2xl">
              Apply for SEOmore
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/[0.08] text-white transition hover:bg-white/[0.16] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Close SEOmore application form"
          >
            <X className="h-5 w-5 stroke-[3]" aria-hidden="true" />
          </button>
        </div>

        <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="grid gap-3 px-3 pb-3 sm:px-4 sm:pb-4">
          <input type="hidden" name="_subject" value="New SEOmore Work Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={contact.workWhatsappHref} />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <label className="grid gap-1 text-xs font-semibold text-mist sm:text-sm">
              Name
              <input required name="name" autoComplete="name" className="min-h-10 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Name" />
            </label>
            <label className="grid gap-1 text-xs font-semibold text-mist sm:text-sm">
              Phone
              <input required name="phone" type="tel" autoComplete="tel" className="min-h-10 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Phone" />
            </label>
            <label className="grid gap-1 text-xs font-semibold text-mist sm:text-sm">
              Email
              <input required name="email" type="email" autoComplete="email" className="min-h-10 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Email" />
            </label>
            <label className="grid gap-1 text-xs font-semibold text-mist sm:text-sm">
              City
              <input required name="city" autoComplete="address-level2" className="min-h-10 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="City" />
            </label>
          </div>

          <fieldset className="rounded-[8px] border border-white/10 bg-white/[0.035] p-2.5 sm:p-3">
            <legend className="px-2 text-xs font-bold text-white sm:text-sm">Interested profile</legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {profiles.map((profile) => (
                <label key={profile} className="flex min-h-9 items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-2 py-2 text-xs font-semibold text-mist sm:text-sm">
                  <input required type="radio" name="profile" value={profile} className="h-3.5 w-3.5 shrink-0 accent-emerald-400" />
                  {profile}
                </label>
              ))}
            </div>
            <label className="mt-2 grid gap-1 text-xs font-semibold text-mist sm:text-sm">
              Other profile
              <input name="other_profile" className="min-h-10 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="If other, type here" />
            </label>
          </fieldset>

          <label className="grid gap-1 text-xs font-semibold text-mist sm:text-sm">
            Skills / message
            <input required name="message" className="min-h-10 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Skills, experience, availability" />
          </label>

          <button type="submit" className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-[#1C4D8D] px-5 py-2.5 text-sm font-bold text-white shadow-emerald transition hover:-translate-y-0.5">
            Submit Application
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
