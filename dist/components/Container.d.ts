import { HTMLAttributes } from 'react';
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: boolean;
}
export declare const Container: import('react').ForwardRefExoticComponent<ContainerProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Container.d.ts.map