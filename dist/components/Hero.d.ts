import { HTMLAttributes, ReactNode } from 'react';
export interface HeroProps extends HTMLAttributes<HTMLElement> {
    title: string;
    subtitle?: string;
    image?: string;
    overlay?: boolean;
    height?: 'sm' | 'md' | 'lg' | 'full';
    alignment?: 'left' | 'center' | 'right';
    actions?: ReactNode;
}
export declare const Hero: import('react').ForwardRefExoticComponent<HeroProps & import('react').RefAttributes<HTMLElement>>;
//# sourceMappingURL=Hero.d.ts.map