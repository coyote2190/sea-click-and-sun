'use client';

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
} from './home.styles';

export default function Home() {
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
