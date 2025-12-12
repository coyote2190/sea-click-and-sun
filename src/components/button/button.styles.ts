import styled, { css } from 'styled-components';

import { ButtonVariant } from './button.types';

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'contained':
      return css`
        background-color: #000;
        color: #fff;
        border: none;

        &:hover:not(:disabled) {
          background-color: #000;
          opacity: 0.9;
        }

        &:active:not(:disabled) {
          opacity: 0.8;
        }
      `;

    case 'outlined':
      return css`
        background-color: transparent;
        color: #000;
        border: 2px solid #000;

        &:hover:not(:disabled) {
          background-color: #000;
          color: #fff;
        }

        &:active:not(:disabled) {
          opacity: 0.9;
        }
      `;

    case 'text':
      return css`
        background-color: transparent;
        color: #000;
        border: none;

        &:hover:not(:disabled) {
          background-color: rgba(0, 0, 0, 0.04);
        }

        &:active:not(:disabled) {
          background-color: rgba(0, 0, 0, 0.08);
        }
      `;

    default:
      return '';
  }
};

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: ${({ theme }) => theme.fonts.family.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 300;
  ${({ $variant }) => getVariantStyles($variant)}
  height: 55px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.fonts.size.sm};
    padding: 0.625rem 1.25rem;
  }
`;

export const StyledButtonContent = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const StyledStartIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }

  ${StyledButton}:hover:not(:disabled) & svg path {
    fill: #fff;
  }
`;

export const StyledEndIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }

  ${StyledButton}:hover:not(:disabled) & svg path {
    fill: #fff;
  }
`;
