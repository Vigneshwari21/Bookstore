import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const SHADOWS = {
  // Soft shadows for cozy feel
  xs: {
    shadowColor: COLORS.deepOceanBlue,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  sm: {
    shadowColor: COLORS.deepOceanBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  md: {
    shadowColor: COLORS.deepOceanBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  lg: {
    shadowColor: COLORS.deepOceanBlue,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },

  xl: {
    shadowColor: COLORS.deepOceanBlue,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 12,
  },

  // Glass morphism effect
  glass: {
    shadowColor: COLORS.deepOceanBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  // Inset shadow effect (for cards)
  inset: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
};

export const shadowStyles = StyleSheet.create({
  xs: SHADOWS.xs,
  sm: SHADOWS.sm,
  md: SHADOWS.md,
  lg: SHADOWS.lg,
  xl: SHADOWS.xl,
  glass: SHADOWS.glass,
  inset: SHADOWS.inset,
});
