import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Mypage() {

    const [state,dispatch] = useTabRedux();
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(state.TABBAR_OPEN_HOME == true && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                localStorage.setItem("mypage",'true')
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                localStorage.removeItem("home")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == true && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                localStorage.setItem("mypage",'true')
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                localStorage.removeItem("search")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == true && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                localStorage.setItem("mypage",'true')
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                localStorage.removeItem("chat")
            }
        }
        
    }
    const mypage = typeof window !== 'undefined' ? localStorage.getItem("mypage") : null;

    return (
        <div className="pr-[36px]">
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

