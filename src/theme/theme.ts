import { breakpoints } from './tokens/breakpoints';
import { colors } from './tokens/colors';
import { fonts } from './tokens/fonts';

export const theme = {
  breakpoints,
  colors,
  fonts
} as const;

export type Theme = typeof theme;
