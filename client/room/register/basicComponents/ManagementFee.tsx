import { useMemo } from 'react';
import CategoryHeader from 'components/common/CategoryHeader';
import DuplicateSelectBtn from 'components/common/DuplicateSelectBtn';
import InputSelectBox from 'components/common/InputSelectBox';
import useDuplicateSelect from 'hooks/useDuplicateSelect';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import {
  dispatchManage,
  dispatchManageCost,
  dispatchManageSelect,
} from 'store/modules/roomRegister';

function Price() {
  const [state, dispatch] = useRoomRegisterRedux();
  const selectArr = state.manageSelect;
  const typeArr = useMemo(() => ['전기세', '가스', '수도', '인터넷', 'TV'], []);
  const [checkHandler, resetHandler] = useDuplicateSelect(
    selectArr,
    typeArr,
    dispatchManageSelect,
  );
  // 관리비
  const fee = state.manageCost;
  // 관리비 유무(있으면 1, 없으면 0)
  const noFeeCheck = state.manage;
  // 관리비 카테고리 배열

  const feeHandler = (value: string) => {
    const num = Number(value);
    if (noFeeCheck === 1) {
      if (num === 0) dispatch(dispatchManageCost(''));
      else {
        dispatch(dispatchManageCost(num));
      }
    }
  };

  const feeOptionHandler = () => {
    if (noFeeCheck === 0) dispatch(dispatchManage(1));
    else {
      dispatch(dispatchManage(0));
      dispatch(dispatchManageCost(''));
      resetHandler();
    }
  };

  return (
    <>
      <CategoryHeader title="관리비" />
      <div className="w-full grid grid-cols-[2fr_1fr] h-[3.5rem] mb-4 Pretendard-Regular">
        <div className="relative h-full mb-4">
          <input
            type="number"
            className="bg-white  w-full rounded-standard_rounded h-full text-[15px] pl-4 placeholder-font_gray outline-0"
            placeholder="관리비"
            value={fee}
            onChange={(e) => {
              feeHandler(e.target.value);
            }}
          />
          <div
            className="absolute  text-[15px]
            right-8 bottom-[50%] translate-y-[50%]"
          >
            만원
          </div>
        </div>
        <InputSelectBox
          check={noFeeCheck}
          content="관리비 없음"
          checkHandler={feeOptionHandler}
          converse={true}
        />
      </div>
      <div className="w-full grid grid-cols-3 h-[7rem] gap-2 Pretendard-Regular">
        {typeArr.map((item, index) => (
          <DuplicateSelectBtn
            key={index}
            value={item}
            check={selectArr[index]}
            index={index}
            checkHandler={checkHandler}
            blockCheck={noFeeCheck}
          />
        ))}
      </div>
    </>
  );
}

export default Price;
