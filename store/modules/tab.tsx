import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    TABBAR_OPEN_HOME: boolean,
    TABBAR_OPEN_SEARCH: boolean,
    TABBAR_OPEN_PLUS: boolean,
    TABBAR_OPEN_CHAT: boolean,
    TABBAR_OPEN_MYPAGE: boolean,
    TABBAR_OPEN_POSTMODAL: boolean
}



const initialState: initialStateTypes = {
    TABBAR_OPEN_HOME: true,
    TABBAR_OPEN_SEARCH: false,
    TABBAR_OPEN_PLUS: false,
    TABBAR_OPEN_CHAT: false,
    TABBAR_OPEN_MYPAGE: false,
    TABBAR_OPEN_POSTMODAL : false
}

const tab = createSlice({
    name: "tab",
    initialState,
    reducers: {
        dispatchTabBarOpenHome: (state,action) => {
            state.TABBAR_OPEN_HOME = action.payload;
        },
        dispatchTabBarOpenSearch: (state,action) => {
            state.TABBAR_OPEN_SEARCH = action.payload;
        },
        dispatchTabBarOpenPlus: (state,action) => {
            state.TABBAR_OPEN_PLUS = action.payload;
        },
        dispatchTabBarOpenChat: (state,action) => {
            state.TABBAR_OPEN_CHAT = action.payload;
        },
        dispatchTabBarOpenMypage: (state,action) => {
            state.TABBAR_OPEN_MYPAGE = action.payload;
        },
        dispatchTabBarOpenPostModal: (state,action) => {
            state.TABBAR_OPEN_POSTMODAL = action.payload;
        }
    }
})

export default tab.reducer;
export const {
    dispatchTabBarOpenHome,
    dispatchTabBarOpenSearch,
    dispatchTabBarOpenPlus,
    dispatchTabBarOpenChat,
    dispatchTabBarOpenMypage,
    dispatchTabBarOpenPostModal
} = tab.actions;