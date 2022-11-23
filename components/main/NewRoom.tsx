import Link from "next/link"
import { mainApi } from "_api"
import { useState, useEffect, useCallback } from "react";
import useMainRedux from "hooks/useMainRedux";
import { dispatchNewRoom } from "store/modules/main";
import useRoomSizeConvert from "hooks/useRoomSizeConvert";
import Image from "next/image";

export default function NewRoom() {

    const [state, dispatch] = useMainRedux();
    

    useEffect(()=>{
        const id = localStorage.getItem('userId');

        mainApi
            .newRoom(id)
            .then((res) => {
                // console.log(res.data)
                dispatch(dispatchNewRoom(res.data))
                console.log(state.newRoom)
            })
            .catch((error) => {
                console.log(error)
            })
    },[dispatch])

    return (
        <div className="pt-[55px] ">
            <div className="flex justify-between items-center">
                <div className="text-[17px] Pretendard-SemiBold">
                    새로 들어온 둥지에요!
                </div>
                <Link href="#">
                    <a className="text-[12px] Pretendard-Regular text-font_gray">
                        더보기
                    </a>
                </Link>
            </div>
            <div className="pt-[14px] h-full flex overflow-x-auto overflow-y-hidden">
                {state.newRoom.map((data: any,index: number)=>(
                    <div key={index} className="w-[140px] mr-[16px]">
                        <div>
                            {/* *이미지칸 */}
                            <Image 
                                src={require('../../assets/icon/main/main_char.png')}
                                layout="fixed"
                                objectFit="fill"
                                width={140}
                                height={105}
                                alt="대표방이미지"
                            />
                        </div>
                        <div>
                            <div className="pt-[8px] text-[15px] Pretendard-SemiBold">{data.priceUnit}세 {data.deposit} / {data.price}</div>
                            <div className="pt-[4px] text-[12px] Pretendard-Regular">{data.address}</div>
                            <div className="pt-[2px] text-font_gray text-[14px] Pretendard-Regular">{data.struct} {data.roomType}, {data.floor}층</div>
                            <div className="pt-[2px] text-font_gray text-[14px] Pretendard-Regular">{data.roomSize}m<sup>2</sup> / {useRoomSizeConvert(data.roomSize)}평</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    
}
