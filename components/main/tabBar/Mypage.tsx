import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Mypage() {

    const [state,dispatch] = useTabRedux();
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(sessionStorage.getItem('home')) {
                sessionStorage.setItem("mypage",'true')
                sessionStorage.removeItem("home")
            } else if(sessionStorage.getItem('search')) {
                sessionStorage.setItem("mypage",'true')
                sessionStorage.removeItem("search")
            } else if(sessionStorage.getItem('chat')) {
                sessionStorage.setItem("mypage",'true')
                sessionStorage.removeItem("chat")
            }
        }
        
    }
    const mypage = typeof window !== 'undefined' ? sessionStorage.getItem("mypage") : null;

    return (
        <div className="pr-[36px]">
            {mypage ? (
                <Image 
                    width={30}
                    height={30}
                    alt="마이로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_마이_활성화.svg")} 
                    onLoad={() => {
                        sessionStorage.clear();
                        sessionStorage.setItem("mypage",'true')
                    }}
                />
            ) : (
                <Link href="/myPage">
                    <a>
                        <Image 
                            onClick={close}
                            width={30}
                            height={30}
                            alt="마이로고"
                            src={require("../../../assets/icon/main/tabBar/메뉴바_마이_비활성화.svg")} 
                        />
                    </a>
                </Link>
            )}
        </div>
    )
}

