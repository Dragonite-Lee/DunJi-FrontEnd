import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "../common/Btn";
import { RootState } from "store";
import CategoryHeader2 from "components/common/CategoryHeader2";

export default function TransactionType() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);
    const [btn4Check, setBtn4Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "전체",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "오픈형(방1)",
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "분리형(방1,거실1)",
        },
        {
            check: btn4Check,
            checkHandler: setBtn4Check,
            type: "복층형",
        },
    ];

    return (
        <>
            <CategoryHeader2 title="방 구조" />
            <div className="w-full grid grid-cols-2 gap-room_register_gap">
                {btnArr.map((item, index) => (
                    <CommonBtn
                        key={index}
                        value={item.type}
                        check={item.check}
                        checkHandler={item.checkHandler}
                    />
                ))}
            </div>
        </>
    );
}
