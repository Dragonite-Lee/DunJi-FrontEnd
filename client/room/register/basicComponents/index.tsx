import { useSelector } from 'react-redux';
import Floor from 'client/room/register/basicComponents/Floor';
import ManagementFee from 'client/room/register/basicComponents/ManagementFee';
import MoveDate from 'client/room/register/basicComponents/MoveDate';
import Price from 'client/room/register/basicComponents/Price';
import PriceUnit from 'client/room/register/basicComponents/PriceUnit';
import RoomType from 'client/room/register/basicComponents/RoomType';
import Size from 'client/room/register/basicComponents/Size';
import TransactionType from 'client/room/register/basicComponents/TransactionType';
import SubHeader from 'client/room/register/SubHeader';

function DetailRegister() {
  const roomRegister = useSelector((state: any) => state.roomRegister);

  return (
    <>
      {roomRegister.COMPONENT_HANDLER === 1 && (
        <div className="h-full ">
          <SubHeader />
          <div className="px-[18px] w-screen mb-4 sm:w-[375px] sm:m-auto">
            <TransactionType />
            <RoomType />
            <PriceUnit />
            <Price />
            <ManagementFee />
            <Floor />
            <Size />
            <MoveDate />
          </div>
        </div>
      )}
    </>
  );
}

export default DetailRegister;
