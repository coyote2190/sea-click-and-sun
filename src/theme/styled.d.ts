import 'styled-components';

import { Breakpoints } from './tokens/breakpoints';
import { Colors } from './tokens/colors';
import { Fonts } from './tokens/fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
    fonts: Fonts;
  }
}
