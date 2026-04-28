import { ArrowRight, Mail } from "lucide-react";

const contactEmail = "seomoretechies@gmail.com";

export function BookingForm() {
  return (
    <form
      action={`https://formsubmit.co/${contactEmail}`}
      method="POST"
      className="glass rounded-[8px] p-5 sm:p-6"
      aria-label="Book a strategy call"
    >
      <input type="hidden" name="_subject" value="New Strategy Call Request from rohitdas.in" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://rohitdas.in/thank-you" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-mist">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-steel/70 focus:border-blue-300/50"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-mist">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-steel/70 focus:border-blue-300/50"
            placeholder="you@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-mist">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-steel/70 focus:border-blue-300/50"
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-mist">
          Website
          <input
            name="website"
            type="url"
            autoComplete="url"
            className="min-h-12 rounded-[8px] border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-steel/70 focus:border-blue-300/50"
            placeholder="https://yourwebsite.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-mist sm:col-span-2">
          Monthly ad budget
          <select
            required
            name="monthly_ad_budget"
            className="min-h-12 rounded-[8px] border border-white/10 bg-[#081426] px-4 text-sm text-white outline-none transition focus:border-blue-300/50"
            defaultValue=""
          >
            <option value="" disabled>
              Select range
            </option>
            <option>Under Rs. 50,000</option>
            <option>Rs. 50,000 - Rs. 2,00,000</option>
            <option>Rs. 2,00,000 - Rs. 5,00,000</option>
            <option>Rs. 5,00,000+</option>
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-mist">
        What do you want to improve?
        <textarea
          required
          name="growth_goal"
          rows={4}
          className="resize-none rounded-[8px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-steel/70 focus:border-blue-300/50"
          placeholder="Example: reduce CPL, improve lead quality, scale Google Ads, fix tracking..."
        />
      </label>
      <button
        type="submit"
        className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1C4D8D] to-[#3D7ED6] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-ink"
      >
        Request Strategy Call
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
      <div className="mt-4 flex flex-col gap-2 text-sm text-blue-100/75 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex items-center gap-2">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Prefer direct email?
        </span>
        <a className="font-semibold text-white underline-offset-4 hover:underline" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </div>
    </form>
  );
}
