import type { FC } from 'react';

import { StyledContainer } from './container.styles';
import type { ContainerProps } from './container.types';

export const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

export default Container;
