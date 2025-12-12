import { FC } from 'react';

import { StyledIconButtonContainer } from './iconButton.styles';
import { IconButtonProps } from './iconButton.types';

const IconButton: FC<IconButtonProps> = ({ dataTestId, icon, onClick }) => {
  return (
    <StyledIconButtonContainer data-testid={dataTestId} onClick={onClick}>
      {icon}
    </StyledIconButtonContainer>
  );
};

export default IconButton;
