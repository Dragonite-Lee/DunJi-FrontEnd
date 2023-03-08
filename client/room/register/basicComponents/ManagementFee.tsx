import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryHeader from 'components/common/CategoryHeader';
import DuplicateSelectBtn from 'components/common/DuplicateSelectBtn';
import InputSelectBox from 'components/common/InputSelectBox';
import useDuplicateSelect from 'hooks/useDuplicateSelect';
import {
  dispatchManage,
  dispatchManagementCost,
  dispatchManageSelect,
} from 'store/modules/roomRegister';
import { RootState } from 'types';

function Price() {
  const dispatch = useDispatch();

  const { utility, managementCost, manage } = useSelector(
    (state: RootState) => state.roomRegister,
  );

  const typeArr = useMemo(() => ['전기세', '가스', '수도', '인터넷', 'TV'], []);

  const [checkHandler, resetHandler] = useDuplicateSelect(
    utility,
    typeArr,
    dispatchManageSelect,
  );

  const feeHandler = (value: string) => {
    const num = Number(value);
    if (manage === 1) {
      if (num === 0) dispatch(dispatchManagementCost(''));
      else {
        dispatch(dispatchManagementCost(num));
      }
    }
  };

  const feeOptionHandler = () => {
    if (manage === 0) dispatch(dispatchManage(1));
    else {
      dispatch(dispatchManage(0));
      dispatch(dispatchManagementCost(''));
      resetHandler();
    }
  };
  
  return (
    <>
      <CategoryHeader title="관리비" />
      <div className="w-full grid grid-cols-[2fr_1fr] h-[3rem] mb-4 Pretendard-Regular">
        <div className="relative h-full mr-2 mb-4">
          <input
            type="number"
            className="bg-white w-full rounded-standard_rounded h-full text-[15px] pl-4 placeholder-font_gray outline-0"
            placeholder="관리비"
            value={managementCost}
            onChange={(e) => {
              feeHandler(e.target.value);
            }}
          />
          <div
            className="absolute text-[15px]
            right-4 bottom-[50%] translate-y-[50%]"
          >
            만원
          </div>
        </div>
        <InputSelectBox
          check={manage}
          content="관리비 없음"
          checkHandler={feeOptionHandler}
          converse={true}
        />
      </div>
      <div className="w-full grid grid-cols-3 h-[6rem] gap-1 Pretendard-Regular">
        {typeArr.map((item, index) => (
          <DuplicateSelectBtn
            key={index}
            value={item}
            check={utility[index]}
            index={index}
            checkHandler={checkHandler}
            blockCheck={manage}
          />
        ))}
      </div>
    </>
  );
}

export default Price;
