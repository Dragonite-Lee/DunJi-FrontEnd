import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Chat() {

    const [state,dispatch] = useTabRedux();
    
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(state.TABBAR_OPEN_HOME == true && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                localStorage.setItem("chat",'true')
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                localStorage.removeItem("home")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == true && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                localStorage.setItem("chat",'true')
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                localStorage.removeItem("search")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == true) {
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                localStorage.setItem("chat",'true')
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                localStorage.removeItem("mypage")
            }
        }
        
        
    }
    const chat = typeof window !== 'undefined' ? localStorage.getItem("chat") : null;

    return (
        <div>
            {chat ? (
                <Image 
                    onClick={() => {
                        dispatch(
                            dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                        )
                    }}
                    width={30}
                    height={30}
                    alt="채팅로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_채팅_활성화.svg")} 
                />
            ) : (
                <Link href="/chat">
                    <Image 
                        onClick={close}
                        width={30}
                        height={30}
                        alt="채팅로고"
                        src={require("../../../assets/icon/main/tabBar/메뉴바_채팅_비활성화.svg")} 
                    />
                </Link>
            )}
        </div>
  
    )

    
}
