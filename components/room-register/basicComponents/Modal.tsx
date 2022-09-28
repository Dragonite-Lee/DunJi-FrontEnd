import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type propsType = {
    arr: Array<string>;
    title: string;
    openHandler: Dispatch<SetStateAction<boolean>>;
    dispatchHandler: ActionCreatorWithPayload<any, string>;
};

export default function Modal({
    arr,
    title,
    openHandler,
    dispatchHandler,
}: propsType) {
    const [state, dispatch] = useRoomRegisterRedux();

    const onClick = (index: number) => {
        // 1층...의 경우 분리 후 number로 변환.  분리형...의 구조는 그대로 dispatch
        if (arr[index].substr(-1) === "층") {
            dispatch(dispatchHandler(Number(arr[index].slice(0, -1))));
        } else dispatch(dispatchHandler(arr[index]));
    };
    

    const [value, setValue] = useState("");

    useEffect(() => {
        if (value !== "") dispatch(dispatchHandler(Number(value)));
        else dispatch(dispatchHandler(title));
    }, [value, dispatch, dispatchHandler, title]);
    return (
        <div className="absolute top-0 left-0 bg-black/[0.5]  sm:w-[375px] sm:m-auto w-screen h-[100%] flex-col items-center flex z-50"
            onClick={(e) => {
                if(e.target == e.currentTarget) {
                    openHandler(false)
                }
            }}
        >
            <div className="rounded-standard_rounded  w-[180px] bg-component_white text-[15px] mt-[82rem]">
                <div className="relative border-b h-14 flex flex-col items-center justify-center Pretendard-SemiBold">
                    {title}
                    <FontAwesomeIcon
                        onClick={() => openHandler(false)}
                        className="absolute right-4 text-font_gray"
                        icon="x"
                    />
                </div>
                {arr.map((item, index) => (
                    <div
                        className="h-14 flex flex-col items-center justify-center hover:text-main Pretendard-Regular"
                        key={index}
                        onClick={() => onClick(index)}
                    >
                        {item}
                    </div>
                ))}
                <div className="w-full text-center">
                    {title !== "구조" && (
                        <input
                            type="text"
                            maxLength={2}
                            className="w-[180px] text-center h-14 rounded-b-standard_rounded bg-component_white outline-0 border-t-2 border-gray Pretendard-Regular placeholder:text-main text-main"
                            placeholder="입력"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
