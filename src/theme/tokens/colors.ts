export const colors = {
  black: '#000000',
  blue: '#4d6fe8',
  coral: '#e87461',
  darkBlue: '#3d4257',
  lightBlue: '#6b9ce8',
  peach: '#f4a460',
  pink: '#f4c7c7'
} as const;

export type Color = keyof typeof colors;
