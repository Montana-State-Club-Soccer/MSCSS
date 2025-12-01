import { InputHTMLAttributes } from 'react';
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
}
export declare const Radio: import('react').ForwardRefExoticComponent<RadioProps & import('react').RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Radio.d.ts.map