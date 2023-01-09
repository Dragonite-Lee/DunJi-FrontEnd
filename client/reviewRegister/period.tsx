import { ChangeEvent } from 'react';

import useReviewRegisterReudx from 'hooks/useReviewRegisterRedux';
import {
  dispatchPeriodFrom,
  dispatchPeriodTo,
} from 'store/modules/reviewRegister';

function MoveDate() {
  const [{ periodFrom, periodTo }, dispatch] = useReviewRegisterReudx();

  const getPeriodFrom = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(dispatchPeriodFrom(e.target.value));
  };

  const getPeriodTo = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(dispatchPeriodTo(e.target.value));
  };

  return (
    <>
      <div className="w-full flex gap-4 items-center h-room_register_btn_height1 text-[15px] Pretendard-SemiBold">
        <input
          type="date"
          className="text-center Pretendard-Regular bg-white  w-full rounded-standard_rounded h-full text-[15px] px-4 placeholder-black outline-0 "
          onChange={(e) => getPeriodFrom(e)}
          value={periodFrom}
        />
        ~
        <input
          type="date"
          className="text-center Pretendard-Regular bg-white  w-full rounded-standard_rounded h-full text-[15px] px-4 placeholder-black outline-0 "
          onChange={(e) => getPeriodTo(e)}
          value={periodTo}
        />
      </div>
    </>
  );
}

export default MoveDate;
