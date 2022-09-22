import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    SEARCHMODAL_OPEN: boolean,
    SEARCHRESULT: any[],
    SLIDEBOX: any[],
}

// if (typeof window !== 'undefined') {
//     localStorage.setItem('home', 'true')
// }

const initialState: initialStateTypes = {
    SEARCHMODAL_OPEN: false,
    SEARCHRESULT: [],
    SLIDEBOX: ["../assets/icon/main/slide/cat1.jpg","../assets/icon/main/slide/cat2.jpg","../assets/icon/main/slide/cat3.jpg"],
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
    }
})

export default main.reducer;
export const {
    dispatchSearchModalOpen, 
    dispatchSearchResult, 
    dispatchSlideBox,
} = main.actions;