import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logInApi } from "_api";
import useLoginRedux from "hooks/useLoginRedux";
import { dispatchHandleLogin } from "store/modules/login";

export default function Auth() {
    // const getCode = () => {
    //     const id = window.location.href.split("callback?code=")[1];
    //     return id;
    // };

    // useEffect(() => {
    //     async function postCode() {
    //         const code = getCode();
    //         console.log(code);
    //         try {
    //             console.log("start");
    //             let result = await logInApi.postPermissionCode(code);
    //             console.log(result);
    //             console.log("end");
    //         } catch {
    //             alert("로그인을 실패하였습니다. 다시 시도해 주세요.");
    //         } finally {
    //         }
    //     }
    //     postCode();
    // }, []);

    const [state,dispatch] = useLoginRedux();

    let href;
    let params;
    let code: string | null;
    if (typeof window !== "undefined") {
        href = window.location.href;
        params = new URL(href).searchParams;
        code = params.get("code");
    };
    const login = async () => {
        const codeData = await logInApi.postPermissionCode(code);
        dispatch(codeData)
    };
    
    useEffect(() => {
        login();
    },[]);
    

    return <div>로그인 중입니다.</div>;
}
