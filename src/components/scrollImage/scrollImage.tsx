'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { ScrollImageProps } from './scrollImage.types';

const ScrollImage: FC<ScrollImageProps> = ({ alt = 'Scroll image', dataTestId, imageUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.5);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isComplete) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Stop animating once the element is fully visible on screen
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        setScale(1);
        setIsComplete(true);
        return;
      }

      // Only animate while element is entering the viewport
      if (rect.bottom > 0 && rect.top < windowHeight) {
        // Calculate progress: 0 when just entering, 1 when fully visible
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const totalHeight = rect.height;
        const progress = visibleHeight / totalHeight;

        // Scale from 1.5 to 1 based on how much is visible
        const newScale = 1.5 - progress * 0.5;
        setScale(Math.max(1, newScale));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isComplete]);

  return (
    <section
      className="relative w-full max-h-[600px] h-[600px] overflow-hidden bg-black"
      data-testid={dataTestId}
      ref={containerRef}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          fill
          priority
          alt={alt}
          className="object-cover transition-transform duration-100"
          src={imageUrl}
          style={{
            rotate: 'none',
            scale: 'none',
            transform: `scale(${scale})`,
            translate: 'none',
            willChange: 'transform'
          }}
        />
      </div>
    </section>
  );
};

export default ScrollImage;
