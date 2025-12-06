export const colors = {
  // Background colors
  background: {
    dark: '#111827',
    default: '#faf7f6',
    paper: '#F9FAFB'
  },

  //   error: {
  //     contrastText: '#FFFFFF',
  //     dark: '#DC2626',
  //     light: '#F87171',
  //     main: '#EF4444'
  //   },

  //   info: {
  //     contrastText: '#FFFFFF',
  //     dark: '#2563EB',
  //     light: '#60A5FA',
  //     main: '#3B82F6'
  //   },

  // Neutral colors

  neutral: {
    black: '#000000',
    gray: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      50: '#F9FAFB',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    white: '#FFFFFF'
  },

  // Primary colors
  primary: {
    contrastText: '#FFFFFF',
    dark: '#004C99',
    light: '#3385D6',
    main: '#0066CC'
  },

  // Secondary colors
  secondary: {
    contrastText: '#FFFFFF',
    dark: '#111827',
    light: '#D1D5DB',
    main: '#6B7280'
  }

  //   // Semantic colors
  //   success: {
  //     contrastText: '#FFFFFF',
  //     dark: '#059669',
  //     light: '#34D399',
  //     main: '#10B981'
  //   },

  //   // Text colors
  //   text: {
  //     disabled: '#9CA3AF',
  //     hint: '#D1D5DB',
  //     primary: '#111827',
  //     secondary: '#6B7280'
  //   },

  //   warning: {
  //     contrastText: '#FFFFFF',
  //     dark: '#D97706',
  //     light: '#FBBF24',
  //     main: '#F59E0B'
  //   }
} as const;

export type Colors = typeof colors;
