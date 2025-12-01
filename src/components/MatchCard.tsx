import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { Calendar, MapPin } from 'lucide-react';

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

export const MatchCard = forwardRef<HTMLDivElement, MatchCardProps>(
  (
    {
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      date,
      time,
      location,
      status = 'upcoming',
      variant = 'primary',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-primary rounded-lg shadow-md p-4 md:p-6 transition-shadow duration-200 hover:shadow-lg',
          className
        )}
        {...props}
      >
        {status === 'live' && (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-red-500 uppercase">Live</span>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 text-center">
            <h3 className="text-base md:text-lg font-bold text-white mb-2">{homeTeam}</h3>
            {status !== 'upcoming' && homeScore !== undefined && (
              <p className={clsx(
                'text-3xl md:text-4xl font-bold',
                variant === 'primary' ? 'text-secondary' : 'text-white'
              )}>
                {homeScore}
              </p>
            )}
          </div>

          <div className="px-4 md:px-6">
            <span className="text-xl md:text-2xl font-bold text-secondary">VS</span>
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-base md:text-lg font-bold text-white mb-2">{awayTeam}</h3>
            {status !== 'upcoming' && awayScore !== undefined && (
              <p className={clsx(
                'text-3xl md:text-4xl font-bold',
                variant === 'primary' ? 'text-secondary' : 'text-white'
              )}>
                {awayScore}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t border-secondary/30">
          <div className="flex items-center gap-2 text-sm md:text-base text-white/80">
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            <span>{date} at {time}</span>
          </div>
          {location && (
            <div className="flex items-center gap-2 text-sm md:text-base text-white/80">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span>{location}</span>
            </div>
          )}
        </div>

        {status === 'finished' && (
          <div className="mt-4 text-center">
            <span className="text-xs md:text-sm font-medium text-secondary uppercase">Final</span>
          </div>
        )}
      </div>
    );
  }
);

MatchCard.displayName = 'MatchCard';
