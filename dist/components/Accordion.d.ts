import { HTMLAttributes } from 'react';
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary';
}
export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
}
export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
}
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
}
export declare const Accordion: import('react').ForwardRefExoticComponent<AccordionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const AccordionItem: import('react').ForwardRefExoticComponent<AccordionItemProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const AccordionTrigger: import('react').ForwardRefExoticComponent<AccordionTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const AccordionContent: import('react').ForwardRefExoticComponent<AccordionContentProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Accordion.d.ts.map