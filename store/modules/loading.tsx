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
    startLoading: (state) => {
      state.START_LOADING = true;
      state.FINISH_LOADING = false;
    },
    finishLoading: (state) => {
      state.START_LOADING = false;
      state.FINISH_LOADING = true;
    },
  },
});

export const { startLoading, finishLoading } = loading.actions;

export default loading.reducer;
