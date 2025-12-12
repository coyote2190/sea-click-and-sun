'use client';

import { FC } from 'react';
import Image from 'next/image';

import Button from '../button';
import Container from '../container';
import IconButton from '../iconButton';

import { StyledHeaderContainer } from './header.styles';
import { HeaderProps } from './header.types';

const Header: FC<HeaderProps> = ({ dataTestId, isDarkMode, toggleTheme }) => {
  return (
    <StyledHeaderContainer data-testid={dataTestId}>
      <Container>
        <Image alt="logo sea click and sun" height={88} src="/logo-sea-click-and-sun.png" width={135} />

        <div>
          <Button
            endIcon={
              <svg
                fill="none"
                height="80"
                transform="rotate(0 0 0)"
                viewBox="0 0 25 25"
                width="80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9203 6.0505C18.7834 5.86991 18.5665 5.75324 18.3223 5.75315L9.32695 5.75C8.91265 5.74985 8.57667 6.08545 8.57653 6.49958C8.57638 6.9137 8.91212 7.24954 9.32643 7.24968L16.5172 7.2522L5.79779 17.9716C5.5049 18.2645 5.5049 18.7394 5.79779 19.0323C6.09069 19.3252 6.56556 19.3252 6.85845 19.0323L17.5725 8.31828L17.5748 15.4945C17.5749 15.9086 17.9109 16.2442 18.3252 16.2441C18.7395 16.244 19.0752 15.9081 19.0751 15.494L19.0722 6.56074C19.0853 6.38214 19.0346 6.19976 18.9203 6.0505Z"
                  fill="currentColor"
                />
              </svg>
            }
            variant="outlined"
          >
            On discute
          </Button>
          <IconButton
            icon={
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.75 9.125L3.25 9.125C2.62868 9.125 2.125 8.62132 2.125 8C2.125 7.37868 2.62868 6.875 3.25 6.875L20.75 6.875C21.3713 6.875 21.875 7.37868 21.875 8C21.875 8.62132 21.3713 9.125 20.75 9.125ZM20.75 17.125L3.25 17.125C2.62868 17.125 2.125 16.6213 2.125 16C2.125 15.3787 2.62868 14.875 3.25 14.875L20.75 14.875C21.3713 14.875 21.875 15.3787 21.875 16C21.875 16.6213 21.3713 17.125 20.75 17.125Z"
                  fill="currentColor"
                />
              </svg>
            }
            onClick={() => console.log('test')}
          />
          <IconButton
            icon={
              isDarkMode ? (
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 3V5M12 19V21M21 12H19M5 12H3M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.1856 3.69042C10.4129 3.44595 10.4513 3.08067 10.2797 2.79431C10.1082 2.50796 9.768 2.36944 9.44521 2.45451C5.16045 3.58368 2 7.48431 2 12.125C2 17.6479 6.47715 22.125 12 22.125C16.6407 22.125 20.5413 18.9646 21.6705 14.6798C21.7556 14.357 21.617 14.0168 21.3307 13.8453C21.0443 13.6737 20.6791 13.7121 20.4346 13.9394C19.1394 15.1435 17.4055 15.8789 15.498 15.8789C11.4929 15.8789 8.24609 12.6321 8.24609 8.62696C8.24609 6.71956 8.98149 4.98559 10.1856 3.69042Z"
                    fill="currentColor"
                  />
                </svg>
              )
            }
            onClick={toggleTheme}
          />
        </div>
      </Container>
    </StyledHeaderContainer>
  );
};

export default Header;
