export type RootStackParamList = {
  Home: undefined;
  Profile: {
    slug?: string;
  };
};

export enum RootStackScreens {
  Home = 'Home',
  Profile = 'Profile',
}
