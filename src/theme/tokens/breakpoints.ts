type BreakpointValues = {
  '2xl': number;
  lg: number;
  md: number;
  sm: number;
  xl: number;
  xs: number;
};

export const breakpoints = {
  between: (min: keyof BreakpointValues, max: keyof BreakpointValues) =>
    `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${breakpoints.values[max] - 1}px)`,

  down: (breakpoint: keyof BreakpointValues) => {
    const value = breakpoints.values[breakpoint];
    return `@media (max-width: ${value - 1}px)`;
  },

  only: (breakpoint: keyof BreakpointValues) => {
    const keys = Object.keys(breakpoints.values) as Array<keyof BreakpointValues>;
    const index = keys.indexOf(breakpoint);

    if (index === keys.length - 1) {
      return breakpoints.up(breakpoint);
    }

    return breakpoints.between(breakpoint, keys[index + 1]);
  },

  // Media query helpers
  up: (breakpoint: keyof BreakpointValues) => `@media (min-width: ${breakpoints.values[breakpoint]}px)`,

  // Breakpoint values
  values: {
    '2xl': 1536,
    lg: 1024,
    md: 768,
    sm: 640,
    xl: 1280,
    xs: 0
  }
} as const;

export type Breakpoints = typeof breakpoints;
