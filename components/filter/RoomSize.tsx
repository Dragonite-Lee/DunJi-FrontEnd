import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CommonBtn from "../common/Btn";
import { RootState } from "../../store/modules/index";
import CategoryHeader from "components/common/CategoryHeader";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function RoomSize() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(40);


    return (
        <>
            {/* 카테고리헤더 옆 별 처리 필요 */}
            <div className="mt-[20px] flex justify-between items-center">
                <CategoryHeader title="방크기" />
                <div className=" text-[17px] Pretendard-SemiBold">{min}평 ~ {max}평</div>
            </div>
            <div className="px-4 py-2">
                <Slider
                    range
                    allowCross={false}
                    defaultValue={[min, max]}
                    max={40}
                    onChange={(e: any) => {
                        setMin(e[0]);
                        setMax(e[1]);
                    }}
                />
            </div>
            <div className="text-[12px] pb-[30px] Pretendard-Regular grid grid-cols-5 text-font_gray">
                <span>0평</span>
                <span className="ml-[14px]">10평</span>
                <span className="text-center">20평</span>
                <span className="ml-[36px]">30평</span>
                <span className="text-right">40평 이상</span>
            </div>
        </>
    );
}
