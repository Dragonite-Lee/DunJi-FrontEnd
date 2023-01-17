export type RoomState = {
  ROOM_INFO: { [id: string]: RoomInfoListTypes };
  ROOM_REVIEW: { [id: string]: RoomReviewListTypes };
  ROOM_POST: { [id: string]: RoomPostListTypes };
  ROOM_LIST: { [id: string]: RoomListTypes };
  MAP_ROOM_LIST: { [id: string]: RoomListTypes }; // 지도 상에 보이는 매물 정보
  ROOM_ID: string;
};

export type RoomReviewListTypes = {
  accessible: number;
  address: string;
  count: number;
  buildingID: string;
  clean: number;
  sound: number;
  total: number;
  landlord: number;
  facility: number;
};

export type RoomPostListTypes = {
  title: any;
  registrant: number;
  roomID: string;
  detailAddress: any;
  regDate: string;
  explain: any;
  image: number;
  recommend: number;
  buildingID: string;
  address: any;
};

// NOTE:  매물 조회 참고 short room info
export interface RoomInfoType {
  roomId: string;
  latitude: number;
  longitude: number;
  sigungu: string;
  dong: string;
  priceUnit: '주세' | '월세' | '전세' | '반전세';
  price: number;
  deposit: number;
  roomType: '원룸' | '투룸' | '쓰리룸 이상';
  dealType: '단기임대' | '양도';
  structure: '오픈형' | '분리형' | '복층형';
  floor: string;
  roomSize: number;
  heartNum: number;
  image: string;
}

export interface RoomInfoListTypes {
  aircon: boolean;
  availConsul: boolean;
  availFrom: string;
  availTo: string;
  bed: boolean;
  car: boolean;
  closet: boolean;
  dealType: string;
  deposit: number;
  desk: boolean;
  elevator: boolean;
  wholeFloor: number;
  floor: number;
  gas: boolean;
  induc: boolean;
  loan: boolean;
  manage: number;
  manageInclude: any;
  micro: boolean;
  pet: boolean;
  price: number;
  priceUnit: string;
  refri: boolean;
  roomSize: number;
  roomType: string;
  shelf: boolean;
  shoe: boolean;
  sink: boolean;
  struct: string;
  washer: boolean;
  women: boolean;
}

export type RoomListTypes = {
  address: string;
  aircon: boolean;
  availPeriodConsul: boolean;
  availPeriodFrom: string;
  availPeriodTo: string;
  bed: boolean;
  car: boolean;
  closet: boolean;
  dealType: string;
  deposit: number;
  desk: boolean;
  detailAddress: string;
  dong: string;
  elevator: boolean;
  wholeFloor: number;
  explain: string;
  floor: number;
  fullOption: false;
  gas: boolean;
  induc: boolean;
  jibun: string;
  latitude: number;
  loan: boolean;
  longitude: number;
  manage: boolean;
  manageCost: number;
  manageElec: boolean;
  manageGas: boolean;
  manageInternet: boolean;
  manageTV: boolean;
  manageWater: boolean;
  micro: boolean;
  pet: boolean;
  price: number;
  priceUnit: string;
  refri: boolean;
  ri: string;
  roomID: string;
  roomSize: number;
  roomType: string;
  shelf: boolean;
  shoe: boolean;
  sido: string;
  sigungu: string;
  sink: boolean;
  struct: string;
  title: string;
  washer: boolean;
  ROOM_ID: string;
};
