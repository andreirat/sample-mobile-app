import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme, miniRuntime) => ({
  container: {
    paddingBottom: miniRuntime.insets.bottom,
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    flex: 1,
  },
  list: {
    backgroundColor: '#FFFFFF',
  },
  businessName: {
    color: theme.colors.secondary,
  },
  date: {
    textAlign: 'center',
    marginBottom: theme.spacing[2.5],
  },
  starsContainer: {
    gap: theme.spacing[4],
    flexDirection: 'row',
    marginBottom: theme.spacing[6],
    justifyContent: 'center',
  },
  line: {
    backgroundColor: '#E9ECEF',
    height: 0.5,
    marginBottom: theme.spacing[6],
    width: '100%',
  },
  star: {
    fontSize: 32,
    marginHorizontal: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    marginLeft: theme.spacing[3],
    fontFamily: 'OpenSans-SemiBold',
  },
  sectionTitle: {
    marginBottom: 10,
  },
  description: {
    marginBottom: 15,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#DEE2E6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#0047FF',
    borderRadius: theme.radius.full,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
}));

export default stylesheet;
