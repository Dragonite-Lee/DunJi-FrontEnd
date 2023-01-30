import { useCallback } from 'react';
import Map from 'client/reviewRegister/map';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Period from 'client/reviewRegister/period';
import SubHeader from 'client/reviewRegister/subHeader';
import PostCode from 'components/daum-postcode/review';
import BottomNextBtnLayout from 'components/common/BottomNextBtnLayout';
import {
  dispatchAddressDetail,
  dispatchPostCodeOpen,
  componentHandle
} from 'store/modules/reviewRegister';
import { RootState } from 'types';

function AddressRegister() {
  const {POSTCODE_OPEN, COMPONENT_HANDLER, ADDRESS_OPEN, address, addressDetail, periodFrom, periodTo} = useSelector((state: RootState) => state.reviewRegister);
  const dispatch = useDispatch();
  
  const postCodeOpen = useCallback(() => {
    dispatch(dispatchPostCodeOpen(!POSTCODE_OPEN));
  },[POSTCODE_OPEN])

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(dispatchAddressDetail(e.currentTarget.value));
  };
  const componentNextHandler = useCallback(() => {
    dispatch(componentHandle(1));
  },[]);
  return (
    <>
      {COMPONENT_HANDLER === 0 && (
        <>
          {!POSTCODE_OPEN && <SubHeader />}
          {ADDRESS_OPEN && (
            <>
              {!POSTCODE_OPEN && (
                <>
                  <div className="px-[18px]  w-full">
                    <div className="text-[12px] mt-[26px] mb-[16px] text-center Pretendard-Regular">
                      주소는 동, 면, 읍, 단지명 까지만 노출됩니다.
                    </div>
                    <button
                      className="flex items-center justify-center mb-8 bg-component_white w-full h-[5vh] text-[17px] rounded-[20rem] Pretendard-SemiBold"
                      onClick={postCodeOpen}
                    >
                      <FontAwesomeIcon icon="magnifying-glass" />
                      &nbsp; 주소 찾기
                    </button>
                  </div>
                </>
              )}
              {POSTCODE_OPEN && <PostCode />}
              {address && !POSTCODE_OPEN && (
                <div className="sm:w-[375px] sm:m-auto px-[18px]">
                  <div>
                    <Map />
                  </div>
                  <div className="justify-between items-center text-xl">
                    <div className="mt-12 mb-4 text-[17px] Pretendard-SemiBold">
                      주소 등록
                      <span className="text-main">*</span>
                    </div>
                    <div className="flex flex-col contents-center bg-component_white   rounded-2xl overflow-hidden">
                      <div className="p-4 border-b border-border_color text-[15px] Pretendard-Regular">
                        {address}
                      </div>
                      <input
                        className="p-4 h-full w-full bg-transparent outline-0 placeholder:text-font_gray text-[15px] Pretendard-Regular"
                        type="text"
                        value={addressDetail }
                        onChange={inputHandler}
                        placeholder="상세 주소를 입력해주세요"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-[30px] mb-4 text-[17px] Pretendard-SemiBold">
                      거주 기간
                      <span className="text-main">*</span>
                    </div>
                    <Period />
                  </div>
                </div>
              )}
            </>
          )}
          <BottomNextBtnLayout state={address && addressDetail && periodFrom && periodTo} content="다음으로" onClick={componentNextHandler} />
        </>
      )}
    </>
  );
}

export default AddressRegister;
