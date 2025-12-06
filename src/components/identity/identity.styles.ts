import styled from 'styled-components';

export const StyledIdentityContainer = styled.section`
  overflow: hidden;
  > div {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 100px;
    padding: 120px 80px;
    background-color: ${({ theme }) => theme.colors.neutral.gray[50]};
    align-items: start;

    ${({ theme }) => theme.breakpoints.down('lg')} {
      gap: 60px;
      padding: 80px 60px;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 60px 40px;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      padding: 40px 20px;
    }
  }
`;

export const StyledIdentityTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size['7xl']};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  position: sticky;
  top: 120px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    font-size: ${({ theme }) => theme.fonts.size['6xl']};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size['5xl']};
    position: static;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size['4xl']};
  }
`;

export const StyledIdentityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledIdentityIntro = styled.p`
  font-size: ${({ theme }) => theme.fonts.size['2xl']};
  line-height: ${({ theme }) => theme.fonts.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }
`;

export const StyledIdentityDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.lg};
  line-height: ${({ theme }) => theme.fonts.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.secondary.main};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size.base};
  }
`;

export const StyledIdentityButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin-top: 1rem;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral.white};

    svg {
      transform: translate(4px, -4px);
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size.base};
    padding: 0.75rem 1.5rem;
  }
`;
