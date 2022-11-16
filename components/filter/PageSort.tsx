import { useEffect, useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";
import CommonBtn from "./CommonBtn";
import useMapFilterRedux from "hooks/useMapFilterRedux";
import { dispatchPriceSort, dispatchRecommendSort } from "store/modules/filter";

export default function PageSort() {
    
    const [state, dispatch] = useMapFilterRedux();

    const [btn1Check, setBtn1Check] = useState(false);
    const [btn2Check, setBtn2Check] = useState(false);

    const btnArr = [
        {
            check: btn1Check,
            checkHandler: setBtn1Check,
            type: "가격 낮은 순",
            dispatch: dispatchPriceSort,
        },
        {
            check: btn2Check,
            checkHandler: setBtn2Check,
            type: "찜한 순",
            dispatch: dispatchRecommendSort
        },
    ];
    useEffect(()=>{
        if(btn1Check==true) {
            setBtn2Check(false)
            dispatch(dispatchRecommendSort(false))
        }
    },[btn1Check,dispatch])
    useEffect(()=>{
        if(btn2Check==true) {
            setBtn1Check(false)
            dispatch(dispatchPriceSort(false))
        }
    },[btn2Check,dispatch])


    return (
        <div className="border-border_color border-t pb-[30px]">
            <CategoryHeader title="페이지 나열 순서 선택" />
            <div className="w-full grid grid-cols-2 gap-room_register_gap">
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
        </div>
    );
}
