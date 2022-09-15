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

const kakaoLogin = (code: any) => {
    return function (dispatch: (arg0: { payload: any; type: string; }) => void, { history }: any){
      logInApi
        .postPermissionCode(code)
        .then((res) => {
          console.log(res); // 토큰이 넘어올 것임
          
          const ACCESS_TOKEN = res.data.accessToken;
          sessionStorage.setItem('Token', ACCESS_TOKEN)
          localStorage.setItem("Token", ACCESS_TOKEN);    
          dispatch(dispatchHandleLogin({
            username: res.data.username,
            nickname: res.data.nickname,
            profileImgUrl: res.data.profileImgUrl,
          }))
          history.replace("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        })
        .catch((err) => {
          console.log("소셜로그인 에러", err);
          window.alert("로그인에 실패하였습니다.");
          history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
        })
    }
}
export default login.reducer;
export const {dispatchHandleLogin} = login.actions;