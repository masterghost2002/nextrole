import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "w-full py-3 rounded font-bold disabled:opacity-50 disabled:cursor-not-allowed",
          // Variant styles
          variant === "primary" &&
            "bg-[#D91656] hover:bg-[#D91656]/90 text-white shadow-retro",
          variant === "secondary" &&
            "bg-white hover:bg-white/90 text-[#03051E] shadow-retro border-2 border-[#03051E]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
