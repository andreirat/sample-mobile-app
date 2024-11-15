import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginBottom: theme.spacing[6],
    paddingHorizontal: theme.margins.screenHorizontal,
    marginTop: theme.spacing[4],
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  reviewsSection: {
    paddingHorizontal: theme.margins.screenHorizontal,
    marginTop: theme.spacing[10],
    justifyContent: 'space-between',
  },
  profileImage: {
    height: theme.spacing[14],
    width: theme.spacing[14],
    borderRadius: theme.radius.full,
  },
  ratingInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[1.5],
  },
  info: {
    gap: theme.spacing[2],
  },
  totalRating: {
    fontWeight: 'bold',
  },
  reviewsNumber: {
    color: theme.colors.primary,
  },
  address: {
    color: theme.colors.secondary,
  },
  reviewsInfo: {
    marginTop: theme.spacing[4],
    gap: theme.spacing[2],
  },
}));

export default stylesheet;
