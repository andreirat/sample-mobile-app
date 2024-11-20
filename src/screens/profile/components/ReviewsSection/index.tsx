import { ReviewCard, Text } from '../../../../components';
import { View } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import { ReviewsSectionProps } from './types.ts';

const ReviewsSection = ({ totalRating, reviewsCount, reviews }: ReviewsSectionProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.reviewsSection}>
      <Text variant="H2">Recenzii și evaluări</Text>
      <View style={styles.reviewsInfo}>
        <Text style={styles.reviewsTotal} variant="H1">
          {totalRating}
        </Text>
        <Text style={styles.reviewsCount} variant="Body5">{`${reviewsCount} evaluari`}</Text>
      </View>
      <View style={styles.reviews}>
        {reviews.map(review => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </View>
    </View>
  );
};

export default ReviewsSection;
