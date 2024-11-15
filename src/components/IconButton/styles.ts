import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => {
  return {
    container: {
      height: theme.spacing[11],
      width: theme.spacing[11],
      borderRadius: theme.radius.full,
      backgroundColor: theme.colors.black60,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});

export default stylesheet;
