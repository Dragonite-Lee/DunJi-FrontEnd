import { useMemo } from 'react';
import DuplicateSelectBtn from 'components/common/DuplicateSelectBtn';
import InputSelectBox from 'components/common/InputSelectBox';
import useDuplicateSelect from 'hooks/useDuplicateSelect';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import {
  dispatchOption,
  dispatchOptionSelect,
} from 'store/modules/roomRegister';

function Option() {
  const [state, dispatch] = useRoomRegisterRedux();

  const optionSelectStateArr = state.option;
  const optionCheck = state.optionAll; //해당없으면 0 옵션있으면1

  const typeArr = useMemo(
    () => [
      '에어컨',
      '냉장고',
      '세탁기',
      '가스레인지',
      '인덕션',
      '전자레인지',
      '책상',
      '책장',
      '침대',
      '옷장',
      '싱크대',
      '신발장',
    ],
    [],
  );

  const [checkHandler, resetHandler] = useDuplicateSelect(
    optionSelectStateArr,
    typeArr,
    dispatchOptionSelect,
  );

  // const state = useSelector((state: RootState) => state.roomRegister);

  const OptionHandler = () => {
    if (optionCheck === 0) dispatch(dispatchOption(1));
    else {
      dispatch(dispatchOption(0));
      resetHandler();
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mt-[26px] pb-[8px]">
        <div className="text-[17px]  Pretendard-SemiBold">옵션</div>
        <div className="text-[15px] Pretendard-Regular">
          <InputSelectBox
            check={optionCheck}
            content="해당 없음"
            checkHandler={OptionHandler}
            converse={true}
          />
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-room_register_gap ">
        {typeArr.map((item, index) => (
          <DuplicateSelectBtn
            key={index}
            value={item}
            check={optionSelectStateArr[index]}
            index={index}
            checkHandler={checkHandler}
            blockCheck={optionCheck}
          />
        ))}
      </div>
    </>
  );
}

export default Option;