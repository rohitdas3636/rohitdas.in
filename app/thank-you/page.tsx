import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/button";

export const metadata = {
  title: "Strategy Call Request Received",
  description: "Thank you for requesting a strategy call with Rohit Das.",
};

export default function ThankYouPage() {
  return (
    <main className="relative z-10 min-h-screen px-5 py-28 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="glass premium-border rounded-[8px] p-7 sm:p-10">
          <CheckCircle2 className="mx-auto h-14 w-14 text-blue-300" aria-hidden="true" />
          <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl">
            Strategy call request received.
          </h1>
          <p className="mt-5 text-base leading-8 text-steel sm:text-lg">
            Thanks for reaching out. Rohit will review your details and reply with the next available call slots.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Link
              href="mailto:seomoretechies@gmail.com"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.26] hover:bg-white/[0.11]"
            >
              Email Directly
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
