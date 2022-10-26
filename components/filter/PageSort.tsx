import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../store/modules/index";
import CategoryHeader from "components/common/CategoryHeader";
import CommonBtn from "../common/Btn";

export default function PageSort() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "가격 낮은 순",
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "찜한 순",
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
        <div className="border-border_color border-t">
            <CategoryHeader title="페이지 나열 순서 선택" />
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
        </div>
    );
}
