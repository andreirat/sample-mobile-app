export interface Review {
  id: number;
  rating: number;
  comment: string;
  isAnonymous: boolean;
  firstName: string | null;
  lastName: string | null;
  profilePic: string | null;
  placeId: number;
  createdAt: Date;
  updatedAt: Date;
}
