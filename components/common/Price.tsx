import { useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";
import useMapFilterRedux from "hooks/useMapFilterRedux";
import { dispatchPriceFrom, dispatchPriceTo, dispatchDepositFrom, dispatchDepositTo } from "store/modules/filter";

export default function Price() {
    const [state, dispatch] = useMapFilterRedux();
    
    
    
    return (
        <div className="pb-[8px] pt-[14px]">
            <div className="flex items-center ">
                <CategoryHeader title="가격" />
                <div className="mt-[14px] ml-[6px] Pretendard-Regular">(단위: 00만원)</div>
            </div>
            <div>
                <div className="flex mb-[8px] text-[15px] Pretendard-Regular justify-between items-center">
                    <div className="pr-[13px]">월세</div>
                    <div>
                        <input type="text" 
                            onChange={(e)=>{
                                dispatch(dispatchPriceFrom(e.target.value))
                            }}
                            placeholder="최소 금액"
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center text-[15px] placeholder-font_gray Pretendard-Regular"
                        />
                    </div>
                    ~
                    <div>
                        <input type="text" 
                            onChange={(e)=>{
                                dispatch(dispatchPriceTo(e.target.value))
                            }}
                            placeholder="최대 금액"
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center text-[15px] placeholder-font_gray Pretendard-Regular"
                        />
                    </div>
                </div>
                <div className="flex text-[15px] Pretendard-Regular justify-between items-center">
                    <div>보증금</div>
                    <div>
                        <input type="text" 
                            onChange={(e)=>{
                                dispatch(dispatchDepositFrom(e.target.value))
                            }}
                            placeholder="최소 금액"
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center text-[15px] placeholder-font_gray Pretendard-Regular"
                        />
                    </div>
                    ~
                    <div>
                        <input type="text" 
                            onChange={(e)=>{
                                dispatch(dispatchDepositTo(e.target.value))
                            }}
                            placeholder="최대 금액"
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center text-[15px] placeholder-font_gray Pretendard-Regular"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
