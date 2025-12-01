import { SelectHTMLAttributes } from 'react';
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
}
export declare const Select: import('react').ForwardRefExoticComponent<SelectProps & import('react').RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=Select.d.ts.map