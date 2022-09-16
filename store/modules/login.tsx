import { createSlice } from "@reduxjs/toolkit";
import { logInApi } from "_api";

type initialStateTypes = {
    USER: any,
    IS_LOGIN: boolean
}

const initialState: initialStateTypes = {
    USER: null,
    IS_LOGIN: false,
}

const login = createSlice({
    name: "login",
    initialState,
    reducers: {
        dispatchHandleLogin: (state, action) => {
            state.USER = action.payload;
            state.IS_LOGIN = true;
        }
    }
})



export default login.reducer;
export const {dispatchHandleLogin} = login.actions;