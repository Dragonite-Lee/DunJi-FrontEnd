import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'client/reviewRegister/header';
import ReviewRegister from 'client/reviewRegister/reviewRegisterPage';
import AddressRegister from 'client/reviewRegister/addressPage';
import { dispatchUserId } from 'store/modules/reviewRegister';

function Register() {
  const dispatch = useDispatch();

  function localStorageGetUserID()  {
    dispatch(dispatchUserId(localStorage.getItem('userId')));
  }

  useEffect(() => {
    localStorageGetUserID();
  }, [dispatch]);

  useEffect(() => {
    localStorageGetUserID();
  }, [dispatch, localStorageGetUserID]);

  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto pb-[12rem] relative min-h-screen">
      <Header />
      <AddressRegister />
      <ReviewRegister />
    </div>
  );
}

export default Register;
