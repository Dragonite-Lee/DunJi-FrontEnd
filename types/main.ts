export type MainState = {
  SEARCHMODAL_OPEN: boolean;
  SEARCHRESULT: any[];
  SLIDEBOX: any[];
  newRoom: AllRoomType[];
  newReview: AllReviewType[];
};

export type AllRoomType = { //모든 매물 목록
  roomId: string;
  longitude: number;
  latitude: number;
  sigungu: string;
  dong: string;
  priceUnit: string;
  price: number;
  deposit: number;
  roomType: string;
  dealType: string;
  structure: string;
  floor: number;
  roomSize: number;
  heartNum: number;
  image: string;
};

export type AllReviewType = { //모든 후기 목록
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
