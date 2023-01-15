import Header from 'components/common/Header';
import CancelHeader from 'components/common/Header/CancelHeader';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchPostCodeOpen } from 'store/modules/roomRegister';

function RegisterHeader() {
  const [state, dispatch] = useRoomRegisterRedux();

  const handleBackBtnClick = () => {
    dispatch(dispatchPostCodeOpen(!state.POSTCODE_OPEN));
  };

  return state.POSTCODE_OPEN ? (
    <Header title="주소 찾기" onClick={handleBackBtnClick} />
  ) : (
    <CancelHeader title={'방 내놓기'} />
  );
}

export default RegisterHeader;
