import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Search() {

    const [state,dispatch] = useTabRedux();

    

    function close() {
        if( typeof window !== 'undefined') {
            if(state.TABBAR_OPEN_HOME == true && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                localStorage.setItem("search",'true')
                dispatch(
                    dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
                )
                localStorage.removeItem("home")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == true && state.TABBAR_OPEN_MYPAGE == false) {
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                localStorage.setItem("search",'true')
                dispatch(
                    dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                )
                localStorage.removeItem("chat")
            } else if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == false && state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_MYPAGE == true) {
                dispatch(
                    dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                )
                localStorage.setItem("search",'true')
                dispatch(
                    dispatchTabBarOpenMypage(!state.TABBAR_OPEN_MYPAGE)
                )
                localStorage.removeItem("mypage")
            }
        }
        
    }
    const search = typeof window !== 'undefined' ? localStorage.getItem("search") : null;

    return (
        <div>
            {search ? (
                <Image 
                    onClick={() => {
                        dispatch(
                            dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
                        )
                    }}
                    width={30}
                    height={30}
                    alt="검색로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_검색_활성화.svg")} 
                />
            ) : (
                <Link href="/map">
                    <Image 
                        onClick={close}
                        width={30}
                        height={30}
                        alt="검색로고"
                        src={require("../../../assets/icon/main/tabBar/메뉴바_검색_비활성화.svg")} 
                    />
                </Link>
            )}
        </div>
  
    )

    
}