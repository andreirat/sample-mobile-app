import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  tabContainer: {
    marginHorizontal: theme.spacing[2],
  },
  tab: {
    paddingVertical: theme.spacing[2],
    paddingHorizontal: theme.spacing[4],
    borderRadius: 20,
  },
  selectedTab: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    fontWeight: 'semibold',
    fontSize: 16,
    color: theme.colors.primary,
  },
  selectedTabText: {
    color: '#FFFFFF',
  },
}));

export default stylesheet;
