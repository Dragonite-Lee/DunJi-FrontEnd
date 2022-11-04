import { useState } from "react";
import CommonBtn from "./CommonBtn"
import {dispatchOneRoom,dispatchTwoRoom,dispatchThreeRoom} from "store/modules/filter";
import useMapFilterRedux from "hooks/useMapFilterRedux";

export default function TransactionType() {
    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);

    const [state, dispatch] = useMapFilterRedux();

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "원룸",
            dispatch: dispatchOneRoom,
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "투룸",
            dispatch: dispatchTwoRoom
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "쓰리룸",
            dispatch: dispatchThreeRoom
        },
    ];

    return (
        <div className="mt-[30px] pb-[30px] border-b border-border_color">
            <div className="pb-6 text-[17px] Pretendard-SemiBold flex items-center">
                방 종류
                <span className="ml-2 text-[12px] Pretendard-Regular text-font_gray">
                    &nbsp;중복 선택 가능
                </span>
            </div>
            <div className="w-full grid grid-cols-3 gap-room_register_gap">
                {btnArr.map((item, index) => (
                    <CommonBtn
                        key={index}
                        value={item.type}
                        check={item.check}
                        checkHandler={item.checkHandler}
                        dispatchType={item.dispatch}
                        dispatchValue={item.check}
                    />
                ))}
            </div>
        </div >
    );
}
