import { SelectHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className,
      disabled,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className={clsx('', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs md:text-sm font-medium text-secondary mb-1"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={clsx(
              'block w-full rounded-md border transition-colors duration-200 appearance-none',
              'px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base',
              'pr-10',
              'bg-secondary text-primary',
              'focus:outline-none focus:ring-2 focus:ring-white focus:border-white',
              'disabled:bg-secondary/50 disabled:cursor-not-allowed disabled:text-primary/50',
              error
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-primary/30',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
            {...props}
          >
            {children}
          </select>
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-primary/70" />
          </div>
        </div>

        {error && (
          <p id={`${selectId}-error`} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={`${selectId}-helper`} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
