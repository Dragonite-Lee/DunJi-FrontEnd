import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenPlus,dispatchTabBarOpenPostModal} from "store/modules/tab";

export default function Plus() {

    const [state,dispatch] = useTabRedux();

    
    
    

    return (
        <div>
            {state.TABBAR_OPEN_PLUS ? (
                <Image 
                    
                    width={30}
                    height={30}
                    alt="검색로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_글올리기_활성화.svg")} 
                />
            ) : (
                <Image 
                    onClick={() => {
                        dispatch(
                            dispatchTabBarOpenPlus(!state.TABBAR_OPEN_PLUS)
                        )
                        dispatch(
                            dispatchTabBarOpenPostModal(!state.TABBAR_OPEN_POSTMODAL)
                        )
                    }}
                    width={30}
                    height={30}
                    alt="플러스로고"
                    src={require("../../../assets/icon/main/tabBar/메뉴바_글올리기_비활성화.svg")} 
                />
                
            )}
        </div>
  
    )

    
}