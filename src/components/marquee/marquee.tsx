'use client';

import { FC } from 'react';

import { MarqueeProps } from './marquee.types';

const Marquee: FC<MarqueeProps> = ({
  backgroundColor = '#d4a574',
  dataTestId,
  speed = 50,
  text,
  textColor = '#2d1810'
}) => {
  const items = text.split(' * ');

  return (
    <section className="overflow-hidden py-6" data-testid={dataTestId} style={{ backgroundColor }}>
      <div className="marquee-container">
        <div className="marquee-content" style={{ animationDuration: `${speed}s` }}>
          {[...Array(3)].map((_, groupIndex) => (
            <div className="marquee-group" key={groupIndex}>
              {items.map((item, index) => (
                <span className="marquee-item" key={`${groupIndex}-${index}`} style={{ color: textColor }}>
                  {item}
                  <span className="mx-6 text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-content {
          display: flex;
          animation: scroll linear infinite;
        }

        .marquee-group {
          display: flex;
          flex-shrink: 0;
        }

        .marquee-item {
          font-size: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          font-family: var(--font-bricolage);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 768px) {
          .marquee-item {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Marquee;
