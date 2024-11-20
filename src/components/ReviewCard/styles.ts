import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    gap: 12,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: theme.spacing[4],
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: 'rgba(136,152,170,0.15)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  name: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    marginBottom: theme.spacing[1],
  },
  startContainer: {
    flexDirection: 'row',
    gap: theme.spacing[2],
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  stars: {
    gap: theme.spacing[0.5],
    flexDirection: 'row',
  },
  text: {
    marginTop: theme.spacing[2],
  },
}));

export default stylesheet;
