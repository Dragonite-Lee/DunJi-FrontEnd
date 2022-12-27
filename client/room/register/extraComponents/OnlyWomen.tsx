import ChooseOneBtn from 'components/common/ChooseOneBtn';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchWomen } from 'store/modules/roomRegister';

function OnlyWomen() {
  const [state, dispatch] = useRoomRegisterRedux();

  const women = state.women;

  const checkHandler = (index: number) => {
    if (women === index) dispatch(dispatchWomen(2));
    else dispatch(dispatchWomen(index));
  };

  return (
    <div className="w-full grid grid-cols-[1fr_2fr] h-room_register_btn_height1 mt-4 text-[15px]">
      <div className="flex items-center h-full">여성전용</div>
      <ChooseOneBtn value="여성" check={women} checkHandler={checkHandler} />
    </div>
  );
}

export default OnlyWomen;
