import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("glass premium-border rounded-[8px] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20", className)}>
      {children}
    </div>
  );
}
