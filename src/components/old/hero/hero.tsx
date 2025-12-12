import { FC } from 'react';
import Image from 'next/image';

import Container from '../../container';
import Marquee from '../marquee';

import { StyledHeroContainer } from './hero.styles';
import { HeroProps } from './hero.types';

const Hero: FC<HeroProps> = ({ dataTestId }) => {
  console.log('test');

  return (
    <StyledHeroContainer data-testid={dataTestId}>
      <Container>
        <h1>
          SEA <span>CLICK</span> <span>AND SUN</span>
        </h1>

        <h2>
          Nous sommes un <span>duo créatif</span> – graphiste et développeur web – qui{' '}
          <span>imagine, conçoit et réalise</span> des expériences en ligne{' '}
          <span>uniques, esthétiques et performantes.</span>
        </h2>

        <Image alt="form" height={250} src="/form.png" width={250} />

        {/* <ul>
          <li>Identité graphique</li>
          <li>Logo</li>
          <li>Support Print</li>
          <li>Developpement Web</li>
          <li>UX/UI Design</li>
          <li>Seo</li>
        </ul> */}
      </Container>

      <Marquee />
    </StyledHeroContainer>
  );
};

export default Hero;
