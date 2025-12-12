'use client';

import { FC } from 'react';

import { StyledButton, StyledButtonContent, StyledEndIcon, StyledStartIcon } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({
  children,
  dataTestId,
  disabled = false,
  endIcon,
  onClick,
  startIcon,
  type = 'button',
  variant = 'contained'
}) => {
  return (
    <StyledButton $variant={variant} data-testid={dataTestId} disabled={disabled} type={type} onClick={onClick}>
      {startIcon && <StyledStartIcon>{startIcon}</StyledStartIcon>}
      <StyledButtonContent>{children}</StyledButtonContent>
      {endIcon && <StyledEndIcon>{endIcon}</StyledEndIcon>}
    </StyledButton>
  );
};

export default Button;
