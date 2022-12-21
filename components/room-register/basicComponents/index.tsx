import { useSelector, useDispatch } from 'react-redux';
import SubHeader from '../SubHeader';
import Floor from './Floor';
import ManagementFee from './ManagementFee';
import MoveDate from './MoveDate';
import Price from './Price';
import PriceUnit from './PriceUnit';
import RoomType from './RoomType';
import Size from './Size';
import TransactionType from './TransactionType';

export default function DetailRegister() {
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
