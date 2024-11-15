import { ReviewCard, Text } from '../../../../components';
import { View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import { ReviewsSectionProps } from './types.ts';

const ReviewsSection = ({ reviews, totalRating, reviewsCount }: ReviewsSectionProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.reviewsSection}>
      <Text variant="H2">Recenzii și evaluări</Text>
      <View style={styles.reviewsInfo}>
        <Text variant="H1">{totalRating}</Text>
        <Text variant="Body">{`${reviewsCount} evaluari`}</Text>
      </View>
      <View style={styles.reviews}>
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </View>
    </View>
  );
};

export default ReviewsSection;
