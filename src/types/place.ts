export type PageProfile = {
  _id: string;
  slug: string;
  name: string;
  phoneNo: string;
  location: PageLocation;
  description: string;
  profilePhoto: ProfileImage;
  images: PageImage[];
  feedback: {
    score: number;
    total: number;
  };
  hideReviews?: boolean;
};

export type ProfileImage = {
  _id: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
};

export type PageLocation = {
  city: string;
  address: string;
  long: number;
  lat: number;
  extraInfo?: string;
  district?: string;
  area?: string;
};

export type PageImage = {
  _id: string;
  croppedSmall: string;
  croppedLarge: string;
  small: string;
  medium: string;
  large: string;
};

export type PageReviews = {
  data: PublicFeedbackDetails[];
  next?: string;
};

export type AnonymousFeedbackDetails = {
  _id: string;
  isAnonymous?: boolean;
  feedback: {
    score: number;
    review?: string;
  };
};

export interface PublicFeedbackDetails extends AnonymousFeedbackDetails {
  user: {
    firstname?: string;
    lastname?: string;
    profilePhoto?: ProfileImage;
  };
  isOwner?: boolean;
}
