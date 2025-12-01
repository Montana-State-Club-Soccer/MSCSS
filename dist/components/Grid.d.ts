import { HTMLAttributes } from 'react';
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    cols?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
}
export declare const Grid: import('react').ForwardRefExoticComponent<GridProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Grid.d.ts.map