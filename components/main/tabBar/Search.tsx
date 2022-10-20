import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Search() {

    const [state,dispatch] = useTabRedux();

    

    function close() {
        if( typeof window !== 'undefined') {
            if(sessionStorage.getItem('home')) {
                sessionStorage.removeItem("home")
                sessionStorage.setItem("search",'true')
            } else if(sessionStorage.getItem('chat')) {
                sessionStorage.setItem("search",'true')
                sessionStorage.removeItem("chat")
            } else if(sessionStorage.getItem('mypage')) {
                sessionStorage.setItem("search",'true')
                sessionStorage.removeItem("mypage")
            }
        }
        
    }
    const search = typeof window !== 'undefined' ? sessionStorage.getItem("search") : null;

    return (
        <div>
            {search ? (
                <Image 
                    width={30}
                    height={30}
                    alt="검색로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_검색_활성화.svg")} 
                    onLoad={() => {
                        sessionStorage.clear();
                        sessionStorage.setItem("search",'true')
                    }}
                />
            ) : (
                <Link href="/map">
                    <a>
                        <Image 
                            onClick={close}
                            width={30}
                            height={30}
                            alt="검색로고"
                            src={require("../../../assets/icon/main/tabBar/메뉴바_검색_비활성화.svg")} 
                        />
                    </a>
                </Link>
            )}
        </div>
  
    )

    
}