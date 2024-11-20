import React from 'react';
import { LogBox, StatusBar, View } from 'react-native';
import RootNavigator from './navigation';
import './styles/unistyles.ts';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </GestureHandlerRootView>
    </View>
  );
};

export default App;
