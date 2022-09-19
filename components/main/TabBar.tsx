import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenPlus, dispatchTabBarOpenChat, dispatchTabBarOpenMypage } from "store/modules/main";
import Home from "./tabBar/Home";
import Search from "./tabBar/Search";
import Chat from "./tabBar/Chat";
import Mypage from "./tabBar/Mypage";

export default function TabBar() {

    const [state,dispatch] = useMainRedux();
    
    console.log(state.TABBAR_OPEN_HOME)
    

    return (
        <div className="z-20 flex fixed bottom-0 w-full h-[73px] bg-background_beige">
            <Home />
            <Search />
            <Chat />
            <Mypage />
        </div>
    )

    
}
