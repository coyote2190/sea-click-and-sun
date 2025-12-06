'use client';

import { FC } from 'react';

import { StyledMarqueeContainer, StyledMarqueeContent, StyledMarqueeItem } from './marquee.styles';
import { MarqueeProps } from './marquee.types';

const Marquee: FC<MarqueeProps> = ({ dataTestId }) => {
  const items = ['Design', 'Développement', 'Identité graphique', 'Logo', 'Support Print', 'UX/UI Design', 'SEO'];

  return (
    <StyledMarqueeContainer data-testid={dataTestId}>
      <StyledMarqueeContent>
        {items.map((item, index) => (
          <StyledMarqueeItem key={index}>
            {item}
            <span className="separator">✦</span>
          </StyledMarqueeItem>
        ))}
        {items.map((item, index) => (
          <StyledMarqueeItem key={`duplicate-${index}`}>
            {item}
            <span className="separator">✦</span>
          </StyledMarqueeItem>
        ))}
      </StyledMarqueeContent>
    </StyledMarqueeContainer>
  );
};

export default Marquee;
