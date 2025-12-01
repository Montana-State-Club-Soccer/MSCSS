import { HTMLAttributes, ReactNode } from 'react';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    footer?: ReactNode;
}
export declare const Modal: import('react').ForwardRefExoticComponent<ModalProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Modal.d.ts.map