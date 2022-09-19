import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/main";

export default function Mypage() {

    const [state,dispatch] = useMainRedux();
    
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(state.TABBAR_OPEN_HOME == true && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                sessionStorage.setItem("mypage",'true')
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                sessionStorage.removeItem("home")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == true && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                sessionStorage.setItem("mypage",'true')
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                sessionStorage.removeItem("search")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == true && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                sessionStorage.setItem("mypage",'true')
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                sessionStorage.removeItem("chat")
            }
        }
        
    }
    const mypage = typeof window !== 'undefined' ? sessionStorage.getItem("mypage") : null;

    return (
        <div>
            {mypage ? (
                <Image 
                    onClick={() => {
                        dispatch(
                            dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                        )
                    }}
                    width={30}
                    height={30}
                    alt="마이로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_마이_활성화.svg")} 
                />
            ) : (
                <Link href="/myPage">
                    <Image 
                        onClick={close}
                        width={30}
                        height={30}
                        alt="마이로고"
                        src={require("../../../assets/icon/main/tabBar/메뉴바_마이_비활성화.svg")} 
                    />
                </Link>
            )}
        </div>
    )
}

