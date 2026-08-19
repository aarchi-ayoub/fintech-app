import { Platform } from 'react-native';

const Shadows = {
  none: {},

  small: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.08,
      shadowRadius: 3,
    },
    android: {
      elevation: 2,
    },
  }),

  medium: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.12,
      shadowRadius: 6,
    },
    android: {
      elevation: 4,
    },
  }),

  large: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.16,
      shadowRadius: 12,
    },
    android: {
      elevation: 8,
    },
  }),
};

export default Shadows;
