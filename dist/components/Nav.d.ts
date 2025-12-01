import { HTMLAttributes, ReactNode } from 'react';
export interface NavProps extends HTMLAttributes<HTMLElement> {
    logo?: ReactNode;
    sticky?: boolean;
}
export interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
    active?: boolean;
}
export interface MobileMenuProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
}
export declare const Nav: import('react').ForwardRefExoticComponent<NavProps & import('react').RefAttributes<HTMLElement>>;
export declare const NavItem: import('react').ForwardRefExoticComponent<NavItemProps & import('react').RefAttributes<HTMLAnchorElement>>;
export declare const MobileMenu: import('react').ForwardRefExoticComponent<MobileMenuProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Nav.d.ts.map