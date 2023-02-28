import { useDispatch , useSelector } from 'react-redux';
import { useCallback } from 'react';
import Floor from 'client/room/register/basicComponents/Floor';
import ManagementFee from 'client/room/register/basicComponents/ManagementFee';
import MoveDate from 'client/room/register/basicComponents/MoveDate';
import Price from 'client/room/register/basicComponents/Price';
import PriceUnit from 'client/room/register/basicComponents/PriceUnit';
import RoomType from 'client/room/register/basicComponents/RoomType';
import Size from 'client/room/register/basicComponents/Size';
import DealType from 'client/room/register/basicComponents/DealType';
import SubHeader from 'client/room/register/SubHeader';
import BottomNextBtnLayout from 'components/common/BottomNextBtnLayout';
import { RootState } from 'types';
import { componentHandle } from 'store/modules/roomRegister';

function DetailRegister() {
  const dispatch = useDispatch();

  const { COMPONENT_HANDLER, dealType, roomType, priceUnit, deposit, price, floor, totalFloor, structure, startedAt, finishedAt } = useSelector(
    (state: RootState) => state.roomRegister,
  );

  const componentNextHandler = useCallback(() => {
    dispatch(componentHandle(2));
  },[]);
  return (
    <>
      {COMPONENT_HANDLER === 1 && (
        <div className="h-full ">
          <SubHeader />
          <div className="px-[18px] w-screen mb-4 sm:w-[375px] sm:m-auto">
            <DealType />
            <RoomType />
            <PriceUnit />
            <Price />
            <ManagementFee />
            <Floor />
            <Size />
            <MoveDate />
          </div>
          <BottomNextBtnLayout state={dealType && roomType && priceUnit && deposit && price && floor && totalFloor && structure && startedAt && finishedAt} content="다음으로" onClick={componentNextHandler} />
        </div>
      )}
    </>
  );
}

export default DetailRegister;
