import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddressRegister from 'client/reviewRegister/addressPage';
import BottomNextBtn from 'client/reviewRegister/bottomNextBtn';
import Header from 'client/reviewRegister/header';
import ReviewRegister from 'client/reviewRegister/reviewRegisterPage';
import { dispatchRegistrant } from 'store/modules/reviewRegister';

function Register() {
  const dispatch = useDispatch();

  const localStorageGetUserID = useCallback(() => {
    dispatch(dispatchRegistrant(localStorage.getItem('userId')));
  }, [dispatch]);

  useEffect(() => {
    localStorageGetUserID();
  }, [dispatch, localStorageGetUserID]);

  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto pb-[12rem] relative min-h-screen">
      <Header />
      <AddressRegister />
      <ReviewRegister />
      <BottomNextBtn />
    </div>
  );
}

export default Register;
