import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 32,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  businessTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionTitle: {
    marginBottom: 16,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  ratingNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewCount: {
    marginLeft: 3,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  listContent: {
    gap: theme.spacing[4],
    paddingHorizontal: theme.spacing[4],
    flexGrow: 1,
  },
  footerLoader: {
    padding: 16,
    alignItems: 'center',
  },
}));

export default stylesheet;
