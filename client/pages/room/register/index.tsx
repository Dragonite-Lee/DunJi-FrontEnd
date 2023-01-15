import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AddressRegister from 'client/room/register/AddressComponents';
import BasicInfo from 'client/room/register/basicComponents';
import BottomNextBtn from 'client/room/register/BottomNextBtn';
import DetailInfo from 'client/room/register/extraComponents';
import PhotoRegister from 'client/room/register/PhotoComponents';
import RegisterHeader from 'client/room/register/RegisterHeader';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchRegistrant } from 'store/modules/roomRegister';

function Register() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchRegistrant(localStorage.getItem('userId')));
  }, [dispatch]);

  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto pb-[12rem] min-h-screen relative">
      <RegisterHeader />
      <AddressRegister />
      <BasicInfo />
      <DetailInfo />
      <PhotoRegister />
      <BottomNextBtn />
    </div>
  );
}

export default Register;
