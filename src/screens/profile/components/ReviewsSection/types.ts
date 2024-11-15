import { Review } from '../../../../types/review.ts';

export interface ReviewsSectionProps {
  totalRating: number;
  reviewsCount: number;
  reviews: Review[];
}
