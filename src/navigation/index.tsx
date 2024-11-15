import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackScreens } from '../types/navigation.ts';
import Home from '../screens/home/Home.tsx';
import Profile from '../screens/profile/Profile.tsx';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen options={{ headerShown: false }} name={RootStackScreens.Home} component={Home} />
        <RootStack.Screen options={{ headerShown: false }} name={RootStackScreens.Profile} component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
