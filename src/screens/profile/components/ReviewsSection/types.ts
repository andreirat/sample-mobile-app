import { PublicFeedbackDetails } from '../../../../types/place.ts';

export interface ReviewsSectionProps {
  totalRating: string;
  reviewsCount: number;
  reviews: PublicFeedbackDetails[];
}
