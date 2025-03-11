'use client';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';
import { signinWithGoogle } from '@/actions/auth';
import { Button } from '@/components/ui/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const SignUpButton = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant="primary"
      className={cn(className)}
      {...props}
      onClick={signinWithGoogle}
    >
      {children}
    </Button>
  );
};

export const LoginButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <Button variant="secondary" {...props}>
      {children}
    </Button>
  );
};
