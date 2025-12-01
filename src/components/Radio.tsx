import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, className, disabled, id, ...props }, ref) => {
    const radioId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5 md:h-6">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            disabled={disabled}
            className={clsx(
              'w-4 h-4 md:w-5 md:h-5 border-secondary transition-colors duration-200',
              'text-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-red-500',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${radioId}-error` : undefined}
            {...props}
          />
        </div>
        
        {label && (
          <div className="ml-3">
            <label
              htmlFor={radioId}
              className={clsx(
                'text-sm md:text-base text-white',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              {label}
            </label>
            {error && (
              <p id={`${radioId}-error`} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
