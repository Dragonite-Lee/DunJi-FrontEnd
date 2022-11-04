import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { all } from "redux-saga/effects";
import roomRegister from "./roomRegister";
import room from "./room";
import main from "./main";
import { roomRegisterSaga } from "saga/roomRegisterSaga";
import loading from "./loading";
import login from "./login";
import tab from "./tab";
import reviewRegister from "./reviewRegister";
import mapFilter from "./filter";
// import storage from 'redux-persist/lib/storage'


// export const persistConfig = {
//     key: 'tab',
//     storage,
//     version: 1,
//     whitelist: ['tab']
// }

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return combineReducers({
        roomRegister,
        room,
        loading,
        main,
        login,
        tab,
        reviewRegister,
        mapFilter,
    })(state, action);
};

export type RootState = ReturnType<typeof reducer>;

export default reducer;


export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
    yield all([roomRegisterSaga()]);
}
