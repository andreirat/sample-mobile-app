import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EEF0F2',
  },
  image: {
    resizeMode: 'cover',
  },
  initials: {
    color: '#4B5563',
    fontWeight: 'bold',
  },
}));

export default stylesheet;
