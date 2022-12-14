import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import SubHeader from '../SubHeader';
import DetailText from './DetailText';
import Loan from './Loan';
import OnlyWomen from './OnlyWomen';
import Option from './Option';
import Parking from './Parking';
import Pet from './Pet';
import Title from './Title';

export default function DetailRegister() {
  const [state] = useRoomRegisterRedux();

  return (
    <>
      {state.COMPONENT_HANDLER === 2 && (
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
