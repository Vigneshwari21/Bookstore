export { COLORS, TEXT_COLORS, BACKGROUND_COLORS, SHADOW_COLORS } from './colors';
export { TYPOGRAPHY } from './typography';
export { SPACING, PADDING, MARGIN, BORDER_RADIUS } from './spacing';
export { SHADOWS, shadowStyles } from './shadows';
export { ANIMATIONS } from './animations';

import { useColorScheme } from 'react-native';
import { COLORS } from './colors';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  
  return {
    isDark: colorScheme === 'dark',
    colorScheme,
    colors: COLORS,
  };
};
