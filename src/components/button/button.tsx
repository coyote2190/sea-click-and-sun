import { FC } from 'react';

import { StyledButtonContainer } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ dataTestId }) => {
console.log('test');

return (
  <StyledButtonContainer data-testid={dataTestId}>Button</StyledButtonContainer>
)};

export default Button;
