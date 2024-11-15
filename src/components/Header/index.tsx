import React, { memo } from 'react';

import { HeaderProps } from './types';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import IconButton from '../IconButton';

const Header = ({ onBackPress, onLikePress, onSharePress }: HeaderProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <IconButton iconSize={20} onPress={onBackPress} iconName="Arrow" />
      <View style={styles.rightContainer}>
        <IconButton onPress={onLikePress} iconName="Heart" />
        <IconButton onPress={onSharePress} iconName="Share" />
      </View>
    </View>
  );
};

export default memo(Header);
