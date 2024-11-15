import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  text: {
    variants: {
      variant: theme.fontVariants,
    },
  },
  extraStyle: color => {
    return {
      color: color || '#222',
    };
  },
}));

export default stylesheet;
