import { createSlice } from '@reduxjs/toolkit';
import { RoomTypes} from 'types';

const initialState: RoomTypes = {
  RoomInfo: {
    roomId: '',
    userNickname: '',
    longitude: 0,
    latitude: 0,
    sigungu: '',
    dong: '',
    address: '',
    addressDetail: '',
    title: '',
    content: '',
    image: [],
    heartNum: 0,
    viewCount: 0,
    regDate: '',
    roomType: '',
    dealType: '',
    priceUnit: '',
    price: 0,
    deposit: 0,
    managementCost: 0,
    utility: '', //추후에 어레이로 바뀔 수 있음
    totalFloor: 0,
    floor: 0,
    structure: '',
    roomSize: 0,
    startedAt: '',
    finishedAt: '',
    tenancyAgreement: false,
    advantage: '', //추후에 어레이로 바뀔 수 있음
    option: '', //추후에 어레이로 바뀔 수 있음
  },
  RoomReview: {
    buildingID: '',
    totalRate: 0,
    cleanRate: 0,
    noiseRate: 0,
    accessRate: 0,
    hostRate: 0,
    facilityRate: 0,
  }
};

const room = createSlice({
  name: 'room',
  initialState,
  reducers: {
    dispatchRoomList: (state, action) => {
      state.RoomInfo = action.payload.RoomInfo;
      state.RoomReview = action.payload.RoomReview;
    },
  },
});

export const {
  dispatchRoomList,
} = room.actions;

export default room.reducer;
