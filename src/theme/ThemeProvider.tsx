'use client';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
