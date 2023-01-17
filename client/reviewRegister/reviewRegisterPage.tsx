import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'types';
import SubHeader from 'client/reviewRegister/subHeader';
import Content from 'client/reviewRegister/content';
import ReviewImg from 'client/reviewRegister/reviewImg';
import Total from 'client/reviewRegister/total';
import ReviewOption from 'client/reviewRegister/reviewOption';
import { dispatchClean, dispatchSound, dispatchAccessible, dispatchLandlord, dispatchFacility } from 'store/modules/reviewRegister';

function ReviewRegister() {
  const reviewRegister = useSelector((state: RootState) => state.reviewRegister);
  const typeArr = useMemo(() => ['만족', '보통', '불만족'], []);
  console.log(reviewRegister)
  return (
    <>
      {reviewRegister.COMPONENT_HANDLER === 1 && (
        <div className="h-full ">
          <SubHeader />
          <div className="px-[18px] static w-screen mb-4 sm:w-[375px] sm:m-auto">
            <Total />
            <ReviewOption satisfactionArr={typeArr} dispatchType={dispatchClean} stateType={reviewRegister.clean} content="청결도" />
            <ReviewOption satisfactionArr={typeArr} dispatchType={dispatchSound} stateType={reviewRegister.sound} content="방음" />
            <ReviewOption satisfactionArr={typeArr} dispatchType={dispatchAccessible} stateType={reviewRegister.accessible} content="위치" />
            <ReviewOption satisfactionArr={typeArr} dispatchType={dispatchLandlord} stateType={reviewRegister.landlord} content="집주인 친절" />
            <ReviewOption satisfactionArr={typeArr} dispatchType={dispatchFacility} stateType={reviewRegister.facility} content="시설 만족도" />
            <Content />
            <div className="mt-[30px]">
              <div className="text-[17px] Pretendard-SemiBold">사진등록</div>
              <div className="mt-[4px] mb-[15px] text-[12px] Pretendard-Regular text-font_gray">
                최대 3장 / 밝고 선명한 사진이 좋습니다.
              </div>
              <ReviewImg />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewRegister;
