import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme, miniRuntime) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: miniRuntime.insets.top,
    marginHorizontal: theme.margins.screenHorizontal,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing[4],
  },
}));

export default stylesheet;
