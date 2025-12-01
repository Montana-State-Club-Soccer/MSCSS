import { HTMLAttributes, ReactNode } from 'react';
export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    trigger: ReactNode;
    align?: 'left' | 'right';
}
export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}
export declare const Dropdown: import('react').ForwardRefExoticComponent<DropdownProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownItem: import('react').ForwardRefExoticComponent<DropdownItemProps & import('react').RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Dropdown.d.ts.map