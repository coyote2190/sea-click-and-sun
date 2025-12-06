'use client';

import { Hero, Identity, Services } from '@/components';

import { HomeContainer } from './home.styles';

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Identity />
      <Services />
    </HomeContainer>
  );
}
