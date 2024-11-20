import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme, miniRuntime) => ({
  container: {
    flexGrow: 1,
    paddingBottom: miniRuntime.insets.bottom,
    backgroundColor: 'white',
  },
  list: { backgroundColor: 'white' },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewsSection: {
    paddingHorizontal: theme.margins.screenHorizontal,
    marginTop: theme.spacing[10],
    justifyContent: 'space-between',
  },
  reviewsInfo: {
    marginTop: theme.spacing[4],
    gap: theme.spacing[2],
  },
  infoContainer: {
    backgroundColor: 'white',
    paddingBottom: theme.spacing[4],
    shadowColor: 'rgba(69,91,99,0.39)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  footerText: {
    fontSize: 14,
  },
  seeMoreReviewsButton: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[3],
    backgroundColor: '#F2F2FE',
    borderRadius: theme.radius.full,
    shadowColor: 'rgba(50,50,93,0.11)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  footer: {
    gap: theme.spacing[6],
    marginTop: theme.spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetContainer: {
    borderRadius: 0,
    padding: theme.spacing[6],
  },
  initialTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  initialSubtitle: {
    fontFamily: 'OpenSans-Regular',
    color: '#666',
    marginBottom: theme.spacing[4],
  },
  starButton: {
    gap: 11,
    alignItems: 'center',
  },
  starLabel: {
    fontFamily: 'OpenSans-Regular',
    color: '#666',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sheetFooterText: {
    fontFamily: 'OpenSans-SemiBold',
  },
  sheetFooter: {
    alignItems: 'center',
    marginTop: theme.spacing[9],
    marginBottom: theme.spacing[3],
  },
}));

export default stylesheet;
