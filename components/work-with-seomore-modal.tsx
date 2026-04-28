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
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/72 px-4 py-6 backdrop-blur-xl" role="dialog" aria-modal="true" aria-labelledby="work-with-seomore-title">
      <div className="glass premium-border max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[8px] p-5 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE6A3]">Join SEOmore</p>
            <h2 id="work-with-seomore-title" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Apply as an intern or working partner.
            </h2>
            <p className="mt-2 text-sm leading-7 text-steel">
              Share your details and the profile you are interested in. After submitting, you will be redirected to WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] border border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.1]"
            aria-label="Close SEOmore application form"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="grid gap-4">
          <input type="hidden" name="_subject" value="New SEOmore Work Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={contact.workWhatsappHref} />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-mist">
              Name
              <input required name="name" autoComplete="name" className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-mist">
              Phone
              <input required name="phone" type="tel" autoComplete="tel" className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="+91 98765 43210" />
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

          <fieldset className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4">
            <legend className="px-2 text-sm font-bold text-white">Interested profile</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {profiles.map((profile) => (
                <label key={profile} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-mist">
                  <input required type="radio" name="profile" value={profile} className="h-4 w-4 accent-emerald-400" />
                  {profile}
                </label>
              ))}
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-mist">
              Other profile
              <input name="other_profile" className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Type another profile if not listed" />
            </label>
          </fieldset>

          <label className="grid gap-2 text-sm font-semibold text-mist">
            Why do you want to work with SEOmore?
            <textarea required name="message" rows={4} className="resize-none rounded-[8px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-steel/70 focus:border-blue-300/50" placeholder="Tell us about your skills, interest, and availability." />
          </label>

          <button type="submit" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-[#1C4D8D] px-5 py-3 text-sm font-bold text-white shadow-emerald transition hover:-translate-y-0.5">
            Submit Application
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
