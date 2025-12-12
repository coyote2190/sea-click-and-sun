import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
  > div {
    display: flex;
    place-content: space-between;
    place-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    flex-direction: column;
    gap: 25px;

    @media (width >= 940px) {
      flex-direction: row;
      gap: 0;
    }

    > div {
      display: flex;
      gap: 15px;
    }
    > img {
      height: 65px;
      width: auto;
    }
  }
`;
