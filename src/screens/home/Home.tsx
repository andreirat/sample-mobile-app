import React, { useCallback, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { RootStackParamList, RootStackScreens } from '../../types/navigation.ts';
import { usePlace } from '../../hooks/usePlace.ts';
import { Text } from '../../components';
import stylesheet from './styles.ts';

const Home: React.FC<NativeStackScreenProps<RootStackParamList, RootStackScreens.Home>> = ({ navigation }) => {
  const { styles } = useStyles(stylesheet);
  const { fetchPlaces, placesList } = usePlace();

  useEffect(() => {
    fetchPlaces();
  }, []);

  const handlePlacePress = useCallback(
    (slug: string) => navigation.navigate(RootStackScreens.Profile, { slug }),
    [navigation],
  );

  return (
    <View style={styles.container}>
      {placesList?.map(place => (
        <Pressable style={styles.button} key={place.id} onPress={() => handlePlacePress(place.slug)}>
          <Text variant="H3">{place.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Home;
