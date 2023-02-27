import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AddressRegister from 'client/room/register/AddressComponents';
import BasicInfo from 'client/room/register/basicComponents';
import DetailInfo from 'client/room/register/extraComponents';
import PhotoRegister from 'client/room/register/PhotoComponents';
import RegisterHeader from 'client/room/register/RegisterHeader';
import { dispatchUserId } from 'store/modules/roomRegister';

function Register() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchUserId(localStorage.getItem('userId')));
  }, [dispatch]);

  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto pb-[12rem] min-h-screen relative">
      <RegisterHeader />
      <AddressRegister />
      <BasicInfo />
      <DetailInfo />
      <PhotoRegister />
    </div>
  );
}

export default Register;
