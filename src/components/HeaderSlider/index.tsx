import React, { memo } from 'react';
import { FlatList, Image, StatusBar, useWindowDimensions, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import stylesheet from './styles.ts';
import { PageImage } from '../../types/place.ts';
import { HeaderSliderProps } from './types';

const HeaderSlider = ({ images }: HeaderSliderProps) => {
  const { styles } = useStyles(stylesheet);
  const { width } = useWindowDimensions();
  const renderImage = ({ item }: { item: PageImage }) => (
    <Image source={{ uri: item.medium }} style={styles.image} resizeMode="cover" />
  );

  return (
    <View>
      <StatusBar barStyle="light-content" />

      <FlatList
        bounces={false}
        data={images}
        renderItem={renderImage}
        horizontal
        snapToInterval={width / 1.5}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(HeaderSlider);
