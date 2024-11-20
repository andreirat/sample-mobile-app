import { atom } from 'jotai';
import { PublicFeedbackDetails } from '../types/place';

export const reviewsAtom = atom<PublicFeedbackDetails[]>([]);

export const addReviewAtom = atom(null, (get, set, newReview: PublicFeedbackDetails) => {
  const currentReviews = get(reviewsAtom);
  set(reviewsAtom, [newReview, ...currentReviews]);
});
