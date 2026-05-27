export const ANIMATIONS = {
  // Duration timings (in milliseconds)
  duration: {
    quick: 150,
    base: 300,
    slow: 500,
    slower: 800,
    slowest: 1200,
  },

  // Easing functions
  easing: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
  },

  // Common animation presets
  fadeIn: {
    duration: 300,
    useNativeDriver: true,
  },

  fadeOut: {
    duration: 300,
    useNativeDriver: true,
  },

  slideIn: {
    duration: 400,
    useNativeDriver: true,
  },

  slideOut: {
    duration: 400,
    useNativeDriver: true,
  },

  scaleIn: {
    duration: 300,
    useNativeDriver: true,
  },

  scaleOut: {
    duration: 300,
    useNativeDriver: true,
  },

  bounce: {
    duration: 500,
    useNativeDriver: true,
  },

  // Page transitions
  pageEnter: {
    duration: 400,
    useNativeDriver: true,
  },

  pageExit: {
    duration: 300,
    useNativeDriver: true,
  },
};
