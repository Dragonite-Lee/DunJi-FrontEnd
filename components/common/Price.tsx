import { useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";

export default function Price() {
    
    // const priceFrom = state.priceFrom;
    // const priceTo = state.priceTo;
    // const depositFrom = state.depositFrom;
    // const depositTo = state.depositTo;

    return (
        <div className="pb-[8px] pt-[14px]">
            <CategoryHeader title="가격" />
            <div>
                <div className="flex mb-[8px] text-[15px] Pretendard-Regular justify-between items-center">
                    <div className="pr-[13px]">월세</div>
                    <div>
                        <input type="text" 
                            // value={priceFrom}
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center"
                        />
                    </div>
                    ~
                    <div>
                        <input type="text" 
                            // value={priceTo}
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center"
                        />
                    </div>
                </div>
                <div className="flex text-[15px] Pretendard-Regular justify-between items-center">
                    <div>보증금</div>
                    <div>
                        <input type="text" 
                            // value={depositFrom}
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center"
                        />
                    </div>
                    ~
                    <div>
                        <input type="text" 
                            // value={depositTo}
                            className="rounded-standard_rounded w-[120px] h-[38px] text-center"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
