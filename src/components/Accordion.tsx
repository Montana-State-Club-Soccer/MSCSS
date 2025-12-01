import { HTMLAttributes, forwardRef, useState, createContext, useContext } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (value: string) => {
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    };

    return (
      <div ref={ref} className={clsx('space-y-2', className)} {...props}>
        <AccordionContext.Provider value={{ openItems, toggleItem, variant }}>
          {children}
        </AccordionContext.Provider>
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

const AccordionContext = createContext<{
  openItems: string[];
  toggleItem: (value: string) => void;
  variant: 'primary' | 'secondary';
}>({
  openItems: [],
  toggleItem: () => {},
  variant: 'primary',
});

const AccordionItemContext = createContext<{ value: string; isOpen: boolean }>({
  value: '',
  isOpen: false,
});

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const context = useContext(AccordionContext);
    const isOpen = context.openItems.includes(value);

    return (
      <div
        ref={ref}
        className={clsx('border-2 border-secondary rounded-lg bg-primary', className)}
        {...props}
      >
        <AccordionItemContext.Provider value={{ value, isOpen }}>
          {children}
        </AccordionItemContext.Provider>
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const accordionContext = useContext(AccordionContext);
    const itemContext = useContext(AccordionItemContext);

    return (
      <button
        ref={ref}
        onClick={() => accordionContext.toggleItem(itemContext.value)}
        className={clsx(
          'flex w-full items-center justify-between px-4 py-3 md:px-5 md:py-4',
          'text-left text-sm md:text-base font-medium',
          'text-white hover:text-secondary transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-inset',
          'rounded-t-lg',
          itemContext.isOpen ? '' : 'rounded-b-lg',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={clsx(
            'w-5 h-5 md:w-6 md:h-6 transition-transform duration-200',
            itemContext.isOpen && 'rotate-180'
          )}
        />
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const itemContext = useContext(AccordionItemContext);

    if (!itemContext.isOpen) return null;

    return (
      <div
        ref={ref}
        className={clsx(
          'px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white/90 border-t border-secondary/30',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';
