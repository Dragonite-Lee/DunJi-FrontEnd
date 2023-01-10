import { useDispatch, useSelector } from 'react-redux';

import ChooseOneBtn from 'components/common/ChooseOneBtn';
import { dispatchLoan } from 'store/modules/roomRegister';
import { RootState } from 'types';

function Parking() {
  const dispatch = useDispatch();

  const { loan } = useSelector((state: RootState) => state.roomRegister);

  const checkHandler = (index: number) => {
    if (loan === index) dispatch(dispatchLoan(2));
    else dispatch(dispatchLoan(index));
  };

  return (
    <div className="w-full grid grid-cols-[1fr_2fr] h-room_register_btn_height1 mt-4 text-[15px] ">
      <div className="flex items-center h-full">전세대출</div>
      <ChooseOneBtn value="대출" check={loan} checkHandler={checkHandler} />
    </div>
  );
}

export default Parking;
