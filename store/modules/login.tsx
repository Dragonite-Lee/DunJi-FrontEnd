import { createSlice } from "@reduxjs/toolkit";
import { logInApi } from "_api";

type initialStateTypes = {
    value: {
        USER_ID: any,
        USER_NICKNAME: any,
        IS_LOGIN: boolean
    }
}

const initialState: initialStateTypes = {
    value: {
        USER_ID: '',
        USER_NICKNAME: '',
        IS_LOGIN: false,
    }
    
}

const login = createSlice({
    name: "login",
    initialState,
    reducers: {
        dispatchHandleLogin: (state, action) => {
            state.value = action.payload
        }
    }
})



export default login.reducer;
export const {dispatchHandleLogin} = login.actions;