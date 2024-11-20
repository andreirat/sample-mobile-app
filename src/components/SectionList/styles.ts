import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  tabContainer: {
    marginHorizontal: theme.spacing[2],
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing[2],
    paddingHorizontal: theme.spacing[4],
    borderRadius: 20,
  },
  selectedTab: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: theme.colors.primary,
  },
  selectedTabText: {
    color: 'white',
  },
}));

export default stylesheet;
