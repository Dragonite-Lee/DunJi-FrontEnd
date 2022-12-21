import useReviewRegisterReudx from 'hooks/useReviewRegisterRedux';
import {
  dispatchPeriodFrom,
  dispatchPeriodTo,
} from '../../../store/modules/reviewRegister';

export default function MoveDate() {
  const [state, dispatch] = useReviewRegisterReudx();

  const periodFrom = state.periodFrom;
  const periodTo = state.periodTo;

  return (
    <>
      <div className="w-full flex gap-4 items-center h-room_register_btn_height1 text-[15px] Pretendard-SemiBold">
        <input
          type="date"
          className="text-center Pretendard-Regular bg-white  w-full rounded-standard_rounded h-full text-[15px] px-4 placeholder-black outline-0 "
          onChange={(e) => {
            dispatch(dispatchPeriodFrom(e.target.value));
          }}
          value={periodFrom}
        />
        ~
        <input
          type="date"
          className="text-center Pretendard-Regular bg-white  w-full rounded-standard_rounded h-full text-[15px] px-4 placeholder-black outline-0 "
          onChange={(e) => {
            dispatch(dispatchPeriodTo(e.target.value));
          }}
          value={periodTo}
        />
      </div>
    </>
  );
}
