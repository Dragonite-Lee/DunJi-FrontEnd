import { useSelector } from 'react-redux';

import DetailText from 'client/room/register/extraComponents/DetailText';
import Loan from 'client/room/register/extraComponents/Loan';
import OnlyWomen from 'client/room/register/extraComponents/OnlyWomen';
import Option from 'client/room/register/extraComponents/Option';
import Parking from 'client/room/register/extraComponents/Parking';
import Pet from 'client/room/register/extraComponents/Pet';
import Title from 'client/room/register/extraComponents/Title';
import SubHeader from 'client/room/register/SubHeader';
import { RootState } from 'types';

function DetailRegister() {
  const { COMPONENT_HANDLER } = useSelector(
    (state: RootState) => state.roomRegister,
  );

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
        </div>
      )}
    </>
  );
}

export default DetailRegister;
