import { createSlice } from '@reduxjs/toolkit';

import { TabState } from 'types';

const initialState: TabState = {
  TABBAR_OPEN_HOME: true,
  TABBAR_OPEN_SEARCH: false,
  TABBAR_OPEN_PLUS: false,
  TABBAR_OPEN_CHAT: false,
  TABBAR_OPEN_MYPAGE: false,
  TABBAR_OPEN_POSTMODAL: false,
};

const tab = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    dispatchTabBarOpenHome: (state, action) => {
      state.TABBAR_OPEN_HOME = action.payload;
    },
    dispatchTabBarOpenSearch: (state, action) => {
      state.TABBAR_OPEN_SEARCH = action.payload;
    },
    dispatchTabBarOpenPlus: (state, action) => {
      state.TABBAR_OPEN_PLUS = action.payload;
    },
    dispatchTabBarOpenChat: (state, action) => {
      state.TABBAR_OPEN_CHAT = action.payload;
    },
    dispatchTabBarOpenMypage: (state, action) => {
      state.TABBAR_OPEN_MYPAGE = action.payload;
    },
    dispatchTabBarOpenPostModal: (state, action) => {
      state.TABBAR_OPEN_POSTMODAL = action.payload;
    },
  },
});

export const {
  dispatchTabBarOpenHome,
  dispatchTabBarOpenSearch,
  dispatchTabBarOpenPlus,
  dispatchTabBarOpenChat,
  dispatchTabBarOpenMypage,
  dispatchTabBarOpenPostModal,
} = tab.actions;

export default tab.reducer;
