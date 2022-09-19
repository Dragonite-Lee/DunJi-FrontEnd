import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/main";

export default function Home() {

    const [state,dispatch] = useMainRedux();
    
    console.log(state.TABBAR_OPEN_HOME)
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == true && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                sessionStorage.setItem("home",'true')
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                sessionStorage.removeItem("search")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == true && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                sessionStorage.setItem("home",'true')
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                sessionStorage.removeItem("chat")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == true) {
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                sessionStorage.setItem("home",'true')
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                sessionStorage.removeItem("mypage")
            }
        }
        
        
    }
    const home = typeof window !== 'undefined' ? sessionStorage.getItem("home") : null;
    return (
        <div>
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