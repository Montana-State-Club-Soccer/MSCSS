import { HTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';

export interface NavProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  sticky?: boolean;
}

export interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  active?: boolean;
}

export interface MobileMenuProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

export const Nav = forwardRef<HTMLElement, NavProps>(
  ({ logo, sticky = false, className, children, ...props }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <>
        <nav
          ref={ref}
          className={clsx(
            'bg-white shadow-md z-40',
            sticky && 'sticky top-0',
            className
          )}
          {...props}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {logo && <div className="flex-shrink-0">{logo}</div>}

              <div className="hidden md:flex md:items-center md:space-x-8">
                {children}
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {children}
        </MobileMenu>
      </>
    );
  }
);

Nav.displayName = 'Nav';

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ href, active = false, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={clsx(
          'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
          'hover:bg-gray-100 hover:text-primary',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          active ? 'text-primary bg-gray-50' : 'text-gray-700',
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavItem.displayName = 'NavItem';

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, onClose, className, children, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />

        <div
          ref={ref}
          className={clsx(
            'fixed top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden',
            'max-h-[calc(100vh-4rem)] overflow-y-auto',
            className
          )}
          {...props}
        >
          <div className="px-4 py-4 space-y-2">
            {children}
          </div>
        </div>
      </>
    );
  }
);

MobileMenu.displayName = 'MobileMenu';
