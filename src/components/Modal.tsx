import { HTMLAttributes, ReactNode, forwardRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { X } from 'lucide-react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  footer?: ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, footer, className, children, ...props }, ref) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              ref={ref}
              className={clsx(
                'relative bg-primary rounded-lg shadow-xl',
                'w-full max-w-md md:max-w-lg',
                'transform transition-all',
                className
              )}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? 'modal-title' : undefined}
              {...props}
            >
              {title && (
                <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-secondary">
                  <h2
                    id="modal-title"
                    className="text-lg md:text-xl font-bold text-secondary"
                  >
                    {title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-1 rounded-md text-white hover:text-secondary hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              )}

              <div className="px-4 py-4 md:px-6 md:py-6 text-white">{children}</div>

              {footer && (
                <div className="px-4 py-3 md:px-6 md:py-4 border-t border-secondary bg-primary/70 rounded-b-lg">
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);

Modal.displayName = 'Modal';
