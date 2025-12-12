import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledWhoAreWeContainer = styled.section`
  min-height: 50vh;
  @supports (height: 50dvh) {
    min-height: 50dvh;
  }
  background-color: #f0f0f0;
  position: relative;
  cursor: none;
  overflow: hidden;
`;

export const StyledCursor = styled(motion.div)`
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #000;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  mix-blend-mode: difference;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 100px 0;
  max-width: 1000px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 60px 0;
    gap: 1.5rem;
  }
`;

export const StyledSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: #4169e1;
  text-transform: capitalize;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size.base};
  }
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size['5xl']};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: 1.5;
  color: #333;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    font-size: ${({ theme }) => theme.fonts.size['4xl']};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size['3xl']};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size['2xl']};
  }
`;

export const StyledLetter = styled(motion.span)<{ $isHighlight: boolean }>`
  display: inline-block;
  cursor: pointer;
  font-weight: ${({ $isHighlight, theme }) => ($isHighlight ? theme.fonts.weight.bold : theme.fonts.weight.regular)};
  color: ${({ $isHighlight }) => ($isHighlight ? '#000' : '#333')};
  transition: color 0.2s ease;
`;
