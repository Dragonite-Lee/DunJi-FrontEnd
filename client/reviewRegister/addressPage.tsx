import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostCode from 'components/daum-postcode/review';
import useReviewRegisterRedux from 'hooks/useReviewRegisterRedux';
import {dispatchDetailAddress,dispatchPostCodeOpen} from 'store/modules/reviewRegister';
import Period from 'client/reviewRegister/period';
import SubHeader from 'client/reviewRegister/subHeader';
import Map from 'client/reviewRegister/map';

function AddressRegister() {
  const [state, dispatch] = useReviewRegisterRedux();
  const [detailAddress, setDetailAddress] = useState(state.detailAddress);
  
  const btnHandler = (val: boolean) => dispatch(dispatchPostCodeOpen(val));
  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setDetailAddress(e.currentTarget.value);
    dispatch(dispatchDetailAddress(e.currentTarget.value));
  };

  return (
    <>
      {state.COMPONENT_HANDLER === 0 && (
        <>
          {!state.POSTCODE_OPEN && <SubHeader />}
          {state.ADDRESS_OPEN && (
            <>
              {!state.POSTCODE_OPEN && (
                <>
                  <div className="px-[18px]  w-full">
                    <div className="text-[12px] mt-[26px] mb-[16px] text-center Pretendard-Regular">
                      주소는 동, 면, 읍, 단지명 까지만 노출됩니다.
                    </div>
                    <button
                      className="flex items-center justify-center mb-8 bg-component_white w-full
                                                h-[5vh]
                                                text-[17px] rounded-[20rem] Pretendard-SemiBold"
                      onClick={() => btnHandler(!state.POSTCODE_OPEN)}
                    >
                      <FontAwesomeIcon icon="magnifying-glass" />
                      &nbsp; 주소 찾기
                    </button>
                  </div>
                </>
              )}
              {state.POSTCODE_OPEN && <PostCode />}
              {state.address && !state.POSTCODE_OPEN && (
                <div className="sm:w-[375px] sm:m-auto px-[18px]">
                  <div className="">
                    <Map />
                  </div>
                  <div className="justify-between items-center text-xl">
                    <div className="mt-12 mb-4 text-[17px] Pretendard-SemiBold">
                      주소 등록
                      <span className="text-main">*</span>
                    </div>
                    <div className="flex flex-col contents-center bg-component_white   rounded-2xl overflow-hidden">
                      <div className="p-4 border-b border-border_color text-[15px] Pretendard-Regular">
                        {state.address}
                      </div>
                      <input
                        className="p-4 h-full w-full bg-transparent outline-0 placeholder:text-font_gray text-[15px] Pretendard-Regular"
                        type="text"
                        value={detailAddress}
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
        </>
      )}
    </>
  );
}

export default AddressRegister;