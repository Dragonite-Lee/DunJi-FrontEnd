import { ChangeEvent, useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";
import { dispatchRoomSize } from "store/modules/roomRegister";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

export default function Size() {
    const [pyeong, setPyeong] = useState<string | number>("");

    const [state, dispatch] = useRoomRegisterRedux();

    const size = state.roomSize;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.target.value;
        if (num === "" || num === "0") dispatch(dispatchRoomSize(""));
        else dispatch(dispatchRoomSize(round(e.target.value, 1)));
    };

    const onChangePyeongHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.target.value;
        if (num === "" || num === "0") setPyeong("");
        else setPyeong(round(e.target.value, 1));
    };

    const round = (num: number | string, mul: number): number => {
        return Math.round(Number(num) * 10 * mul / 10);
    };
    return (
        <>
            <CategoryHeader title="방 크기" />
            <div className="flex gap-room_register_gap Pretendard-Regular">
                <div className="relative h-room_register_btn_height2 mb-4 w-full">
                    <input
                        type="number"
                        className="w-full rounded-standard_rounded h-full text-[15px] pl-4 placeholder-text_gray outline-0 focus:border-main"
                        placeholder="실평수"
                        value={pyeong}
                        onChange={(e) => {
                            onChangePyeongHandler(e);
                        }}
                        onBlur={() => {
                            if (pyeong !== "")
                                dispatch(dispatchRoomSize(round(pyeong, 3.3)));
                            else dispatch(dispatchRoomSize(""));
                        }}
                    ></input>
                    <div
                        className="absolute  text-[15px]
            right-8 bottom-[50%] translate-y-[50%]"
                    >
                        평
                    </div>
                </div>
                <div className="relative h-room_register_btn_height2 mb-4 w-full">
                    <input
                        type="number"
                        className="w-full rounded-standard_rounded h-full text-[15px] pl-4 placeholder-text_gray outline-0 focus:border-main"
                        placeholder="전용 면적"
                        value={size}
                        onChange={(e) => {
                            onChangeHandler(e);
                        }}
                        onBlur={() => {
                            if (size !== "") setPyeong(round(size, 1 / 3.3));
                            else setPyeong("");
                        }}
                    ></input>
                    <div
                        className="absolute  text-[15px]
            right-8 bottom-[50%] translate-y-[50%]"
                    >
                        m<sup>2</sup>
                    </div>
                </div>
            </div>
        </>
    );
}
