import { useState } from "react";
import OpenLayout from "./OpenLayout";
import InfoField from "./InfoField";
import Image from "next/image";

type propsType = {
    elevator: boolean;
    car: number;
    pet: boolean;
    women: boolean;
    loan: boolean;
    aircon: boolean;
    bed: boolean;
    closet: boolean;
    desk: boolean;
    gas: boolean;
    induc: boolean;
    micro: boolean;
    sink: boolean;
    shoe: boolean;
    shelf: boolean;
    refri: boolean;
    washer: boolean;
};

export default function Option({elevator, car, pet, women, loan, aircon, bed, closet, desk, gas, induc, micro, sink, shelf, shoe, refri, washer}:propsType) {
    const [open, setOpen] = useState(false);
    
    const a = [];
    const op = [aircon, bed, closet, desk, gas, induc, micro, sink, shelf, shoe, refri, washer];
    for(let i = 0; op.length; i++) {
        if( op[i] == true) {
            a.push(op[i])
        }
    }
    console.log(a);

    const imgArr = [
        {
            title: "에어컨",
            data: aircon,
        },
        {
            title: "냉장고",
            data: refri,
        },
        {
            title: "세탁기",
            data: washer,
        },
        {
            title: "가스레인지",
            data: gas,
        },
        {
            title: "인덕션",
            data: induc,
        },
        {
            title: "전자레인지",
            data: micro,
        },
        {
            title: "책상",
            data: desk,
        },
        {
            title: "책장",
            data: shelf,
        },
        {
            title: "침대",
            data: bed,
        },
        {
            title: "옷장",
            data: closet,
        },
        {
            title: "싱크대",
            data: sink,
        },
        {
            title: "신발장",
            data: shoe,
        },
    ];

    const arr = [
        {
            title: "앨레베이터",
            data: elevator ? "O" : "X",
        },
        {
            title: "주차공간",
            data: car ? "O" : "X",
        },
        {
            title: "반려동물",
            data: pet ? "O" : "X",
        },
        {
            title: "여성전용",
            data: women ? "O" : "X",
        },
        {
            title: "전세대출",
            data: loan ? "O" : "X",
        },
    ];
    const openHandler = () => setOpen(!open);
    return (
        <div className="w-full rounded-standard_rounded bg-component_white my-4">
            <div
                onClick={openHandler}
                className={`${
                    open && `border-b border-border_color`
                } h-20 text-[17px] Pretendard-SemiBold  flex items-center px-[18px]`}
            >
                옵션 정보
                <div
                    className={`ml-auto w-10 h-12 relative ${
                        open && "rotate-180"
                    }`}
                >
                    <Image
                        src={require("assets/icon/화살표_펼치기.svg")}
                        alt="arrow"
                        objectFit="contain"
                        layout="fill"
                        className="rotate-180"
                    />
                </div>
            </div>
            {open && 
                <div>
                    <div className="grid grid-cols-4 gap-2 px-[14px] py-[20px] text-[12px] Pretendard-Regular border-b border-border_color">
                        {imgArr.map((item,index) => (
                            <div className="text-center" key={index}>
                                <Image 
                                    src={require(`../../assets/icon/option/옵션_${item.title}.svg`)}
                                    alt="로고"
                                />
                                <div>
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="px-[18px] ">
                        {arr.map((item, index) => (
                            <InfoField
                                key={index}
                                title={item.title}
                                content={item.data}
                                last={index !== arr.length - 1}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}
