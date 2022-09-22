import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logInApi } from "_api";
import useLoginRedux from "hooks/useLoginRedux";
import {dispatchHandleLogin } from "store/modules/login";
import React from "react";
import Router from "next/router";


export default function Auth() {

    const [state,dispatch] = useLoginRedux();    

    useEffect(() => {
        let href;
        let code: string | null;
        if (typeof window !== "undefined") {
            href = window.location.href;
            code = new URL(href).searchParams.get("code");
            

        // console.log(code)
            logInApi
                .postPermissionCode(code)
                .then((res) => {
                    console.log(res)
                    localStorage.setItem('userId', res.data.user_id);
                    localStorage.setItem('userNickname', res.data.user_nickname);
                    dispatch(dispatchHandleLogin({
                        USER_ID: res.data.user_id,
                        USER_NICKNAME: res.data.user_nickname,
                        status: true
                    }));
                    Router.push('/')
                })
                .catch((error) => {
                    console.log(error)
                    window.alert('로그인실패')
                    Router.push('/login')
                })
            
        };     
    }, [])

        
    
    
    return <div>로그인 중입니다. </div>;
}
