"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import { signinWithGoogle } from "@/actions/auth";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const SignUpButton = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-2 bg-[#D91656] text-white transform hover:translate-y-[-2px] transition-all border-2 border-[#03051E]",
        className
      )}
      {...props}
      onClick={signinWithGoogle}
    >
      {children}
    </button>
  );
};

export const LoginButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-2 bg-white text-black transform hover:translate-y-[-2px] transition-all border-2 border-[#03051E]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
