
import { useCallback, useState } from "react";
import useMapFilterRedux from "hooks/useMapFilterRedux";
import { mapApi } from "_api";



export default function BottomNextBtn() {

    const [state, dispatch] = useMapFilterRedux();
    
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
    
        
        
        console.log(state)
        for (const item in state) {
            if (!isEmpty(state[item])) formData.append(item, state[item]); //formdata에 값 입력
            
        }

        // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
        const delete_arr = [
            "oneRoom",
            "twoRoom",
            "threeRoom",
            "floorFive",
            "floorsixup",
            "floortenup",
            "basement",
            "rooftop",
            "openType",
            "separateType",
            "twoFloorType",
            "car",
            "elevator",
            "pet",
            "fullOption",
            "women",
            "loan",
            "priceSort",
            "recommendSort",
            "priceFrom",
            "priceTo",
            "depositFrom",
            "depositTo",
            "manageFrom",
            "manageTo",
            "sizeFrom",
            "sizeTo"
        ];
        for (let i = 0; i < delete_arr.length; i++)
            formData.delete(delete_arr[i]);

        //각각 true면 1 false면 0
        if(state.oneRoom == false) {
            formData.append("oneRoom", "0");
        } else if(state.oneRoom == true) {
            formData.append("oneRoom", "1");
        }
        if(state.twoRoom == false) {
            formData.append("twoRoom", "0");
        } else if(state.twoRoom == true) {
            formData.append("twoRoom", "1");
        }
        if(state.threeRoom == false) {
            formData.append("threeRoom", "0");
        } else if(state.threeRoom == true) {
            formData.append("threeRoom", "1");
        }


        if(state.floorFive == false) {
            formData.append("floorFive", "0");
        } else if(state.floorFive == true) {
            formData.append("floorFive", "1");
        }
        if(state.floorsixup == false) {
            formData.append("floorsixup", "0");
        } else if(state.floorsixup == true) {
            formData.append("floorsixup", "1");
        }
        if(state.floortenup == false) {
            formData.append("floortenup", "0");
        } else if(state.floortenup == true) {
            formData.append("floortenup", "1");
        }
        if(state.basement == false) {
            formData.append("basement", "0");
        } else if(state.basement == true) {
            formData.append("basement", "1");
        }
        if(state.rooftop == false) {
            formData.append("rooftop", "0");
        } else if(state.rooftop == true) {
            formData.append("rooftop", "1");
        }

        if(state.openType == false) {
            formData.append("openType", "0");
        } else if(state.openType == true) {
            formData.append("openType", "1");
        }
        if(state.separateType == false) {
            formData.append("separateType", "0");
        } else if(state.separateType == true) {
            formData.append("separateType", "1");
        }
        if(state.twoFloorType == false) {
            formData.append("twoFloorType", "0");
        } else if(state.twoFloorType == true) {
            formData.append("twoFloorType", "1");
        }


        if(state.car == false) {
            formData.append("car", "0");
        } else if(state.car == true) {
            formData.append("car", "1");
        }
        if(state.elevator == false) {
            formData.append("elevator", "0");
        } else if(state.elevator == true) {
            formData.append("elevator", "1");
        }
        if(state.pet == false) {
            formData.append("pet", "0");
        } else if(state.pet == true) {
            formData.append("pet", "1");
        }
        if(state.fullOption == false) {
            formData.append("fullOption", "0");
        } else if(state.fullOption == true) {
            formData.append("fullOption", "1");
        }
        if(state.women == false) {
            formData.append("women", "0");
        } else if(state.women == true) {
            formData.append("women", "1");
        }
        if(state.loan == false) {
            formData.append("loan", "0");
        } else if(state.loan == true) {
            formData.append("loan", "1");
        }


        if(state.priceSort == false) {
            formData.append("priceSort", "0");
        } else if(state.priceSort == true) {
            formData.append("priceSort", "1");
        }
        if(state.recommendSort == false) {
            formData.append("recommendSort", "0");
        } else if(state.recommendSort == true) {
            formData.append("recommendSort", "1");
        }
        
        const price_arr = [
            "priceFrom",
            "priceTo",
            "depositFrom",
            "depositTo",
            "manageFrom",
            "manageTo",
            "sizeFrom",
            "sizeTo"
        ]
        const price_value_arr = [
            state.priceFrom,
            state.priceTo,
            state.depositFrom,
            state.depositTo,
            state.manageFrom,
            state.manageTo,
            state.sizeFrom,
            state.sizeTo
        ]
        for(let i = 0; i < price_arr.length; i++) {
            formData.append(price_arr[i],price_value_arr[i])
        }

        const all_items_arr = [
            { dealType: "거래유형을" },
            { oneRoom: "방종류를" },
            { twoRoom: "방종류를" },
            { threeRoom: "방종류를" },
            { priceUnit: "가격단위를" },
            { priceFrom: "가격을" },
            { priceTo: "가격을" },
            { depositFrom: "가격을" },
            { depositTo: "가격을" },
            { manageFrom: "관리비를" },
            { manageTo: "관리비를" },
            // { floorfive: "층수를" },
            // { floorsixup: "층수를" },
            // { floortenup: "층수를" },
            // { basement: "층수를" },
            // { rooftop: "층수를" },
            { openType: "방구조를" },
            { separateType: "방구조를" },
            { twoFloorType: "방구조를" },
            { sizeFrom: "방크기를" },
            { sizeTo: "방크기를" },
            { car: "추가필터를" },
            { elevator: "추가필터를" },
            { pet: "추가필터를" },
            { fullOption: "추가필터를" },
            { women: "추가필터를" },
            { loan: "추가필터를" },
            { priceSort: "나열순서를" },
            { recommendSort: "나열순서를" },
        ];

        try {
            for (let item of all_items_arr) {
                
                const key = Object.keys(item)[0];
                const message = Object.values(item)[0];
                if (!formData.has(key)) {
                    throw message;
                }
                
            }
            for (let i of formData.entries()) {
                console.log(i);
            }
            
            
            await mapApi.getRoom(formData)
            .then((res)=>{
                console.log(res)
                
            });
            
        } catch (e) {
            alert(e + " 입력해 주세요");
        }
    };

    return (
        <div
            className="sm:w-[375px] Pretendard-SemiBold sm:m-auto bg-main absolute left-0 bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around"
            onClick={checkHandler}
        >
            <div className="text-[17px] text-white">필터 적용</div>
            <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
    );
}
