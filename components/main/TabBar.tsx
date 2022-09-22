import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenPlus, dispatchTabBarOpenChat, dispatchTabBarOpenMypage } from "store/modules/tab";
import Home from "./tabBar/Home";
import Search from "./tabBar/Search";
import Chat from "./tabBar/Chat";
import Mypage from "./tabBar/Mypage";
import Plus from "./tabBar/Plus";
import PostModal from "./PostModal";

export default function TabBar() {

    const [state,dispatch] = useTabRedux();
    
    console.log(state.TABBAR_OPEN_HOME)
    console.log(state.TABBAR_OPEN_SEARCH)
    console.log(state.TABBAR_OPEN_CHAT)
    console.log(state.TABBAR_OPEN_MYPAGE)
    

    return (
        <>
            {state.TABBAR_OPEN_POSTMODAL ? (
                <PostModal />
            ) : (
                null
            )}
            <div className="z-10 flex items-center justify-between fixed bottom-0 w-full h-[73px] bg-background_beige">
                <Home />
                <Search />
                <Plus />
                <Chat />
                <Mypage />
            </div>
        </>
    )

    
}
