import { createSlice } from '@reduxjs/toolkit';

import { ReviewRegisterState } from 'types';

const initialState: ReviewRegisterState = {
  COMPONENT_HANDLER: 0,
  POSTCODE_OPEN: false,
  ADDRESS_OPEN: true,
  registrant: '',
  content: '',
  address: '',
  detailAddress: '',
  total: [],
  totalNum: 0,
  clean: 3,
  sound: 3,
  accessible: 3,
  landlord: 3,
  facility: 3,
  periodFrom: '',
  periodTo: '',
  Reviewfile: [],
  ReviewfileUrl: [],
};

const reviewRegister = createSlice({
  name: 'reviewRegister',
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
    dispatchRegistrant: (state, action) => {
      state.registrant = action.payload;
    },
    dispatchContent: (state, action) => {
      state.content = action.payload;
    },
    dispatchMainAddress: (state, action) => {
      state.address = action.payload;
    },
    dispatchDetailAddress: (state, action) => {
      state.detailAddress = action.payload;
    },
    dispatchTotal: (state, action) => {
      state.total = action.payload;
    },
    dispatchTotalNum: (state, action) => {
      state.totalNum = action.payload;
    },
    dispatchClean: (state, action) => {
      state.clean = action.payload;
    },
    dispatchSound: (state, action) => {
      state.sound = action.payload;
    },
    dispatchAccessible: (state, action) => {
      state.accessible = action.payload;
    },
    dispatchLandlord: (state, action) => {
      state.landlord = action.payload;
    },
    dispatchFacility: (state, action) => {
      state.facility = action.payload;
    },
    dispatchPeriodFrom: (state, action) => {
      state.periodFrom = action.payload;
    },
    dispatchPeriodTo: (state, action) => {
      state.periodTo = action.payload;
    },
    dispatchFile: (state, action) => {
      state.Reviewfile = action.payload;
    },
    dispatchFileUrl: (state, action) => {
      state.ReviewfileUrl = action.payload;
    },
  },
});

export const {
  componentHandle,
  dispatchPostCodeOpen,
  dispatchAddressOpen,
  dispatchRegistrant,
  dispatchContent,
  dispatchMainAddress,
  dispatchDetailAddress,
  dispatchTotal,
  dispatchTotalNum,
  dispatchClean,
  dispatchSound,
  dispatchAccessible,
  dispatchLandlord,
  dispatchFacility,
  dispatchPeriodFrom,
  dispatchPeriodTo,
  dispatchFile,
  dispatchFileUrl,
} = reviewRegister.actions;

export default reviewRegister.reducer;
