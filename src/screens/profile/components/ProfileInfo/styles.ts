import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  info: {
    gap: theme.spacing[2],
  },
  profileInfo: {
    marginBottom: theme.spacing[6],
    paddingHorizontal: theme.margins.screenHorizontal,
    marginTop: theme.spacing[4],
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ratingInfo: {
    flexDirection: 'row',
    gap: 5,
  },
  totalRating: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
  },
  reviewsNumber: {
    fontFamily: 'OpenSans-Regular',
    color: theme.colors.primary,
  },
  address: {
    color: theme.colors.secondary,
  },
  profileImage: {
    height: theme.spacing[14],
    width: theme.spacing[14],
    borderRadius: theme.radius.full,
  },
}));

export default stylesheet;
