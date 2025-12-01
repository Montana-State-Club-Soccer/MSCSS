import { HTMLAttributes, ReactNode } from 'react';
export interface FooterProps extends HTMLAttributes<HTMLElement> {
    logo?: ReactNode;
    copyright?: string;
    columns?: ReactNode[];
}
export interface FooterSectionProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}
export interface FooterLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
}
export declare const Footer: import('react').ForwardRefExoticComponent<FooterProps & import('react').RefAttributes<HTMLElement>>;
export declare const FooterSection: import('react').ForwardRefExoticComponent<FooterSectionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const FooterLink: import('react').ForwardRefExoticComponent<FooterLinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Footer.d.ts.map