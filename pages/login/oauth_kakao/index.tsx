import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logInApi } from "_api";
import useLoginRedux from "hooks/useLoginRedux";
import { dispatchHandleLogin } from "store/modules/login";
// import { kakaoLogin } from "store/modules/login";
import React from "react";
import Router from "next/router";

interface ResponseType {
    ok: boolean;
    error?: any;
  }

export default function Auth() {

    const [state,dispatch] = useLoginRedux();    

    function kakaologin(code: any) {
        logInApi
            .postPermissionCode(code)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        let href;
        let code: string | null;
        if (typeof window !== "undefined") {
            href = window.location.href;
            code = new URL(href).searchParams.get("code");
            

        console.log(code)
            logInApi
                .postPermissionCode(code)
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                })
            
        };     
    }, [])

        
    
    
    return <div>로그인 중입니다. </div>;
}
