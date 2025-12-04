import { HTMLAttributes } from 'react';
export interface ImageBlockProps extends HTMLAttributes<HTMLDivElement> {
    image?: string;
    title?: string;
    description?: string;
    variant?: 'primary' | 'secondary';
    aspectRatio?: 'square' | 'wide' | 'tall';
}
export declare const ImageBlock: import('react').ForwardRefExoticComponent<ImageBlockProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ImageBlock.d.ts.map