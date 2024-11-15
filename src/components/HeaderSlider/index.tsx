import React, { memo, useCallback } from 'react';
import Carousel from 'pinar';

import { HeaderSliderProps } from './types';
import { Image, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';

const HeaderSlider = ({ images }: HeaderSliderProps) => {
  const { styles } = useStyles(stylesheet);

  const renderImages = useCallback(() => {
    return images.map((imageUrl, index) => (
      <View>
        <Image style={styles.image} key={index} source={{ uri: imageUrl }} />
      </View>
    ));
  }, [images, styles.image]);

  return (
    <Carousel showsControls={false} height={200} showsDots={false} contentContainerStyle={{ height: 200 }}>
      {renderImages()}
    </Carousel>
  );
};

export default memo(HeaderSlider);
