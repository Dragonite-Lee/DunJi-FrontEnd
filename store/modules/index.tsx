import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import {
  LoadingState,
  LoginState,
  MainState,
  MapFilterState,
  ReviewRegisterState,
  RoomRegisterState,
  RoomState,
  TabState,
} from 'types';
import mapFilter from './filter';
import loading from './loading';
import login from './login';
import main from './main';
import reviewRegister from './reviewRegister';
import room from './room';
import roomRegister from './roomRegister';
import tab from './tab';

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      return combineReducers({
        mapFilter,
        loading,
        login,
        main,
        reviewRegister,
        room,
        roomRegister,
        tab,
      })(state, action);
    }
  }
};

export type RootState = {
  mapFilter: MapFilterState;
  loading: LoadingState;
  login: LoginState;
  main: MainState;
  reviewRegister: ReviewRegisterState;
  room: RoomState;
  roomRegister: RoomRegisterState;
  tab: TabState;
};

export default rootReducer;
