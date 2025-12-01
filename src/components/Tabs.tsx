import { HTMLAttributes, forwardRef, useState, createContext, useContext } from 'react';
import { clsx } from 'clsx';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, value: controlledValue, onValueChange, className, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleValueChange = (newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <div ref={ref} className={clsx('w-full', className)} {...props}>
        <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
          {children}
        </TabsContext.Provider>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

const TabsContext = createContext<{
  value: string;
  onValueChange: (value: string) => void;
}>({
  value: '',
  onValueChange: () => {},
});

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="tablist"
        className={clsx(
          'inline-flex items-center gap-1 p-1 bg-primary border border-secondary rounded-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsList.displayName = 'TabsList';

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, className, children, ...props }, ref) => {
    const context = useContext(TabsContext);
    const isActive = context.value === value;
    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        onClick={() => context.onValueChange(value)}
        className={clsx(
          'px-3 py-2 text-sm md:px-4 md:text-base font-medium rounded-md transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2',
          isActive
            ? 'bg-secondary text-primary shadow-sm'
            : 'text-white hover:text-secondary hover:bg-white/10',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const context = useContext(TabsContext);

    if (context.value !== value) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={clsx('mt-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = 'TabsContent';
