import { forwardRef, HTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navItems?: { label: string; href: string }[];
  actions?: React.ReactNode;
  sticky?: boolean;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ logo, navItems = [], actions, sticky = false, className, ...props }, ref) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <header
        ref={ref}
        className={clsx(
          'w-full bg-primary border-b-2 border-secondary shadow-md z-50',
          sticky && 'sticky top-0',
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              {logo && (
                <div className="text-secondary font-bold text-lg md:text-xl lg:text-2xl">
                  {logo}
                </div>
              )}
            </div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-secondary transition-colors duration-200 text-sm lg:text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              {actions}
            </div>

            <button
              className="md:hidden text-white hover:text-secondary transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-secondary/30">
              <nav className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white hover:text-secondary transition-colors duration-200 py-2 text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              {actions && (
                <div className="mt-4 pt-4 border-t border-secondary/30">
                  {actions}
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    );
  }
);

Header.displayName = 'Header';
