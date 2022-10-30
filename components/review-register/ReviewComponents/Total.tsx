import useReviewRegisterReudx from "hooks/useReviewRegisterRedux";
import { dispatchTotal } from "store/modules/reviewRegister";
import {useState,useEffect} from "react";
import Image from "next/image";
import active from "../../../assets/icon/별점_활성화.svg";
import noActive from "../../../assets/icon/별점_비활성화.svg"

export default function Total() {
    const [state,dispatch] = useReviewRegisterReudx();

    let starRatingState: Array<string> = [];
    

    // const active = "../../../assets/icon/별점_활성화.svg";
    // const noActive = "../../../assets/icon/별점_비활성화.svg";

    function clickRatingHandler(index: number) {
        let StarRating: Array<string> = [];

        for (let i = 0; i < 5; i++) {
            if(i<=index) {
                StarRating.push(active);
            } else {
                StarRating.push(noActive);
            }
        }
        dispatch(dispatchTotal(StarRating));
    }
    function overRatingHandler(index: number) {
        let StarRating: Array<string> = [];

        for (let i = 0; i < 5; i++) {
            if(i<=index) {
                StarRating.push(active);
            } else {
                StarRating.push(noActive);
            }
        }
        dispatch(dispatchTotal(StarRating));
    }
    
    useEffect(() => {
        for(let i = 0; i < 5; i++) {
            starRatingState.push(noActive);
        }
        dispatch(dispatchTotal(starRatingState))
    },[]);

    let url:any = [];

    if (state.total.length) {
        for (let i = 0; i < state.total.length; i++) {
            url.push(state.total[i]);
        }
    }
    // console.log(url)
    const map_result = url.map(function(star: any, index: any) {
        return (
            <div key={index} className="">
                {star
                    ? <Image 
                        alt="별점"
                        src={star}
                        // onMouseOver={() => overRatingHandler(index)}
                        onClick={() => clickRatingHandler(index)}
                        width={80}
                        height={80}
                    />
                    : <Image 
                        alt="별점"
                        src={require("../../../assets/icon/별점_활성화.svg")}
                        width={80}
                        height={60}
                    />
                }
            </div>
        )
    })

    return (
        <div className="mt-[31px] ">
            <div className="flex items-center mb-[17px] text-[17px] Pretendard-SemiBold">
                <div>방 어떠셨나요?</div>
                <div className="ml-[5px] text-hover_orange">*</div>
            </div>
            <div className="flex justify-center mx-10">
                {map_result}
            </div>
        </div>
    )
}