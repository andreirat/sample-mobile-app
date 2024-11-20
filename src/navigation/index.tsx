import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackScreens } from '../types/navigation.ts';
import Home from '../screens/home/Home.tsx';
import Profile from '../screens/profile/Profile';
import Reviews from '../screens/reviews/Reviews';
import AddReview from '../screens/addReview/AddReview';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 14,
            fontFamily: 'OpenSans-SemiBold',
          },
        }}
      >
        <RootStack.Screen options={{ headerShown: false }} name={RootStackScreens.Home} component={Home} />
        <RootStack.Screen options={{ headerShown: false }} name={RootStackScreens.Profile} component={Profile} />
        <RootStack.Screen name={RootStackScreens.Reviews} component={Reviews} />
        <RootStack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 14,
              fontFamily: 'OpenSans-SemiBold',
            },
          }}
          name={RootStackScreens.AddReview}
          component={AddReview}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
