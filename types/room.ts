
export interface ReviewTypes { //후기 상세페이지
  address: string;
  totalRate: number; //평균 total
  cleanRate: number;
  noiseRate: number;
  accessRate: number;
  hostRate: number;
  facilityRate: number;
  image: string;
  list: ReviewlistTypes[];
};

export interface ReviewlistTypes { //후기 상세페이지의 리스트 타입
  reviewId: string;
  userNickname: string;
  roomType: string;
  totalRate: number;
  image: string[];
  period: string;
  content: string;
  addressDetail: string;
  regDate: string
}

export interface RoomState { //매물과 후기 상세페이지
  RoomInfo: RoomInfoListTypes;
  RoomReview: RoomReviewListTypes;
  ReviewDetail: ReviewTypes;
  MAP_ROOM_LIST: RoomListTypes;
}

export interface RoomInfoListTypes { //매물 상세페이지 Info 타입
  roomId: string;
  userNickname: string;
  longitude: number;
  latitude: number;
  sigungu: string;
  dong: string;
  address: string;
  addressDetail: string;
  title: string;
  content: string;
  image: Array<string>;
  heartNum: number;
  viewCount: number;
  regDate: string;
  roomType: string;
  dealType: string;
  priceUnit: string;
  price: number;
  deposit: number;
  managementCost: number;
  utility: string;
  totalFloor: number;
  floor: number;
  structure: string;
  roomSize: number;
  startedAt: string;
  finishedAt: string;
  tenancyAgreement: boolean;
  advantage: Array<string>;
  option: Array<string>;
}

export interface RoomReviewListTypes { //매물 상세페이지 Review 타입
  buildingID: string;
  totalRate: number;
  cleanRate: number;
  noiseRate: number;
  accessRate: number;
  hostRate: number;
  facilityRate: number;
}

export interface MapRoomTypes { //지도상 매물 조회 타입

}
export interface RoomListTypes{
  
}