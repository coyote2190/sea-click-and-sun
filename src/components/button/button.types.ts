import { ReactNode } from 'react';

export type ButtonVariant = 'text' | 'contained' | 'outlined';

export interface ButtonProps {
  children: ReactNode;
  dataTestId?: string;
  disabled?: boolean;
  endIcon?: ReactNode;
  onClick?: () => void;
  startIcon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
}
