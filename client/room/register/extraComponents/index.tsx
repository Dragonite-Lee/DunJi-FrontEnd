import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import DetailText from 'client/room/register/extraComponents/DetailText';
import Loan from 'client/room/register/extraComponents/Loan';
import OnlyWomen from 'client/room/register/extraComponents/OnlyWomen';
import Option from 'client/room/register/extraComponents/Option';
import Parking from 'client/room/register/extraComponents/Parking';
import Pet from 'client/room/register/extraComponents/Pet';
import Title from 'client/room/register/extraComponents/Title';
import SubHeader from 'client/room/register/SubHeader';
import BottomNextBtnLayout from 'components/common/BottomNextBtnLayout';
import { RootState } from 'types';
import { componentHandle } from 'store/modules/roomRegister';

function DetailRegister() {
  const dispatch = useDispatch();

  const { COMPONENT_HANDLER, car, pet, women, loan, title, content } = useSelector(
    (state: RootState) => state.roomRegister,
  );
  
  const componentNextHandler = useCallback(() => {
    dispatch(componentHandle(3));
  },[]);
  
  return (
    <>
      {COMPONENT_HANDLER === 2 && (
        <div className="h-full">
          <SubHeader />
          <div className="px-[18px] w-screen mb-4 sm:w-[375px] sm:m-auto">
            <Option />
            <div className="text-[17px]  mt-[30px] Pretendard-SemiBold">
              기타
            </div>
            <div className="mt-[16px] Pretendard-Regular">
              <Parking />
              <Pet />
              <OnlyWomen />
              <Loan />
            </div>
            <Title />
            <DetailText />
          </div>
          <BottomNextBtnLayout state={String(car) && String(pet) && String(women) && String(loan) && title && content} content="다음으로" onClick={componentNextHandler} />
        </div>
      )}
    </>
  );
}

export default DetailRegister;
