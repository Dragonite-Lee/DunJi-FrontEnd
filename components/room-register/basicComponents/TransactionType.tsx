import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "../../common/Btn";
import { RootState } from "store";
import CategoryHeader from "components/common/CategoryHeader";

export default function TransactionType() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);
    const [btn3Check, setBtn3Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "단기임대",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "임대",
        },
        {
            check: btn3Check,
            checkHandler: setBtn3Check,
            type: "양도",
        },
    ];

    useEffect(() => {
        if (btn1Check) {
            setBtn2Check(false);
            setBtn3Check(false);
        }
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) {
            setBtn1Check(false);
            setBtn3Check(false);
        }
    }, [btn2Check]);
    useEffect(() => {
        if (btn3Check) {
            setBtn1Check(false);
            setBtn2Check(false);
        }
    }, [btn3Check]);

    return (
        <>
            <CategoryHeader title="거래유형" />
            <div className="w-full flex gap-room_register_gap  h-room_register_btn_height1">
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
