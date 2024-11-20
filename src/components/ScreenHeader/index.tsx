import React, { memo } from 'react';

import { ScreenHeaderProps } from './types';
import { Pressable, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import Text from '../Text';
import Icon from '../Icon';

const ScreenHeader = ({ onBackPress, onClosePress, title }: ScreenHeaderProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      {onBackPress && (
        <Pressable onPress={onBackPress}>
          <Icon size={32} name="BackLight" />
        </Pressable>
      )}
      {title && (
        <Text variant="Body5" style={styles.title}>
          {title}
        </Text>
      )}

      {onClosePress && (
        <Pressable onPress={onClosePress}>
          <Icon size={32} color="#454F63" name="Close" />
        </Pressable>
      )}
    </View>
  );
};

export default memo(ScreenHeader);
