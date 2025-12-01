import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div';
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      as: Component = 'p',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx('text-sm md:text-base text-gray-900', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
