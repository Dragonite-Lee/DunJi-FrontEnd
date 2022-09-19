import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/main";

export default function Home() {

    const [state,dispatch] = useMainRedux();
    
    console.log(state.TABBAR_OPEN_HOME)
    // let href = window.location.href
    function close() {
        if(state.TABBAR_OPEN_HOME == false && state.TABBAR_OPEN_SEARCH == true) {
            dispatch(
                dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
            )
            dispatch(
                dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
            )
        }
    }

    return (
        <div>
            {state.TABBAR_OPEN_HOME ? (
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
