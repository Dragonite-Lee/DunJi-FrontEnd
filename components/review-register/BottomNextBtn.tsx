import useReviewRegisterRedux from "hooks/useReviewRegisterRedux";
import { useCallback, useState } from "react";
// import { postRoom } from "store/modules/roomRegister";
// import { dispatchRoomId } from "store/modules/room";
import { reviewApi } from "_api";
// import Router from "next/router";
// import useRoomRedux from "hooks/useRoomRedux";

export default function BottomNextBtn() {
    const [state, dispatch] = useReviewRegisterRedux();
    // const [state2, dispatch2] = useRoomRedux();
    const isEmpty = useCallback(function (value: any) {
        if (
            value == "" ||
            value == null ||
            value == undefined ||
            (value != null &&
                typeof value == "object" &&
                !Object.keys(value).length)
        ) {
            return true;
        } else {
            return false;
        }
    }, []); 
    
    console.log(state)
    const checkHandler = async () => {
        let formData = new FormData();
        
        const user_id = state.registrant;
        
        for (const item in state) {
            if (!isEmpty(state[item])) formData.append(item, state[item]); //formdata에 값 입력
            
        }

        // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
        const delete_arr = [
            "ADDRESS_OPEN",
            "COMPONENT_HANDLER",
            "POSTCODE_OPEN",
            "Reviewfile",
            "ReviewfileUrl",
            "clean",
            "sound",
            "accessible",
            "landlord",
            "facility",
            "periodFrom",
            "periodTo",
            "total",
            "totalNum",
        ];
        for (let i = 0; i < delete_arr.length; i++)
            formData.delete(delete_arr[i]);

        //파일 업로드
        const image_arr = [...state.Reviewfile];
        for (let i = 0; i < image_arr.length; i++) {
            formData.append("file", image_arr[i])
        }
        
        //후기(5가지 사항) 업로드
        if (state.clean == '만족'){
            formData.append("clean", "0");
        } else if (state.clean == '보통') {
            formData.append("clean", "1");
        } else if (state.clean == '불만족') {
            formData.append("clean", "2");
        }

        if (state.sound == '만족'){
            formData.append("sound", "0");
        } else if (state.sound == '보통') {
            formData.append("sound", "1");
        } else if (state.sound == '불만족') {
            formData.append("sound", "2");
        }

        if (state.accessible == '만족'){
            formData.append("accessible", "0");
        } else if (state.accessible == '보통') {
            formData.append("accessible", "1");
        } else if (state.accessible == '불만족') {
            formData.append("accessible", "2");
        }

        if (state.landlord == '만족'){
            formData.append("landlord", "0");
        } else if (state.landlord == '보통') {
            formData.append("landlord", "1");
        } else if (state.landlord == '불만족') {
            formData.append("landlord", "2");
        }

        if (state.facility == '만족'){
            formData.append("facility", "0");
        } else if (state.facility == '보통') {
            formData.append("facility", "1");
        } else if (state.facility == '불만족') {
            formData.append("facility", "2");
        }
        
        //거주 기간 업로드
        const period = state.periodFrom + " ~ " + state.periodTo;
        formData.append("period", period);

       //별점
       formData.append("total", state.totalNum);

        const all_items_arr = [
            { address: "주소를" },
            { detailAddress: "상세주소를" },
            { file : "사진을"},
            { content : "상세설명을"},
            { total : "별점을"},
            { clean : "쳥결도를"},
            { sound : "방음을"},
            { accessible : "위치를"},
            { landlord : "집주인 친절도를"},
            { facility : "만족도를"},
            { period : "거주기간을"},
        ];
        for (let i of formData.entries()) {
            console.log(i);
        }
        try {
            for (let item of all_items_arr) {
                
                const key = Object.keys(item)[0];
                const message = Object.values(item)[0];
                if (!formData.has(key)) {
                    throw message;
                }
                
            }
            
            
            
            await reviewApi.postReview(formData)
            .then((res)=>{
                console.log(res)
                // dispatch2(dispatchRoomId(res.data.Room_ID))
                // Router.push(`/room/${res.data.Room_ID}`)
            });
            
        } catch (e) {
            alert(e + " 입력해 주세요");
        }
    };

    return (
        <div
            className="sm:w-[375px] Pretendard-SemiBold sm:m-auto bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around"
            onClick={checkHandler}
        >
            <div className="text-[17px] text-white">후기 작성</div>
            <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
    );
}
