import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  type?: 'info' | 'success' | 'warning' | 'error';
  onClose?: () => void;
}

const typeConfig = {
  info: {
    icon: Info,
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    textClass: 'text-blue-800',
    iconClass: 'text-blue-400',
  },
  success: {
    icon: CheckCircle,
    bgClass: 'bg-green-50',
    borderClass: 'border-green-200',
    textClass: 'text-green-800',
    iconClass: 'text-green-400',
  },
  warning: {
    icon: AlertCircle,
    bgClass: 'bg-yellow-50',
    borderClass: 'border-yellow-200',
    textClass: 'text-yellow-800',
    iconClass: 'text-yellow-400',
  },
  error: {
    icon: XCircle,
    bgClass: 'bg-red-50',
    borderClass: 'border-red-200',
    textClass: 'text-red-800',
    iconClass: 'text-red-400',
  },
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'primary', type = 'info', onClose, className, children, ...props }, ref) => {
    const config = typeConfig[type];
    const Icon = config.icon;

    return (
      <div
        ref={ref}
        role="alert"
        className={clsx(
          'rounded-md border p-3 md:p-4',
          config.bgClass,
          config.borderClass,
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <Icon className={clsx('w-5 h-5 md:w-6 md:h-6 flex-shrink-0', config.iconClass)} />
          
          <div className={clsx('flex-1 text-sm md:text-base', config.textClass)}>
            {children}
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className={clsx(
                'flex-shrink-0 p-1 rounded-md transition-colors',
                'hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                config.textClass
              )}
              aria-label="Dismiss alert"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
