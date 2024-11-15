import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  reviewsSection: {
    paddingHorizontal: theme.margins.screenHorizontal,
    marginTop: theme.spacing[10],
    justifyContent: 'space-between',
  },
  reviewsInfo: {
    marginTop: theme.spacing[4],
    gap: theme.spacing[2],
  },
  reviews: {
    marginTop: theme.spacing[4],
    gap: theme.spacing[4],
  },
}));

export default stylesheet;
