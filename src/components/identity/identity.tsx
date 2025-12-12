'use client';

import { FC } from 'react';
import Image from 'next/image';

import Button from '../button';
import Container from '../container';

import {
  StyledIdentityContainer,
  StyledIdentityContent,
  StyledIdentityIntro,
  StyledIdentityTitle
} from './identity.styles';
import { IdentityProps } from './identity.types';

const Identity: FC<IdentityProps> = ({ dataTestId }) => {
  return (
    <StyledIdentityContainer data-testid={dataTestId}>
      <Container>
        <StyledIdentityTitle>
          <h2>Notre identité.</h2>
          <Image alt="form" height={150} src="/form.png" width={150} />
        </StyledIdentityTitle>

        <StyledIdentityContent>
          <StyledIdentityIntro>
            Deux univers complémentaires, une seule vision. <br />
            <br />
            La graphiste façonne des identités visuelles mémorables, avec une sensibilité artistique. <br />
            <br />
            Le développeur web transforme les idées en sites fluides, rapides et durables, optimisés pour tous les
            écrans.
          </StyledIdentityIntro>

          <Button variant="outlined">More About Us</Button>
        </StyledIdentityContent>
      </Container>
    </StyledIdentityContainer>
  );
};

export default Identity;
