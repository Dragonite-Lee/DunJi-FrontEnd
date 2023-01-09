import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from 'types';

const initialState: LoadingState = {
  START_LOADING: false,
  FINISH_LOADING: true,
};

const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.START_LOADING = true;
      state.FINISH_LOADING = false;
    },
    finishLoading: (state, action) => {
      state.START_LOADING = false;
      state.FINISH_LOADING = true;
    },
  },
});

export default loading.reducer;

export const { startLoading, finishLoading } = loading.actions;
