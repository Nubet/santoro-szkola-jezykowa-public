import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "brand" | "accent" | "white";
}

export function Logo({ className, variant = "brand" }: LogoProps) {
  const colors = {
    brand: "text-brand",
    accent: "text-accent",
    white: "text-white",
  };

  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
        <Image
          src="/logo-santoro.svg"
          alt="Santoro Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className={cn("font-serif font-semibold text-2xl tracking-tight", colors[variant])}>
        Santoro
      </span>
    </div>
  );
}
