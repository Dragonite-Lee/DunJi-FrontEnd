import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DuplicateSelectBtn from 'components/common/DuplicateSelectBtn';
import InputSelectBox from 'components/common/InputSelectBox';
import useDuplicateSelect from 'hooks/useDuplicateSelect';
import {
  dispatchOption,
  dispatchOptionSelect,
} from 'store/modules/roomRegister';
import { RootState } from 'types';

function Option() {
  const dispatch = useDispatch();

  const { option, optionAll } = useSelector(
    (state: RootState) => state.roomRegister,
  );

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
    option,
    typeArr,
    dispatchOptionSelect,
  );

  const OptionHandler = () => {
    if (optionAll === 0) dispatch(dispatchOption(1));
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
            check={optionAll}
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
            check={option[index]}
            index={index}
            checkHandler={checkHandler}
            blockCheck={optionAll}
          />
        ))}
      </div>
    </>
  );
}

export default Option;
