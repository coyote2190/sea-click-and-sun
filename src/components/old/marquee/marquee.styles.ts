import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const StyledMarqueeContainer = styled.div`
  overflow: hidden;
  /* background-color: ${({ theme }) => theme.colors.neutral.gray[100]}; */
  padding: 2rem 0;
  white-space: nowrap;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    /* background: linear-gradient(to right, ${({ theme }) => theme.colors.neutral.gray[100]}, transparent); */
  }

  &::after {
    right: 0;
    /* background: linear-gradient(to left, ${({ theme }) => theme.colors.neutral.gray[100]}, transparent); */
  }
`;

export const StyledMarqueeContent = styled.div`
  display: inline-flex;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const StyledMarqueeItem = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 2rem;

  .separator {
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
`;
