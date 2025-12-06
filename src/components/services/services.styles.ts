import styled from 'styled-components';

export const StyledServicesContainer = styled.section`
  position: relative;
  padding: 50px 0;
`;

export const StyledServicesHeader = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size['5xl']};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  padding: 0 80px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    font-size: ${({ theme }) => theme.fonts.size['4xl']};
    padding: 0 60px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size['3xl']};
    padding: 0 40px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size['2xl']};
    padding: 0 20px;
  }
`;

export const StyledServicesIntro = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.xl};
  color: ${({ theme }) => theme.colors.secondary.main};
  margin-bottom: 4rem;
  padding: 0 80px;
  max-width: 800px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 0 60px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size.lg};
    padding: 0 40px;
    margin-bottom: 3rem;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size.base};
    padding: 0 20px;
    margin-bottom: 2rem;
  }
`;

export const StyledServiceCard = styled.div<{ $bgColor: string }>`
  position: sticky;
  top: 50px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 100px;
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 40px;
  color: ${({ $bgColor }) => ($bgColor === '#1a1a1a' ? '#ffffff' : $bgColor === '#9b8dd6' ? '#ffffff' : '#ffffff')};
  margin-top: -40px;

  &:first-child {
    margin-top: 0;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 60px 40px;
    border-radius: 30px 30px 0 0;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 40px 20px;
    border-radius: 20px 20px 0 0;
  }
`;

export const StyledServiceNumber = styled.div`
  position: absolute;
  top: 80px;
  right: 100px;
  font-size: ${({ theme }) => theme.fonts.size['7xl']};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  opacity: 0.3;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size['5xl']};
    top: 60px;
    right: 40px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size['4xl']};
    top: 40px;
    right: 20px;
  }
`;

export const StyledServiceTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size['6xl']};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.1;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size['4xl']};
    margin-bottom: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size['3xl']};
    margin-bottom: 1rem;
  }
`;

export const StyledServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.xl};
  line-height: ${({ theme }) => theme.fonts.lineHeight.relaxed};
  max-width: 600px;
  opacity: 0.9;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size.base};
  }
`;
