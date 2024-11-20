import React, { memo } from 'react';

import { HeaderProps } from './types';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import IconButton from '../IconButton';

const Header = ({ onBackPress, onLikePress, onSharePress, isFavorite }: HeaderProps) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <IconButton iconSize={20} onPress={onBackPress} iconName="Arrow" />
      <View style={styles.rightContainer}>
        <IconButton
          onPress={onLikePress}
          iconColor={isFavorite ? theme.colors.secondary : undefined}
          iconName="Heart"
          iconSize={30}
        />
        <IconButton onPress={onSharePress} iconName="Share" iconSize={30} />
      </View>
    </View>
  );
};

export default memo(Header);
