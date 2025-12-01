import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  copyright?: string;
  columns?: ReactNode[];
}

export interface FooterSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export interface FooterLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ logo, copyright, columns, className, children, ...props }, ref) => {

    return (
      <footer
        ref={ref}
        className={clsx('bg-primary text-white border-t-2 border-secondary', className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {logo && (
              <div className="col-span-1">
                {logo}
              </div>
            )}

            {columns?.map((column, index) => (
              <div key={index} className="col-span-1">
                {column}
              </div>
            ))}

            {children}
          </div>

          {copyright && (
            <div className="pt-6 md:pt-8 border-t border-secondary/30 text-center text-sm md:text-base text-white/80">
              {copyright}
            </div>
          )}
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export const FooterSection = forwardRef<HTMLDivElement, FooterSectionProps>(
  ({ title, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('', className)} {...props}>
        {title && (
          <h3 className="text-secondary font-semibold text-base md:text-lg mb-3 md:mb-4">{title}</h3>
        )}
        <ul className="space-y-2">
          {children}
        </ul>
      </div>
    );
  }
);

FooterSection.displayName = 'FooterSection';

export const FooterLink = forwardRef<HTMLAnchorElement, FooterLinkProps>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          href={href}
          className={clsx(
            'text-sm md:text-base text-white/80 hover:text-secondary transition-colors duration-200',
            className
          )}
          {...props}
        >
          {children}
        </a>
      </li>
    );
  }
);

FooterLink.displayName = 'FooterLink';
