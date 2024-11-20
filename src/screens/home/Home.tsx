import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { RootStackParamList, RootStackScreens } from '../../types/navigation.ts';
import { Text } from '../../components';
import stylesheet from './styles.ts';

const Home: React.FC<NativeStackScreenProps<RootStackParamList, RootStackScreens.Home>> = ({ navigation }) => {
  const { styles } = useStyles(stylesheet);

  const handlePlacePress = useCallback(() => navigation.navigate(RootStackScreens.Profile), [navigation]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => handlePlacePress()}>
        <Text variant="H3">Go to profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;
