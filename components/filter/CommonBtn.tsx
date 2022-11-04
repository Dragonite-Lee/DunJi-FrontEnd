import { Dispatch, SetStateAction } from "react";
import useMapFilterRedux from "hooks/useMapFilterRedux";

type propsType = {
    value: string;
    check: boolean;
    checkHandler: Dispatch<SetStateAction<boolean>>;
    dispatchType: Dispatch<SetStateAction<boolean>>;
    dispatchValue: boolean;
};

export default function CommonBtn({ value, check, checkHandler, dispatchType, dispatchValue }: propsType) {
    const [state, dispatch] = useMapFilterRedux();
    return (
        <button
            className={`focus-bg-black  rounded-standard_rounded h-room_register_btn_height1 w-full Pretendard-Regular  text-[15px]   ${
                check
                    ? "bg-font_gray border-0 text-white"
                    : "border border-font_gray"
            } `}
            onClick={() => {
                checkHandler(!check);
                dispatch(dispatchType(!dispatchValue));
            }}
        >
            {value}
        </button>
    );
}
