import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "../common/Btn";
import { RootState } from "../../store/modules/index";
import CategoryHeader2 from "components/common/CategoryHeader2";

export default function TransactionType() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "단기임대",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "양도",
        },
    ];

    useEffect(() => {
        if (btn1Check) {
            setBtn2Check(false);
        }
    }, [btn1Check]);
    useEffect(() => {
        if (btn2Check) {
            setBtn1Check(false);
        }
    }, [btn2Check]);


    return (
        <>
            <CategoryHeader2 title="거래 유형" />
            <div className="grid grid-cols-2 gap-room_register_gap">
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
