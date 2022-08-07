import { useMemo } from "react";
import NoDuplicateSelectBtn from "components/common/NoDuplicateSelectBtn";
import useNoDuplicateSelect from "hooks/useNoDuplicateSelect";
import { dispatchRoomType } from "store/modules/roomRegister";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

export default function RoomType() {
    const typeArr = useMemo(
        () => ["원룸", "투룸", "쓰리룸 이상", "반지하", "옥탑방"],
        []
    );
    const [state] = useRoomRegisterRedux();

    const [selectArr, checkHandler] = useNoDuplicateSelect(
        typeArr,
        dispatchRoomType,
        state.roomType
    );

    return (
        <>
            <div className="py-4 text-2xl  mt-4">방 종류</div>
            <div className="w-full grid grid-cols-3 gap-room_register_gap">
                {typeArr.map((item, index) => (
                    <NoDuplicateSelectBtn
                        key={index}
                        value={item}
                        check={selectArr[index]}
                        index={index}
                        checkHandler={checkHandler}
                    />
                ))}
            </div>
        </>
    );
}
