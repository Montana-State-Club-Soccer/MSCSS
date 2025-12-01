import { HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'elevated' | 'outlined' | 'filled';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverable?: boolean;
    colorScheme?: 'blue' | 'gold';
}
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
}
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
}
export declare const Card: import('react').ForwardRefExoticComponent<CardProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const CardHeader: import('react').ForwardRefExoticComponent<CardHeaderProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const CardBody: import('react').ForwardRefExoticComponent<CardBodyProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const CardFooter: import('react').ForwardRefExoticComponent<CardFooterProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map