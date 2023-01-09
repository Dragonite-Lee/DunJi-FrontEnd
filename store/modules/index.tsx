import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { all } from 'redux-saga/effects';

import { roomRegisterSaga } from 'saga/roomRegisterSaga';
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

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([roomRegisterSaga()]);
}

export default rootReducer;
