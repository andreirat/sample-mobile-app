import { fonts, fontVariants } from './fonts';
import { margins, radius, spacing, stroke } from './metrics';
import { shadows } from './shadows';

export const lightTheme = {
  colors: {
    black60: 'rgba(0,0,0,0.6)',
    primary: '#080DE0',
    secondary: '#52577F',
    positive: '#2DCE89',
  },
  margins,
  radius,
  fonts,
  fontVariants,
  shadows,
  stroke,
  spacing,
} as const;

export const darkTheme = {
  colors: {
    black60: 'rgba(0,0,0,0.6)',
    primary: '#080DE0',
    secondary: '#52577F',
    positive: '#2DCE89',
  },
  margins,
  radius,
  fonts,
  fontVariants,
  shadows,
  stroke,
  spacing,
} as const;
