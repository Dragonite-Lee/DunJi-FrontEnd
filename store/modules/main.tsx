import { createSlice } from '@reduxjs/toolkit';
import { MainState } from 'types';

// if (typeof window !== 'undefined') {
//     localStorage.setItem('home', 'true')
// }

const initialState: MainState = {
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
