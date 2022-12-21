import { createSlice } from '@reduxjs/toolkit';

type initialStateTypes = {
  ROOM_INFO: { [id: string]: RoomInfolistTypes };
  ROOM_REVIEW: { [id: string]: RoomReviewlistTypes };
  ROOM_POST: { [id: string]: RoomPostlistTypes };
  ROOM_LIST: { [id: string]: listTypes };
  MAP_ROOM_LIST: { [id: string]: listTypes }; // 지도 상에 보이는 매물 정보
  ROOM_ID: string;
};
type RoomReviewlistTypes = {
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
type RoomPostlistTypes = {
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
type RoomInfolistTypes = {
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
};
type listTypes = {
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

const initialState: initialStateTypes = {
  ROOM_INFO: {},
  ROOM_REVIEW: {},
  ROOM_POST: {},
  ROOM_LIST: {},
  MAP_ROOM_LIST: {},
  ROOM_ID: '',
};

type ReviewitemTypes = { [id: string]: RoomReviewlistTypes }; //list[id].뭐시기하면 나옴
type PostitemTypes = { [id: string]: RoomPostlistTypes };
type InfoitemTypes = { [id: string]: RoomInfolistTypes };
type itemTypes = { [id: string]: listTypes };

const room = createSlice({
  name: 'room',
  initialState,
  reducers: {
    dispatchRoomReviewList: (state, action) => {
      const list: ReviewitemTypes = {};
      for (const item of Object.keys(action.payload)) {
        const content = action.payload[item];
        list[item] = content;
      }
      state.ROOM_REVIEW = { ...state.ROOM_REVIEW, ...list };
    },
    dispatchRoomPostList: (state, action) => {
      const list: PostitemTypes = {};
      for (const item of Object.keys(action.payload)) {
        const content = action.payload[item];
        list[item] = content;
      }
      state.ROOM_POST = { ...state.ROOM_POST, ...list };
    },
    dispatchRoomInfoList: (state, action) => {
      const list: InfoitemTypes = {};
      for (const item of Object.keys(action.payload)) {
        const content = action.payload[item];
        list[item] = content;
      }
      state.ROOM_INFO = { ...state.ROOM_INFO, ...list };
    },
    dispatchRoomList: (state, action) => {
      const list: itemTypes = {};
      for (const item of action.payload) {
        list[item.roomID] = item;
      }
      state.ROOM_LIST = { ...state.ROOM_LIST, ...list };
    },
    dispatchMapRoomList: (state, action) => {
      const list: itemTypes = {};
      for (const item of action.payload.data) {
        list[item.roomID] = item;
      }
      state.MAP_ROOM_LIST = list;
    },
    dispatchRoomId: (state, action) => {
      state.ROOM_ID = action.payload;
    },
  },
});

export default room.reducer;

const {
  dispatchRoomReviewList,
  dispatchRoomPostList,
  dispatchRoomInfoList,
  dispatchRoomList,
  dispatchMapRoomList,
  dispatchRoomId,
} = room.actions;

export {
  dispatchRoomReviewList,
  dispatchRoomPostList,
  dispatchRoomInfoList,
  dispatchRoomList,
  dispatchMapRoomList,
  dispatchRoomId,
};
export type { listTypes };
