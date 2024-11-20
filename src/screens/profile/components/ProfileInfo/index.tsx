import { Image, View } from 'react-native';
import { Icon, Text } from '../../../../components';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import { ProfileInfoProps } from './types.ts';

const ProfileInfo = ({ name, profileImage, feedbackScore, feedbackCount, address }: ProfileInfoProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.profileInfo}>
      <View style={styles.info}>
        <Text variant="H3">{name}</Text>
        <View style={styles.ratingInfo}>
          <Icon name="Star" size={15} />
          <Text variant="Body" style={styles.totalRating}>
            {feedbackScore}
          </Text>
          <Text variant="Body" style={styles.reviewsNumber}>{`(${feedbackCount} evaluari)`}</Text>
        </View>
        <Text style={styles.address} variant="Body2">
          {address}
        </Text>
      </View>
      <View>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </View>
    </View>
  );
};

export default ProfileInfo;
