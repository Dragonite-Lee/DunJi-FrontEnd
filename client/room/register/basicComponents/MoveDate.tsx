import { useDispatch, useSelector } from 'react-redux';

import InputSelectBox from 'components/common/InputSelectBox';
import {
  dispatchFrom,
  dispatchNegotiable,
  dispatchTo,
} from 'store/modules/roomRegister';
import { RootState } from 'types';

function MoveDate() {
  const dispatch = useDispatch();

  const { availFrom, availTo, availConsul } = useSelector(
    (state: RootState) => state.roomRegister,
  );

  const checkHandler = () => {
    availConsul === 0
      ? dispatch(dispatchNegotiable(1))
      : dispatch(dispatchNegotiable(0));
  };

  return (
    <>
      <div className="py-4 text-[17px] border-t border-border_color mt-8 flex justify-between Pretendard-SemiBold">
        <span>입주가능기간</span>
        <InputSelectBox
          converse={false}
          check={availConsul}
          content="협의가능"
          checkHandler={checkHandler}
        />
      </div>
      <div className="w-full flex gap-4 items-center h-room_register_btn_height1 text-[15px] Pretendard-SemiBold">
        <input
          type="date"
          className="text-center Pretendard-Regular bg-white  w-full rounded-standard_rounded h-full text-[15px] px-4 placeholder-black outline-0 "
          onChange={(e) => {
            dispatch(dispatchFrom(e.target.value));
          }}
          value={availFrom}
        />
        ~
        <input
          type="date"
          className="text-center Pretendard-Regular bg-white  w-full rounded-standard_rounded h-full text-[15px] px-4 placeholder-black outline-0 "
          onChange={(e) => {
            dispatch(dispatchTo(e.target.value));
          }}
          value={availTo}
        />
      </div>
    </>
  );
}

export default MoveDate;
