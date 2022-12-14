import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/modules';
import SubHeader from '../SubHeader';
import Accessible from './Accessible';
import Clean from './Clean';
import Content from './Content';
import Facility from './Facility';
import Landlord from './Landlord';
import ReviewImg from './ReviewImg';
import Sound from './Sound';
import Total from './Total';

export default function ReviewRegister() {
  const reviewRegister = useSelector(
    (state: RootState) => state.reviewRegister,
  );

  return (
    <>
      {reviewRegister.COMPONENT_HANDLER === 1 && (
        <div className="h-full ">
          <SubHeader />
          <div className="px-[18px] static w-screen mb-4 sm:w-[375px] sm:m-auto">
            <Total />
            <Clean />
            <Sound />
            <Accessible />
            <Landlord />
            <Facility />
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
