import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
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
  name: {
    fontWeight: 'semibold',
    marginBottom: theme.spacing[1],
  },
  startContainer: {
    marginBottom: theme.spacing[2],
    flexDirection: 'row',
    gap: theme.spacing[2],
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  stars: {
    gap: theme.spacing[0.5],
    flexDirection: 'row',
  },
}));

export default stylesheet;
