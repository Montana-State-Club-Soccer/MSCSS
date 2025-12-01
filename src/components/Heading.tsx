import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'primary' | 'secondary';
}

const defaultSizeClasses = {
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  h4: 'text-lg sm:text-xl md:text-2xl',
  h5: 'text-base sm:text-lg md:text-xl',
  h6: 'text-sm sm:text-base md:text-lg',
};

const variantClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = 'h2', variant = 'primary', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          'font-bold',
          defaultSizeClasses[Component],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';
