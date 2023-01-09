export type MainState = {
  SEARCHMODAL_OPEN: boolean;
  SEARCHRESULT: any[];
  SLIDEBOX: any[];
  newRoom: newRoomType[];
  newReview: newReviewType[];
};

export interface newRoomType {
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
}

export interface newReviewType {
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
}
