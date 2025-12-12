'use client';

import { FC } from 'react';

import Container from '../container';

import { StyledContent, StyledSubtitle, StyledTitle, StyledWhoAreWeContainer } from './whoAreWe.styles';
import { WhoAreWeProps } from './whoAreWe.types';

const WhoAreWe: FC<WhoAreWeProps> = ({ dataTestId }) => {
  return (
    <StyledWhoAreWeContainer data-testid={dataTestId}>
      <Container>
        <StyledContent>
          <StyledSubtitle>Qui sommes-nous</StyledSubtitle>
          <StyledTitle>
            Nous sommes un duo créatif – graphiste & développeur web – qui imagine, conçoit et réalise des supports
            print & digitaux uniques, esthétiques et performants.
          </StyledTitle>
        </StyledContent>
      </Container>
    </StyledWhoAreWeContainer>
  );
};

export default WhoAreWe;
