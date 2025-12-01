import { HTMLAttributes } from 'react';
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary';
    type?: 'info' | 'success' | 'warning' | 'error';
    onClose?: () => void;
}
export declare const Alert: import('react').ForwardRefExoticComponent<AlertProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Alert.d.ts.map