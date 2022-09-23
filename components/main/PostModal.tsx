import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenPostModal, dispatchTabBarOpenPlus } from "store/modules/tab";

export default function PostModal() {

    const [state,dispatch] = useTabRedux();

    return (
        <div className="bg-blur w-full sm:w-[375px] h-screen fixed z-20"
            onClick={(e) => {
                if(e.target == e.currentTarget) {
                    dispatch(
                        dispatchTabBarOpenPlus(!state.TABBAR_OPEN_PLUS)
                    )
                    dispatch(
                        dispatchTabBarOpenPostModal(!state.TABBAR_OPEN_POSTMODAL)
                    )
                }
            }}
        >
            <div className="gap-4 flex items-center justify-between bg-white top-[350px] w-[250px] h-[120px] absolute z-20 rounded-standard_rounded translate-x-2/4 right-[50%] ">
                <div className="hover:text-hover_orange">
                    <div className="ml-[44px]">
                        <Image
                            alt="채팅로고"
                            src={require("../../assets/icon/main/tabBar/채팅메뉴_작성.svg")}
                        />
                    </div>
                    <div className="ml-[36px] Pretendard-SemiBold text-[15px]">방 내놓기</div>
                </div>
                <div className="h-full border-r"></div>
                <div>
                    <div className="ml-[7px]">
                        <Image
                            alt="채팅로고"
                            src={require("../../assets/icon/main/tabBar/채팅메뉴_작성.svg")}
                        />
                    </div>
                    <div className="mr-[36px] Pretendard-SemiBold text-[15px]">후기 작성</div>
                </div>
            </div>
        </div>
    )
    
}