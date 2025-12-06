'use client';

import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, #020617 0, #020617 40%, #000 100%);
  color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const Card = styled.main`
  position: relative;
  max-width: 520px;
  width: 100%;
  background: linear-gradient(145deg, #050816, #0b1020);
  border-radius: 1.5rem;
  padding: 2.2rem 2rem 2rem;
  box-shadow:
    0 25px 60px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(148, 163, 184, 0.12);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -40%;
    background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.17), transparent 55%);
    opacity: 0.9;
    pointer-events: none;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.4rem 1.6rem;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.5);
  position: relative;
  z-index: 1;
`;

const BadgeDot = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.9);
`;

const Title = styled.h1`
  margin-top: 1.4rem;
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: -0.04em;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const TitleSpan = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #22d3ee;
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #9ca3af;
  position: relative;
  z-index: 1;
`;

const PillRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
`;

const Pill = styled.span<{ $accent?: boolean }>`
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => ($accent ? 'rgba(34, 211, 238, 0.8)' : 'rgba(148, 163, 184, 0.4)')};
  background: ${({ $accent }) => ($accent ? 'rgba(34, 211, 238, 0.15)' : 'rgba(15, 23, 42, 0.85)')};
  color: ${({ $accent }) => ($accent ? '#22d3ee' : '#9ca3af')};
`;

const Footer = styled.div`
  margin-top: 1.7rem;
  font-size: 0.8rem;
  color: #9ca3af;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;

  strong {
    color: #e5e7eb;
    font-weight: 600;
  }
`;

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
