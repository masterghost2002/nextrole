import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'w-full rounded py-3 font-bold disabled:cursor-not-allowed disabled:opacity-50',
          // Variant styles
          variant === 'primary' &&
            'bg-[#D91656] text-white shadow-retro hover:bg-[#D91656]/90',
          variant === 'secondary' &&
            'border-2 border-[#03051E] bg-white text-[#03051E] shadow-retro hover:bg-white/90',
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
Button.displayName = 'Button';

export { Button };
