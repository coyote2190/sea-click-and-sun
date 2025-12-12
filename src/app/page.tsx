'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import { Header, Idendity, WhoAreWe } from '@/components';
import { useTheme } from '@/context/ThemeContext';

import {
  Badge,
  BadgeDot,
  Card,
  Description,
  Footer,
  PageContainer,
  Pill,
  PillRow,
  Title,
  TitleSpan
} from './home.inprogress.styles';
import { HomeContainer } from './home.styles';

function HomeContent() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';
  const { toggleTheme } = useTheme();

  // Mode preview : affiche la nouvelle version
  if (isPreview) {
    return (
      <HomeContainer>
        <Header isDarkMode={false} toggleTheme={toggleTheme} />
        <WhoAreWe />
        <Idendity />
      </HomeContainer>
    );
  }

  // Mode public : affiche la page "Coming Soon"
  return (
    <PageContainer>
      <Card aria-labelledby="title">
        <Badge>
          <BadgeDot />
          Site en cours de préparation
        </Badge>

        <Title id="title">
          <TitleSpan>Sea Click and Sun</TitleSpan>
          Bientôt un nouveau site
        </Title>

        <Description>
          Nous sommes un duo créatif – graphiste et développeur – qui imagine, conçoit et réalise des expériences en
          ligne uniques, esthétiques et performantes.
        </Description>

        <PillRow>
          <Pill $accent>Identité graphique</Pill>
          <Pill>Logo</Pill>
          <Pill>Support Print</Pill>
          <Pill>Développement Web</Pill>
          <Pill>UX/UI Design</Pill>
          <Pill>Seo</Pill>
        </PillRow>

        <Footer>
          <span>
            Besoin d&apos;échanger sur un projet ?<br />
            <strong>Le site arrive très bientôt.</strong>
          </span>
        </Footer>
      </Card>
    </PageContainer>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<PageContainer />}>
      <HomeContent />
    </Suspense>
  );
}
