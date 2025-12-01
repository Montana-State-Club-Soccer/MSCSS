import { HTMLAttributes, ReactNode, forwardRef, useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  align?: 'left' | 'right';
}

export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, align = 'left', className, children, ...props }, _ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div ref={dropdownRef} className={clsx('relative inline-block', className)} {...props}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {trigger}
          <ChevronDown
            className={clsx('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180')}
          />
        </button>

        {isOpen && (
          <div
            className={clsx(
              'absolute z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5',
              align === 'left' ? 'left-0' : 'right-0'
            )}
          >
            <div className="py-1" role="menu">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ disabled = false, className, children, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900',
          'focus:outline-none focus:bg-gray-100 focus:text-gray-900',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        role="menuitem"
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';
