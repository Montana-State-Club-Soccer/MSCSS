import { HTMLAttributes } from 'react';
export interface PlayerCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    position: string;
    number: number;
    image?: string;
    stats?: {
        label: string;
        value: string | number;
    }[];
    variant?: 'primary' | 'secondary';
}
export declare const PlayerCard: import('react').ForwardRefExoticComponent<PlayerCardProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=PlayerCard.d.ts.map