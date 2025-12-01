import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  colorScheme?: 'blue' | 'gold';
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const variantClasses = {
  blue: {
    elevated: 'bg-primary shadow-lg',
    outlined: 'bg-primary border-2 border-secondary',
    filled: 'bg-primary/90',
  },
  gold: {
    elevated: 'bg-secondary shadow-lg',
    outlined: 'bg-secondary border-2 border-primary',
    filled: 'bg-secondary/90',
  },
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', padding = 'md', hoverable = false, colorScheme = 'blue', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-lg transition-all duration-200',
          variantClasses[colorScheme][variant],
          paddingClasses[padding],
          hoverable && 'hover:shadow-xl hover:scale-[1.02] cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('mb-4', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx('', className)} {...props}>
      {children}
    </div>
  );
});

CardBody.displayName = 'CardBody';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('mt-4 pt-4 border-t border-secondary/30', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
