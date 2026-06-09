import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "small";
}

export function Typography({
  children,
  className,
  as: Component,
  variant = "p",
}: TypographyProps) {
  const styles = {
    h1: "text-5xl lg:text-7xl font-serif text-brand leading-[1.1]",
    h2: "text-4xl md:text-5xl font-serif text-brand",
    h3: "text-4xl font-serif text-brand",
    h4: "text-2xl font-serif text-brand",
    p: "text-lg text-text-muted leading-relaxed",
    span: "text-sm font-medium",
    small: "text-xs tracking-widest uppercase opacity-80",
  };

  const ResolvedComponent = Component || (variant === "span" || variant === "small" ? "span" : variant);

  return (
    <ResolvedComponent className={cn(styles[variant], className)}>
      {children}
    </ResolvedComponent>
  );
}
