import { createSlice } from '@reduxjs/toolkit';

import { RoomRegisterState } from 'types';

const initialState: RoomRegisterState = {
  COMPONENT_HANDLER: 0,
  POSTCODE_OPEN: false,
  ADDRESS_OPEN: true,
  DETAIL_COMPONENT_OPEN: false,
  longitude: 0,
  latitude: 0,
  userId: '',
  sigungu: '',
  dong: '',
  address: '',
  addressDetail: '',
  roomType: '',
  dealType: '',
  priceUnit: '',
  deposit: '',
  price: '',
  manage: 1,
  managementCost: '',
  utility: [0, 0, 0, 0, 0],
  totalFloor: '전체층',
  floor: '현재층',
  structure: '구조',
  roomSize: '',
  startedAt: '',
  finishedAt: '',
  tenancyAgreement: 0,
  optionAll: 1,
  option: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  advantage: [0, 0, 0, 0, 0],
  elevator: 0,
  car: 2,
  pet: 2,
  women: 2,
  loan: 2,
  title: '',
  content: '',
  mainImage: [],
  mainImageUrl: [],
  room1Image: [],
  room1ImageUrl: [],
  room2Image: [],
  room2ImageUrl: [],
};

const roomRegister = createSlice({
  name: 'roomRegister',
  initialState,
  reducers: {
    componentHandle: (state, action) => {
      state.COMPONENT_HANDLER = action.payload;
    },
    dispatchPostCodeOpen: (state, action) => {
      state.POSTCODE_OPEN = action.payload;
    }, // postcode 컴포넌트 열고 닫기
    dispatchAddressOpen: (state, action) => {
      state.ADDRESS_OPEN = action.payload;
    },
    detailComponentHandle: (state, action) => {
      state.DETAIL_COMPONENT_OPEN = action.payload;
    },
    dispatchLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    dispatchLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    dispatchUserId: (state, action) => {
      state.userId = action.payload;
    },
    dispatchSigungu: (state, action) => {
      state.sigungu = action.payload;
    },
    dispatchDong: (state, action) => {
      state.dong = action.payload;
    },
    dispatchMainAddress: (state, action) => {
      state.address = action.payload;
    },
    dispatchAddressDetail: (state, action) => {
      state.addressDetail = action.payload;
    },
    dispatchRoomType: (state, action) => {
      state.roomType = action.payload;
    },
    dispatchDealType: (state, action) => {
      state.dealType = action.payload;
    },
    dispatchPriceUnit: (state, action) => {
      state.priceUnit = action.payload;
    },
    dispatchDeposit: (state, action) => {
      state.deposit = action.payload;
    },
    dispatchPrice: (state, action) => {
      state.price = action.payload;
    },
    dispatchManage: (state, action) => {
      state.manage = action.payload;
    },
    dispatchManagementCost: (state, action) => {
      state.managementCost = action.payload;
    },
    dispatchManageSelect: (state, action) => {
      state.utility = action.payload;
    },
    dispatchTotalFloor: (state, action) => {
      state.totalFloor = action.payload;
    },
    dispatchCurrentFloor: (state, action) => {
      state.floor = action.payload;
    },
    dispatchStructure: (state, action) => {
      state.structure = action.payload;
    },
    dispatchElevator: (state, action) => {
      state.elevator = action.payload;
    },
    dispatchRoomSize: (state, action) => {
      state.roomSize = action.payload;
    },
    dispatchStartedAt: (state, action) => {
      state.startedAt = action.payload;
    },
    dispatchFinishedAt: (state, action) => {
      state.finishedAt = action.payload;
    },
    dispatchTenancyAgreement: (state, action) => {
      state.tenancyAgreement = action.payload;
    },
    dispatchOption: (state, action) => {
      state.optionAll = action.payload;
    },
    dispatchOptionSelect: (state, action) => {
      state.option = action.payload;
    },
    dispatchCar: (state, action) => {
      state.car = action.payload;
    },
    dispatchPet: (state, action) => {
      state.pet = action.payload;
    },
    dispatchWomen: (state, action) => {
      state.women = action.payload;
    },
    dispatchLoan: (state, action) => {
      state.loan = action.payload;
    },
    dispatchTitle: (state, action) => {
      state.title = action.payload;
    },
    dispatchContent: (state, action) => {
      state.content = action.payload;
    },
    dispatchMainImage: (state, action) => {
      state.mainImage = action.payload;
    },
    dispatchMainImageUrl: (state, action) => {
      state.mainImageUrl = action.payload;
    },
    dispatchRoom1Image: (state, action) => {
      state.room1Image = action.payload;
    },
    dispatchRoom1ImageUrl: (state, action) => {
      state.room1ImageUrl = action.payload;
    },
    dispatchRoom2Image: (state, action) => {
      state.room2Image = action.payload;
    },
    dispatchRoom2ImageUrl: (state, action) => {
      state.room2ImageUrl = action.payload;
    },
  },
});

export const {
  componentHandle,
  dispatchPostCodeOpen,
  dispatchAddressOpen,
  dispatchMainAddress,
  detailComponentHandle,
  dispatchLongitude,
  dispatchLatitude,
  dispatchSigungu,
  dispatchDong,
  dispatchAddressDetail,
  dispatchRoomType,
  dispatchDealType,
  dispatchPriceUnit,
  dispatchDeposit,
  dispatchPrice,
  dispatchManage,
  dispatchManagementCost,
  dispatchManageSelect,
  dispatchTotalFloor,
  dispatchCurrentFloor,
  dispatchStructure,
  dispatchElevator,
  dispatchRoomSize,
  dispatchStartedAt,
  dispatchFinishedAt,
  dispatchOption,
  dispatchOptionSelect,
  dispatchTenancyAgreement,
  dispatchCar,
  dispatchPet,
  dispatchWomen,
  dispatchLoan,
  dispatchTitle,
  dispatchContent,
  dispatchMainImage,
  dispatchMainImageUrl,
  dispatchRoom1Image,
  dispatchRoom1ImageUrl,
  dispatchRoom2Image,
  dispatchRoom2ImageUrl,
  dispatchUserId,
} = roomRegister.actions;

export default roomRegister.reducer;
