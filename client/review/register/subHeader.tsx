import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { componentHandle } from 'store/modules/reviewRegister';
import { RootState } from 'types';

const subHeaderBtnArr = ['주소 등록', '후기 작성'];

function SubHeader() {

  const { COMPONENT_HANDLER } = useSelector(
    (state: RootState) => state.reviewRegister,
  );
  const dispatch = useDispatch();

  const onClickHandler = useCallback((num: number) => {
    dispatch(componentHandle(num));
  },[]);

  return (
    <div className="sm:w-[375px] sm:m-auto text-font_gray flex w-full justify-around px-[18px] bg-component_white items-center border-b border-border_color">
      {subHeaderBtnArr.map((title, index) => (
        <button
          className={`py-2 px-12 text-[14px] Pretendard-Regular  h-max ${
            COMPONENT_HANDLER === index && 'text-main border-b-2 border-main'
          }`}
          onClick={() => onClickHandler(index)}
          key={index}
        >
          {title}
        </button>
      ))}
    </div>
  );
}

export default SubHeader;
