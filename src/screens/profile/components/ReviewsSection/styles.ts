import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  reviewsSection: {
    paddingHorizontal: theme.margins.screenHorizontal,
    marginTop: theme.spacing[8],
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
  reviewsCount: {
    paddingLeft: 5,
  },
  reviewsTotal: {
    paddingLeft: theme.spacing[0.5],
  },
}));

export default stylesheet;
