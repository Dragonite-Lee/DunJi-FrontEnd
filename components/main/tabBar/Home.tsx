import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Home() {

    const [state,dispatch] = useTabRedux();
    
    // console.log(state.TABBAR_OPEN_HOME)
    
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == true && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                localStorage.setItem("home",'true')
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                localStorage.removeItem("search")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == true && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                localStorage.setItem("home",'true')
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                localStorage.removeItem("chat")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == true) {
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                localStorage.setItem("home",'true')
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                localStorage.removeItem("mypage")
            } 
        }  
    }
    const home = typeof window !== 'undefined' ? localStorage.getItem("home") : null;
    return (
        <div className="pl-[36px]">
            {home ? (
                <Image 
                    onClick={() => {
                        dispatch(
                            dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                        )
                    }}
                    width={30}
                    height={30}
                    alt="홈로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_홈_활성화.svg")} 
                />
            ) : (
                <Link href="/">
                    <Image 
                        onClick={close}
                        width={30}
                        height={30}
                        alt="홈로고"
                        src={require("../../../assets/icon/main/tabBar/메뉴바_홈_비활성화.svg")} 
                    />
                </Link>
            )}
        </div>
  
    )

    
}