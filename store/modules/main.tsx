import { createSlice } from '@reduxjs/toolkit';

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

type newReviewType = {
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

type initialStateTypes = {
  SEARCHMODAL_OPEN: boolean;
  SEARCHRESULT: any[];
  SLIDEBOX: any[];
  newRoom: newRoomType[];
  newReview: newReviewType[];
};

// if (typeof window !== 'undefined') {
//     localStorage.setItem('home', 'true')
// }

const initialState: initialStateTypes = {
  SEARCHMODAL_OPEN: false,
  SEARCHRESULT: [],
  SLIDEBOX: [
    '../assets/icon/main/slide/slide1.jpg',
    '../assets/icon/main/slide/slide2.jpg',
    '../assets/icon/main/slide/slide3.jpg',
  ],
  newRoom: [],
  newReview: [],
};

const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    dispatchSearchModalOpen: (state, action) => {
      state.SEARCHMODAL_OPEN = action.payload;
    },
    dispatchSearchResult: (state, action) => {
      state.SEARCHRESULT = action.payload;
    },
    dispatchSlideBox: (state, action) => {
      state.SLIDEBOX = action.payload;
    },
    dispatchNewRoom: (state, action) => {
      state.newRoom = action.payload;
    },
    dispatchNewReview: (state, action) => {
      state.newReview = action.payload;
    },
  },
});

export default main.reducer;
export const {
  dispatchSearchModalOpen,
  dispatchSearchResult,
  dispatchSlideBox,
  dispatchNewRoom,
  dispatchNewReview,
} = main.actions;
