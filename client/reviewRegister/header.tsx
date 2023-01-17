import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch, useSelector } from 'react-redux';
import useGoBack from 'hooks/useGoback';
import { dispatchPostCodeOpen } from 'store/modules/reviewRegister';
import { RootState } from 'types';

function Header() {
  const dispatch = useDispatch();

  const { POSTCODE_OPEN } = useSelector(
    (state: RootState) => state.reviewRegister,
  );

  const postCodeOpen = () => {
    dispatch(dispatchPostCodeOpen(!POSTCODE_OPEN));
  };

  const goBack = useGoBack();

  return (
    <>
      {POSTCODE_OPEN ? (
        <header
          className="flex w-screen justify-between px-[18px]
        py-4  h-24 items-center text-xl  border-b sm:w-[375px] sm:m-auto "
        >
          <div className="flex text-2xl items-center">
            <div onClick={postCodeOpen}>
              <FontAwesomeIcon icon="chevron-left" />
            </div>
            <div className="ml-4 Pretendard-SemiBold text-[17px]">
              주소 찾기
            </div>
          </div>
        </header>
      ) : (
        <header
          className="flex w-screen justify-between px-[14px] 
                py-4  h-24 items-center text-xl  border-b sm:w-[375px] sm:m-auto"
        >
          <div className="flex text-2xl items-center">
            <div>
              <FontAwesomeIcon icon="chevron-left" />
            </div>
            <div className="ml-4 Pretendard-SemiBold text-[17px]">
              후기 작성하기
            </div>
          </div>
          <div
            className="text-main text-[12px] Pretendard-Regular"
            onClick={goBack}
          >
            취소
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
