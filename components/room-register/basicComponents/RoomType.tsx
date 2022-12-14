import { useMemo } from 'react';
import NoDuplicateSelectBtn from 'components/common/NoDuplicateSelectBtn';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchRoomType } from 'store/modules/roomRegister';

export default function RoomType() {
  const typeArr = useMemo(() => ['원룸', '투룸', '쓰리룸 이상'], []);
  const [state] = useRoomRegisterRedux();

  const [selectArr, checkHandler] = useNoDuplicateSelect(
    typeArr,
    dispatchRoomType,
    state.roomType,
  );

  return (
    <>
      <div className="pt-[30px] text-[17px] Pretendard-SemiBold">방 종류</div>
      <div className="w-full grid grid-cols-3 gap-room_register_gap Pretendard-Regular">
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
