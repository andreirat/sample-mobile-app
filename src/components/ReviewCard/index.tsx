import React, { memo, useCallback } from 'react';
import { Image, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { ReviewCardProps } from './types';
import stylesheet from './styles';
import Text from '../Text';
import Icon from '../Icon';

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const renderStars = useCallback(() => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Icon key={i} name={i <= Number(review.rating.toFixed()) ? 'Star' : 'EmptyStar'} size={12} />);
    }
    return stars;
  }, [review.rating]);

  return (
    <View style={styles.container}>
      {review.profilePic && <Image style={styles.profileImage} source={{ uri: review.profilePic }} />}
      <View style={styles.infoContainer}>
        <Text style={styles.name} variant="Body">{`${review.firstName} ${review.lastName}`}</Text>
        <View style={styles.startContainer}>
          <View style={styles.stars}>{renderStars()}</View>
          <Text variant="Body">{`${review.rating.toFixed()} din 5`}</Text>
        </View>
        <Text numberOfLines={4} variant="Body" color={theme.colors.secondary}>
          {review.comment}
        </Text>
      </View>
    </View>
  );
};

export default memo(ReviewCard);
