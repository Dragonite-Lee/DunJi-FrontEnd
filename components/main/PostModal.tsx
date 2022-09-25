import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTabRedux from "hooks/useTabRedux";
import { dispatchTabBarOpenPostModal, dispatchTabBarOpenPlus } from "store/modules/tab";

export default function PostModal() {

    const [state,dispatch] = useTabRedux();

    return (
        <div className="bg-blur w-full sm:w-[375px] h-screen fixed z-30"
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
            <div className="gap-4 flex items-center justify-between bg-white top-[350px] w-[250px] h-[120px] absolute z-30 rounded-standard_rounded translate-x-2/4 right-[50%] ">
                <Link href="/room/register/agreePage">
                    <div className="ml-[36px] hover:text-hover_orange">
                        <div className="ml-[6px]">
                            <Image
                                alt="채팅로고"
                                src={require("../../assets/icon/main/tabBar/채팅메뉴_작성.svg")}
                            />
                        </div>
                        <div className=" Pretendard-SemiBold text-[15px]">방 내놓기</div>
                    </div>
                </Link>
                <div className="h-full border-r"></div>
                <div className="mr-[36px] hover:text-hover_orange">
                    <div className="ml-[8px]">
                        <Image
                            alt="채팅로고"
                            src={require("../../assets/icon/main/tabBar/채팅메뉴_작성.svg")}
                        />
                    </div>
                    <div className=" Pretendard-SemiBold text-[15px]">후기 작성</div>
                </div>
            </div>
        </div>
    )
    
}