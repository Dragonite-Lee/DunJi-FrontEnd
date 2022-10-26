import useReviewRegisterReudx from "hooks/useReviewRegisterRedux";
import { dispatchTotal } from "store/modules/reviewRegister";
import {useState} from "react";

export default function Total() {
    const [state,dispatch] = useReviewRegisterReudx();

    let starRatingState: Array<string> = [];
    const [rating, setRating] = useState(starRatingState);

    function clickRatingHandler(index: number) {
        
    }

    return (
        <div className="mt-[31px] mb-[17px]">
            <div className="flex items-center text-[17px] Pretendard-SemiBold">
                <div>방 어떠셨나요?</div>
                <div className="ml-[5px] text-hover_orange">*</div>

            </div>
        </div>
    )
}