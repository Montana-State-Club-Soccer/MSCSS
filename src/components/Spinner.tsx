import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  label?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ variant = 'primary', label, className, ...props }, ref) => {
    const borderColor = variant === 'primary' ? 'border-primary' : 'border-secondary';

    return (
      <div ref={ref} className={clsx('inline-flex flex-col items-center gap-2', className)} {...props}>
        <div
          className={clsx(
            'w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-gray-200',
            'border-t-4',
            borderColor,
            'animate-spin'
          )}
          role="status"
          aria-label={label || 'Loading'}
        />
        {label && (
          <span className="text-sm md:text-base text-gray-600">{label}</span>
        )}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
