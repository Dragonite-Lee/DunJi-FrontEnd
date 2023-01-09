export type MainState = {
  SEARCHMODAL_OPEN: boolean;
  SEARCHRESULT: any[];
  SLIDEBOX: any[];
  newRoom: NewRoomType[];
  newReview: NewReviewType[];
};

export type NewRoomType = {
  address: any;
  dealType: string;
  deposit: number;
  floor: string;
  image: any;
  latitude: number;
  longitude: number;
  price: number;
  priceUnit: string;
  recommend: number;
  roomID: any;
  roomSize: number;
  roomType: string;
  struct: string;
};

export type NewReviewType = {
  address: string;
  regDate: number;
  registrant: number;
  image: any;
  recomment: number;
  buildingID: string;
  landlord: number;
  clean: number;
  sound: number;
  accessible: number;
  total: number;
  reviewID: string;
  facility: number;
  period: string;
  content: string;
};
