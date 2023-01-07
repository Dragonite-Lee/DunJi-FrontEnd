import { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

type propsType = {
  value: string;
  check: boolean;
  checkHandler: Dispatch<SetStateAction<boolean>>;
  dispatchType: Dispatch<SetStateAction<boolean>>;
  dispatchValue: boolean;
};

function CommonBtn({
  value,
  check,
  checkHandler,
  dispatchType,
  dispatchValue,
}: propsType) {
  const dispatch = useDispatch();

  const clickHandler = useCallback(() => {
    checkHandler(!check);
    dispatch(dispatchType(!dispatchValue));
  }, [check, checkHandler, dispatch, dispatchType, dispatchValue]);

  return (
    <button
      className={`focus-bg-black rounded-standard_rounded h-room_register_btn_height1 w-full Pretendard-Regular text-[15px] ${
        check ? 'bg-font_gray border-0 text-white' : 'border border-font_gray'
      } `}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
}

export default CommonBtn;
