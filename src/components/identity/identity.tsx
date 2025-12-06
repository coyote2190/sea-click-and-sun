'use client';

import { FC } from 'react';

import Container from '../container';

import {
  StyledIdentityButton,
  StyledIdentityContainer,
  StyledIdentityContent,
  StyledIdentityDescription,
  StyledIdentityIntro,
  StyledIdentityTitle
} from './identity.styles';
import { IdentityProps } from './identity.types';

const Identity: FC<IdentityProps> = ({ dataTestId }) => {
  return (
    <StyledIdentityContainer data-testid={dataTestId}>
      <Container>
        <StyledIdentityTitle>Company</StyledIdentityTitle>
        <StyledIdentityContent>
          <StyledIdentityIntro>
            We are a creative digital agency specializing in innovative design and cutting-edge development. We help
            businesses stand out and thrive in the modern landscape.
          </StyledIdentityIntro>
          <StyledIdentityDescription>
            From pixel-perfect designs to flawless code, every aspect of our projects is crafted with care to ensure the
            highest standards of quality. We are passionate about integrating the latest technologies and trends,
            including interactive animations and mobile-first strategies.
          </StyledIdentityDescription>
          <StyledIdentityButton>
            More About Us
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </StyledIdentityButton>
        </StyledIdentityContent>
      </Container>
    </StyledIdentityContainer>
  );
};

export default Identity;
