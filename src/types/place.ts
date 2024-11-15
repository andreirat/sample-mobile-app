import { Review } from './review.ts';
import { Location } from './location.ts';

export interface PlaceProfile {
  id: number;
  name: string;
  slug: string;
  totalRating: number;
  phoneNumber: string;
  description: string;
  profilePicture: string;
  carouselImages: string[];
  locationId: number;
  createdAt: string;
  updatedAt: string;
  location: Location;
  reviews: Review[];
}
