import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginState } from 'types';

const initialState: LoginState = {
  value: {
    USER_ID: '',
    USER_NICKNAME: '',
    IS_LOGIN: false,
  },
  school: '',
  email: '',
  authNumber: 0,
  AUTHNUMBER_OPEN: false,
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    dispatchHandleLogin: (
      state,
      action: PayloadAction<{
        USER_ID: string;
        USER_NICKNAME: string;
        status: boolean;
      }>,
    ) => {
      state.value.USER_ID = action.payload.USER_ID;
      state.value.USER_NICKNAME = action.payload.USER_NICKNAME;
      state.value.IS_LOGIN = action.payload.status;
    },
    dispatchSchool: (state, action) => {
      state.school = action.payload;
    },
    dispatchEmail: (state, action) => {
      state.email = action.payload;
    },
    dispatchAuthNumber: (state, action) => {
      state.authNumber = action.payload;
    },
    dispatchAuthNumberOpen: (state, action) => {
      state.AUTHNUMBER_OPEN = action.payload;
    },
  },
});

export const {
  dispatchHandleLogin,
  dispatchSchool,
  dispatchEmail,
  dispatchAuthNumber,
  dispatchAuthNumberOpen,
} = login.actions;

export default login.reducer;
