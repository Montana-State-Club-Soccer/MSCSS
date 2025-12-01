import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, disabled, id, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5 md:h-6">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            className={clsx(
              'w-4 h-4 md:w-5 md:h-5 rounded border-secondary transition-colors duration-200',
              'text-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-red-500',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            {...props}
          />
        </div>
        
        {label && (
          <div className="ml-3">
            <label
              htmlFor={checkboxId}
              className={clsx(
                'text-sm md:text-base text-white',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              {label}
            </label>
            {error && (
              <p id={`${checkboxId}-error`} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
