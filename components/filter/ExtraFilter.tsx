import { useEffect, useState } from "react";
import CommonBtn from "./CommonBtn";
import CategoryHeader2 from "components/common/CategoryHeader2";
import useMapFilterRedux from "hooks/useMapFilterRedux";
import { dispatchCar, dispatchElevator, dispatchPet, dispatchFullOption, dispatchWomen ,dispatchLoan } from "store/modules/filter";

export default function TransactionType() {
    
    const [state, dispatch] = useMapFilterRedux();

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);
    const [btn4Check, setBtn4Check] = useState(false);
    const [btn5Check, setBtn5Check] = useState(false);
    const [btn6Check, setBtn6Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "주차가능",
            dispatch: dispatchCar,
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "엘리베이터",
            dispatch: dispatchElevator,
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "반려동물",
            dispatch: dispatchPet,
        },
        {
            check: btn4Check,
            checkHandler: setBtn4Check,
            type: "풀옵션",
            dispatch: dispatchFullOption,
        },
        {
            check: btn5Check,
            checkHandler: setBtn5Check,
            type: "여성전용",
            dispatch: dispatchWomen,
        },
        {
            check: btn6Check,
            checkHandler: setBtn6Check,
            type: "전세대출",
            dispatch: dispatchLoan,
        },
    ];
    
    return (
        <div className="border-border_color border-t">
            <CategoryHeader2 title="추가필터" />
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
            <div className="text-[12px] Pretendard-Regular text-font_gray my-6">
                * 풀옵션 항목은 세탁기, 냉장고, 에어컨, 가스레인지입니다.
            </div>
        </div>
    );
}
