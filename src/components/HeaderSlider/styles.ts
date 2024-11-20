import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme, miniRuntime) => ({
  image: {
    width: miniRuntime.screen.width / 1.5,
    height: 250,
  },
}));

export default stylesheet;
