import styled from 'styled-components';

export const StyledIconButtonContainer = styled.button`
  height: 55px;
  width: 55px;
  border-radius: 30px;
  font-size: 20px;
  background-color: #000;
  border: none;
  display: flex;
  place-content: center;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: #fff;
    }
  }

  &:hover:not(:disabled) {
    background-color: #333;
    transform: scale(1.05);
  }
`;
