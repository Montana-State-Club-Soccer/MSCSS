import { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

export interface IconProps {
  icon: LucideIcon;
  className?: string;
}

export const Icon = ({ icon: IconComponent, className }: IconProps) => {
  return <IconComponent className={clsx('w-5 h-5 md:w-6 md:h-6', className)} />;
};
