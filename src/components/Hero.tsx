import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'full';
  alignment?: 'left' | 'center' | 'right';
  actions?: ReactNode;
}

const heightClasses = {
  sm: 'h-64',
  md: 'h-96',
  lg: 'h-[32rem]',
  full: 'h-screen',
};

const alignmentClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
};

export const Hero = forwardRef<HTMLElement, HeroProps>(
  (
    {
      title,
      subtitle,
      image,
      overlay = true,
      height = 'lg',
      alignment = 'center',
      actions,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={clsx('relative flex items-center justify-center', heightClasses[height], className)}
        {...props}
      >
        {image && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            {overlay && <div className="absolute inset-0 bg-black/50" />}
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={clsx('flex flex-col gap-6', alignmentClasses[alignment])}>
            <h1
              className={clsx(
                'text-4xl sm:text-5xl md:text-6xl font-bold',
                image ? 'text-white' : 'text-gray-900'
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={clsx(
                  'text-lg sm:text-xl md:text-2xl max-w-3xl',
                  image ? 'text-gray-100' : 'text-gray-600'
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && <div className="flex gap-4 mt-4">{actions}</div>}
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';
