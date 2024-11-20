import React, { memo } from 'react';
import { Image, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { AvatarProps } from './types';
import stylesheet from './styles';
import Text from '../Text';

const Avatar: React.FC<AvatarProps> = ({ profilePictureUrl, name = '', size = 50 }) => {
  const { styles } = useStyles(stylesheet);

  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(' ');
    if (names.length === 0) {
      return '';
    }
    if (names.length === 1) {
      return names[0][0].toUpperCase();
    }
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: profilePictureUrl ? 'transparent' : '#E5E7EB',
        },
      ]}
    >
      {profilePictureUrl && profilePictureUrl !== null ? (
        <Image
          source={{ uri: profilePictureUrl }}
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      ) : (
        <Text variant="Body6" style={[styles.initials, { fontSize: size / 2.5 }]}>
          {initials}
        </Text>
      )}
    </View>
  );
};
export default memo(Avatar);
