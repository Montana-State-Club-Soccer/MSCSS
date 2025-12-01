import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const variantClasses = {
  primary: 'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
  secondary: 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-black',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      icon: Icon,
      iconPosition = 'left',
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors duration-200',
          'px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base lg:px-6 lg:py-3 lg:text-lg',
          variantClasses[variant],
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
