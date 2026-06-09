import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    
    const variants = {
      primary: "bg-brand text-white hover:bg-brand-light shadow-md hover:shadow-lg",
      secondary: "bg-surface-alt text-brand hover:bg-surface-hover",
      outline: "bg-white text-brand border border-brand/20 hover:bg-surface-alt",
      ghost: "text-brand hover:bg-brand/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-sm font-medium",
      lg: "px-8 py-4 font-medium",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
