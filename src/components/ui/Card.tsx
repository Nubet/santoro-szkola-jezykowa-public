import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "white" | "brand" | "surface";
}

export function Card({ children, className, variant = "white" }: CardProps) {
  const variants = {
    white: "bg-white border border-brand/5 shadow-card",
    brand: "bg-brand text-white shadow-card relative overflow-hidden",
    surface: "bg-surface-alt",
  };

  return (
    <div className={cn("rounded-3xl p-8 transition-all duration-300", variants[variant], className)}>
      {children}
    </div>
  );
}
