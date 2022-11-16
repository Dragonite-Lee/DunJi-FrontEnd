import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Mypage() {

    const [state,dispatch] = useTabRedux();
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(localStorage.getItem('home')) {
                localStorage.setItem("mypage",'true')
                localStorage.removeItem("home")
            } else if(localStorage.getItem('search')) {
                localStorage.setItem("mypage",'true')
                localStorage.removeItem("search")
            } else if(localStorage.getItem('chat')) {
                localStorage.setItem("mypage",'true')
                localStorage.removeItem("chat")
            }
        }
        
    }
    const mypage = typeof window !== 'undefined' ? localStorage.getItem("mypage") : null;

    return (
        <div className="pr-[36px]">
            {mypage ? (
                <Image 
                    width={30}
                    height={30}
                    alt="마이로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_마이_활성화.svg")} 
                    onLoad={() => {
                        localStorage.clear();
                        localStorage.setItem("mypage",'true')
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

