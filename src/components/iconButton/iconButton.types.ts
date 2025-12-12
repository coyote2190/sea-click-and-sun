import { ReactNode } from 'react';

export interface IconButtonProps {
  dataTestId?: string;
  icon: ReactNode;
  onClick?: () => void;
}
