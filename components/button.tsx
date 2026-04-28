import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-ink sm:px-6",
        variant === "primary" &&
          "bg-gradient-to-r from-[#1C4D8D] to-[#3D7ED6] text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_24px_90px_rgba(28,77,141,0.38)]",
        variant === "secondary" &&
          "border border-white/[0.14] bg-white/[0.07] text-white hover:-translate-y-0.5 hover:border-white/[0.26] hover:bg-white/[0.11]",
        variant === "ghost" &&
          "text-mist hover:bg-white/[0.07] hover:text-white",
        className,
      )}
    >
      <span className="font-semibold">{children}</span>
      {variant !== "ghost" ? (
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
