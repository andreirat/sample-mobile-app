import { createStyleSheet } from 'react-native-unistyles';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.65;
const CARD_MARGIN = 8;

const stylesheet = createStyleSheet(theme => ({
  list: { paddingBottom: theme.spacing[6], paddingTop: theme.spacing[4.5] },
  title: {
    paddingHorizontal: 18,
  },
  listContainer: {
    paddingHorizontal: 12,
  },
  appointmentCard: {
    backgroundColor: 'white',
    borderRadius: 6,
    paddingVertical: theme.spacing[2],
    paddingHorizontal: 9,
    shadowColor: 'rgba(136,152,170,0.15)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
    width: CARD_WIDTH,
    marginHorizontal: CARD_MARGIN,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: theme.spacing[2],
    paddingVertical: theme.spacing[1],
    borderRadius: 8,
    marginBottom: theme.spacing[1.5],
  },
  confirmedBadge: {
    backgroundColor: '#E9FAF3',
  },
  completedBadge: {
    backgroundColor: '#F5F5F5',
  },
  confirmedText: {
    color: theme.colors.positive,
  },
  completedText: {
    color: theme.colors.secondary,
  },
  serviceName: {
    marginBottom: 3,
  },
}));

export default stylesheet;
