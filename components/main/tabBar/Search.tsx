import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/main";

export default function Search() {

    const [state,dispatch] = useMainRedux();
    
    function close() {
        if(state.TABBAR_OPEN_HOME == true && state.TABBAR_OPEN_SEARCH == false) {
            dispatch(
                dispatchTabBarOpenSearch(!state.TABBAR_OPEN_SEARCH)
            )
            dispatch(
                dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
            )
        }
    }
    

    return (
        <div>
            {state.TABBAR_OPEN_SEARCH ? (
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
