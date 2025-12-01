import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: 'primary' | 'secondary';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ variant = 'primary', className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={clsx(
          'border-0 h-px',
          variant === 'primary' ? 'bg-gray-200' : 'bg-secondary',
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
