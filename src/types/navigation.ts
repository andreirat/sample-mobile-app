export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Reviews: undefined;
  AddReview: {
    initialScore: number;
  };
};

export enum RootStackScreens {
  Home = 'Home',
  Profile = 'Profile',
  Reviews = 'Reviews',
  AddReview = 'AddReview',
}
