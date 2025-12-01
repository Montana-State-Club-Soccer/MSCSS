import { HTMLAttributes } from 'react';
export interface MatchCardProps extends HTMLAttributes<HTMLDivElement> {
    homeTeam: string;
    awayTeam: string;
    homeScore?: number;
    awayScore?: number;
    date: string;
    time: string;
    location?: string;
    status?: 'upcoming' | 'live' | 'finished';
    variant?: 'primary' | 'secondary';
}
export declare const MatchCard: import('react').ForwardRefExoticComponent<MatchCardProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MatchCard.d.ts.map