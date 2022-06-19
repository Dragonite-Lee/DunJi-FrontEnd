import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { all } from "redux-saga/effects";

import roomRegister, { roomRegisterSaga } from "./roomRegister";
import loading from "./loading";

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return combineReducers({
        roomRegister,
        loading,
    })(state, action);
};
export type RootState = ReturnType<typeof reducer>;

export default reducer;

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
    yield all([roomRegisterSaga()]);
}
