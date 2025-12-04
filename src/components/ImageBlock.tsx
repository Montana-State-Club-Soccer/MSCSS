import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { Image } from 'lucide-react'; 

export interface ImageBlockProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  aspectRatio?: 'square' | 'wide' | 'tall';
}

const getAspectRatioClass = (ratio: 'square' | 'wide' | 'tall') => {
  switch (ratio) {
    case 'wide':
      return 'aspect-[4/3] md:aspect-[16/9]';
    case 'tall':
      return 'aspect-[3/4] md:aspect-[9/16]';
    case 'square':
    default:
      return 'aspect-square md:aspect-[5/4]';
  }
};

export const ImageBlock = forwardRef<HTMLDivElement, ImageBlockProps>(
  (
    {
      image,
      title,
      description,
      variant = 'primary',
      aspectRatio = 'square',
      className,
      ...props
    },
    ref
  ) => {
    const hasTextContent = title || description;

    return (
      <div
        ref={ref}
        className={clsx(
          'bg-primary rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1',
          'max-w-md w-full mx-auto', 
          className
        )}
        {...props}
      >
        <div
          className={clsx(
            'relative flex items-center justify-center',
            getAspectRatioClass(aspectRatio),
            variant === 'primary' ? 'bg-primary' : 'bg-secondary'
          )}
        >
          {image ? (
            <img src={image} alt={title || 'Image Block'} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center text-white/50 p-4">
              <Image className="w-16 h-16 md:w-20 md:h-20 opacity-50 mb-2" />
              <span className="text-sm">No Image Available</span>
            </div>
          )}

        </div>

        {hasTextContent && (
          <div className="p-4 md:p-5">
            {title && (
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-1">{title}</h3>
            )}
            {description && (
              <p className="text-sm md:text-base text-white/80">{description}</p>
            )}
          </div>
        )}

      </div>
    );
  }
);

ImageBlock.displayName = 'ImageBlock';