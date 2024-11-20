import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { ReviewCardProps } from './types';
import stylesheet from './styles';
import Text from '../Text';
import Icon from '../Icon';
import Avatar from '../Avatar';

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const renderStars = useCallback(() => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Icon key={i} name={i <= Number(review.feedback.score.toFixed()) ? 'Star' : 'EmptyStar'} size={12} />);
    }
    return stars;
  }, [review.feedback.score]);

  return (
    <View style={styles.container}>
      {!review.isAnonymous && (
        <Avatar
          size={32}
          profilePictureUrl={review.user?.profilePhoto?.medium}
          name={`${review.user.firstname} ${review.user.lastname}`}
        />
      )}
      <View style={styles.infoContainer}>
        {!review.isAnonymous && (
          <Text style={styles.name} variant="Body">{`${review.user.firstname} ${review.user.lastname}`}</Text>
        )}
        <View style={styles.startContainer}>
          <View style={styles.stars}>{renderStars()}</View>
          <Text variant="Body5">{`${review.feedback.score} din 5`}</Text>
        </View>
        {review.feedback.review && review.feedback.review.length !== 0 && (
          <Text numberOfLines={4} style={styles.text} variant="Body5" color={theme.colors.secondary}>
            {review.feedback.review}
          </Text>
        )}
      </View>
      {review.isOwner && <Icon name="Dots" />}
    </View>
  );
};

export default memo(ReviewCard);
