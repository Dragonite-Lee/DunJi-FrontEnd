import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logInApi } from '_api';

type initialStateTypes = {
  value: {
    USER_ID: string;
    USER_NICKNAME: string;
    IS_LOGIN: boolean;
  };
};

const initialState: initialStateTypes = {
  value: {
    USER_ID: '',
    USER_NICKNAME: '',
    IS_LOGIN: false,
  },
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
  },
});

export default login.reducer;
export const { dispatchHandleLogin } = login.actions;
