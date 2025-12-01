import { HTMLAttributes } from 'react';
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'primary' | 'secondary';
}
export declare const Heading: import('react').ForwardRefExoticComponent<HeadingProps & import('react').RefAttributes<HTMLHeadingElement>>;
//# sourceMappingURL=Heading.d.ts.map