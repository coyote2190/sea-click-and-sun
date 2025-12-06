import styled from 'styled-components';

export const StyledHeroContainer = styled.section`
  background: linear-gradient(135deg, #c2d5d9 0%, #d4c5d9 25%, #e8d4e8 50%, #f5d9e8 75%, #ffd9b3 100%);
  background-size: 400% 400%;
  animation: gradientMove 15s ease infinite;
  min-height: 100vh;
  overflow: hidden;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @supports (height: 100dvh) {
    min-height: 100dvh;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  > div {
    &:first-child {
      flex-direction: column-reverse;
      display: flex;
      min-height: calc(100vh - 188px);
      position: relative;
      @supports (height: 100dvh) {
        min-height: calc(100dvh - 188px);
      }
      place-content: space-between;
      padding: 50px 0;

      h1 {
        color: #3c3f59;
        font-size: 10rem;
        padding: 0 20px;

        > span {
          &:last-of-type {
            display: flex;
          }
        }

        ${({ theme }) => theme.breakpoints.down('md')} {
          font-size: 4.5rem;
        }
      }

      h2 {
        color: #3c3f59;
        font-size: 2rem;
        width: 55%;
        line-height: 40px;
        padding: 0 20px;

        > span {
          position: relative;
          &::after {
            height: 3px;
            background-color: #f7cecd;
            bottom: 5px;
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
          }
        }

        ${({ theme }) => theme.breakpoints.down('md')} {
          font-size: 1.25rem;
          width: 85%;
          line-height: 28px;
        }
      }

      ul {
        border-left: 2px solid #fe9a65;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        bottom: 100px;
        right: 100px;

        > li {
          color: #3c3f59;
          font-size: 20px;
        }

        ${({ theme }) => theme.breakpoints.down('md')} {
          bottom: 40px;
          right: 40px;
          gap: 10px;

          > li {
            font-size: 16px;
          }
        }
      }

      img {
        animation: spin 6s linear infinite;
        transform-origin: 50% 50%;
        will-change: transform;
        position: absolute;
        top: 100px;
        right: 100px;
        width: 100px;
        height: 100px;

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        ${({ theme }) => theme.breakpoints.down('md')} {
          top: 250px;
          right: 40px;
          width: 150px;
          height: 150px;
        }
      }
    }
  }
`;
