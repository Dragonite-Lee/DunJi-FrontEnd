import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/main";

export default function Chat() {

    const [state,dispatch] = useMainRedux();
    
    console.log(state.TABBAR_OPEN_CHAT)
    // let href = window.location.href
    function close() {
        if(state.TABBAR_OPEN_CHAT == false && state.TABBAR_OPEN_SEARCH == true) {
            dispatch(
                dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
            )
            dispatch(
                dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
            )
        }
    }

    return (
        <div>
            {state.TABBAR_OPEN_CHAT ? (
                <Image 
                    onClick={() => {
                        dispatch(
                            dispatchTabBarOpenChat(!state.TABBAR_OPEN_CHAT)
                        )
                    }}
                    width={30}
                    height={30}
                    alt="홈로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_채팅_활성화.svg")} 
                />
            ) : (
                <Link href="/chat">
                    <Image 
                        onClick={close}
                        width={30}
                        height={30}
                        alt="홈로고"
                        src={require("../../../assets/icon/main/tabBar/메뉴바_채팅_비활성화.svg")} 
                    />
                </Link>
            )}
        </div>
  
    )

    
}
