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
        "w-full bg-[#D91656] hover:bg-[#D91656]/90 text-white py-3 rounded shadow-retro font-bold disabled:opacity-50 disabled:cursor-not-allowed",
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
        "w-full bg-white hover:bg-white/90 text-[#03051E] py-3 rounded shadow-retro font-bold disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#03051E]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
