import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    gap: theme.spacing[2],
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: theme.spacing[4],
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: 'rgba(0,0,0,0.27)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 3,
  },
}));

export default stylesheet;
