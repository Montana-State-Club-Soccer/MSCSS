import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { User } from 'lucide-react';

export interface PlayerCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  position: string;
  number: number;
  image?: string;
  stats?: { label: string; value: string | number }[];
  variant?: 'primary' | 'secondary';
}

export const PlayerCard = forwardRef<HTMLDivElement, PlayerCardProps>(
  ({ name, position, number, image, stats, variant = 'primary', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-primary rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1',
          className
        )}
        {...props}
      >
        <div className={clsx(
          'relative h-48 md:h-64 flex items-center justify-center',
          variant === 'primary' ? 'bg-primary' : 'bg-secondary'
        )}>
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User className="w-20 h-20 md:w-24 md:h-24 text-white opacity-50" />
          )}
          <div className={clsx(
            'absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl',
            variant === 'primary' ? 'bg-secondary text-black' : 'bg-primary text-white'
          )}>
            #{number}
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-lg md:text-xl font-bold text-secondary mb-1">{name}</h3>
          <p className="text-sm md:text-base text-white/80 mb-4">{position}</p>

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-secondary/30">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg md:text-xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-xs md:text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

PlayerCard.displayName = 'PlayerCard';
