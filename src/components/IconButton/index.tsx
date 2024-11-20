import React, { memo } from 'react';

import { IconButtonProps } from './types';
import { Pressable } from 'react-native';
import Icon from '../Icon';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';

const IconButton = ({ iconName, onPress, iconSize, iconColor }: IconButtonProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon color={iconColor} size={iconSize} name={iconName} />
    </Pressable>
  );
};

export default memo(IconButton);
