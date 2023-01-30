import { useSelector } from 'react-redux';
import BottomNextBtn from 'client/room/register/BottomSubmitBtn';
import EtcRoomImage from 'client/room/register/PhotoComponents/EtcRoomImage';
import MainImage from 'client/room/register/PhotoComponents/MainImage';
import RoomImage from 'client/room/register/PhotoComponents/RoomImage';
import SubHeader from 'client/room/register/SubHeader';
import { RootState } from 'types';

function PhotoRegister() {
  const { COMPONENT_HANDLER } = useSelector(
    (state: RootState) => state.roomRegister,
  );

  return (
    <>
      {COMPONENT_HANDLER === 3 && (
        <div className="h-full ">
          <SubHeader />
          <div className="px-[18px] mt-[18px] w-screen sm:w-[375px] sm:m-auto">
            <MainImage />
            <RoomImage />
            <EtcRoomImage />
          </div>
        <BottomNextBtn />
        </div>
      )}
    </>
  );
}

export default PhotoRegister;
