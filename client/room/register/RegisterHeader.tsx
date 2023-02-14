import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/layout/Header';
import CancelHeader from 'components/layout/Header/CancelHeader';
import { dispatchPostCodeOpen } from 'store/modules/roomRegister';
import { RootState } from 'types';

function RegisterHeader() {
  const dispatch = useDispatch();
  const roomRegister = useSelector((state: RootState) => state.roomRegister);

  const handleBackBtnClick = () => {
    dispatch(dispatchPostCodeOpen(!roomRegister.POSTCODE_OPEN));
  };

  return roomRegister.POSTCODE_OPEN ? (
    <Header title="주소 찾기" backAction={handleBackBtnClick} />
  ) : (
    <CancelHeader title={'방 내놓기'} />
  );
}

export default RegisterHeader;
