import styled from 'styled-components';

export const StyledIdentityContainer = styled.section`
  overflow: hidden;
  background: linear-gradient(135deg, #c2d5d9 0%, #d4c5d9 25%, #e8d4e8 50%, #f5d9e8 75%, #ffd9b3 100%);
  position: relative;
  > div {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 100px;
    padding: 120px 80px;
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

export const StyledIdentityTitle = styled.div`
  position: sticky;
  top: 120px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    position: static;
  }

  h2 {
    font-size: 6.5rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1;
    /* 
    ${({ theme }) => theme.breakpoints.down('lg')} {
      font-size: ${({ theme }) => theme.fonts.size['6xl']};
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: ${({ theme }) => theme.fonts.size['5xl']};
      position: static;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      font-size: ${({ theme }) => theme.fonts.size['4xl']};
    } */
  }

  img {
    animation: spin 6s linear infinite;
    transform-origin: 50% 50%;
    will-change: transform;
    position: absolute;
    top: 250px;
    right: 0;
    width: 100px;
    height: 100px;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      top: 250px;
      right: 40px;
      width: 150px;
      height: 150px;
    }
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
