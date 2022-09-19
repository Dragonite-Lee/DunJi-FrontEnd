import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    SEARCHMODAL_OPEN: boolean,
    SEARCHRESULT: any[],
    SLIDEBOX: any[],
    TABBAR_OPEN_HOME: boolean,
    TABBAR_OPEN_SEARCH: boolean,
    TABBAR_OPEN_PLUS: boolean,
    TABBAR_OPEN_CHAT: boolean,
    TABBAR_OPEN_MYPAGE: boolean,
}

const initialState: initialStateTypes = {
    SEARCHMODAL_OPEN: false,
    SEARCHRESULT: [],
    SLIDEBOX: ["../assets/icon/main/slide/cat1.jpg","../assets/icon/main/slide/cat2.jpg","../assets/icon/main/slide/cat3.jpg"],
    TABBAR_OPEN_HOME: true,
    TABBAR_OPEN_SEARCH: false,
    TABBAR_OPEN_PLUS: false,
    TABBAR_OPEN_CHAT: false,
    TABBAR_OPEN_MYPAGE: false
}

const main = createSlice({
    name: "main",
    initialState,
    reducers: {
        dispatchSearchModalOpen: (state, action) => {
            state.SEARCHMODAL_OPEN = action.payload;
        },
        dispatchSearchResult: (state, action) => {
            state.SEARCHRESULT = action.payload;
        },
        dispatchSlideBox: (state, action) => {
            state.SLIDEBOX = action.payload;
        },
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
        }
    }
})

export default main.reducer;
export const {
    dispatchSearchModalOpen, 
    dispatchSearchResult, 
    dispatchSlideBox,
    dispatchTabBarOpenHome,
    dispatchTabBarOpenSearch,
    dispatchTabBarOpenPlus,
    dispatchTabBarOpenChat,
    dispatchTabBarOpenMypage
} = main.actions;