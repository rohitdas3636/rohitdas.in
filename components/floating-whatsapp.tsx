import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";

export function FloatingWhatsapp() {
  return (
    <Link
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Connect on WhatsApp ${contact.whatsappDisplay}`}
      className="whatsapp-live fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_60px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-ink"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/18">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="hidden sm:block">{contact.whatsappDisplay}</span>
    </Link>
  );
}
