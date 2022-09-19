import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenPlus, dispatchTabBarOpenChat, dispatchTabBarOpenMypage } from "store/modules/main";
import Home from "./tabBar/Home";
import Search from "./tabBar/Search";
import Chat from "./tabBar/Chat";
export default function TabBar() {

    const [state,dispatch] = useMainRedux();
    
    console.log(state.TABBAR_OPEN_HOME)
    // let href = window.location.href
    
    // useEffect(()=> {
    //     function close() {
    //         if (state.TABBAR_OPEN_SEARCH == true) {
    //             dispatch(
    //                 dispatchTabBarOpenHome(!state.TABBAR_OPEN_HOME)
    //             )
    //         }
    //     }
    //     close()
    // },[])

    return (
        <div className="z-20 flex fixed bottom-0 w-full h-[73px] bg-background_beige">
            <Home />
            <Search />
            <Chat />
        </div>
    )

    
}
