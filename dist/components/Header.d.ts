import { HTMLAttributes } from 'react';
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    navItems?: {
        label: string;
        href: string;
    }[];
    actions?: React.ReactNode;
    sticky?: boolean;
}
export declare const Header: import('react').ForwardRefExoticComponent<HeaderProps & import('react').RefAttributes<HTMLElement>>;
//# sourceMappingURL=Header.d.ts.map