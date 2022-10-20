import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenHome, dispatchTabBarOpenSearch, dispatchTabBarOpenChat, dispatchTabBarOpenMypage} from "store/modules/tab";

export default function Chat() {

    const [state,dispatch] = useTabRedux();
    
    
    
    function close() {
        if( typeof window !== 'undefined') {
            if(sessionStorage.getItem('home')) {
                sessionStorage.setItem("chat",'true')
                sessionStorage.removeItem("home")
            } else if(sessionStorage.getItem('search')) {
                sessionStorage.setItem("chat",'true')
                sessionStorage.removeItem("search")
            } else if(sessionStorage.getItem('mypage')) {
                sessionStorage.setItem("chat",'true')
                sessionStorage.removeItem("mypage")
            }
        }
        
        
    }
    const chat = typeof window !== 'undefined' ? sessionStorage.getItem("chat") : null;

    return (
        <div>
            {chat ? (
                <Image 
                    width={30}
                    height={30}
                    alt="채팅로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_채팅_활성화.svg")} 
                    onLoad={() => {
                        sessionStorage.clear();
                        sessionStorage.setItem("chat",'true');
                    }}
                />
            ) : (
                <Link href="/chat">
                    <a>
                        <Image 
                            onClick={close}
                            width={30}
                            height={30}
                            alt="채팅로고"
                            src={require("../../../assets/icon/main/tabBar/메뉴바_채팅_비활성화.svg")} 
                        />
                    </a>
                </Link>
            )}
        </div>
  
    )

    
}
