export const fonts = {
  // Font families
  family: {
    primary: "'Bricolage Grotesque', sans-serif",
    secondary: "'Sora', sans-serif"
  },

  // Letter spacing
  letterSpacing: {
    normal: '0',
    tight: '-0.025em',
    tighter: '-0.05em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },

  // Line heights
  lineHeight: {
    loose: 2,
    normal: 1.5,
    relaxed: 1.75,
    tight: 1.25
  },

  // Font sizes
  size: {
    // 20px
    '2xl': '1.5rem',

    // 24px
    '3xl': '1.875rem',

    // 30px
    '4xl': '2.25rem',

    // 36px
    '5xl': '3rem',

    // 48px
    '6xl': '3.75rem',

    // 60px
    '7xl': '4.5rem',

    // 14px
    base: '1rem',

    // 16px
    lg: '1.125rem',

    // 12px
    sm: '0.875rem',

    // 18px
    xl: '1.25rem',

    xs: '0.75rem' // 72px
  },

  // Font weights
  weight: {
    black: 900,
    bold: 700,
    extrabold: 800,
    extralight: 200,
    light: 300,
    medium: 500,
    regular: 400,
    semibold: 600,
    thin: 100
  }
} as const;

export type Fonts = typeof fonts;
