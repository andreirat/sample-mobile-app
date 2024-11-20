import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme, miniRuntime) => ({
  container: {
    height: miniRuntime.insets.top + 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: theme.spacing[4],
    backgroundColor: '#FFF',
    shadowColor: 'rgba(136,152,170,0.15)',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  iconContainer: {
    padding: 8,
  },
  iconPlaceholder: {
    width: 32,
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    flex: 1,
    position: 'absolute',
    left: 56,
    right: 56,
  },
}));

export default stylesheet;
