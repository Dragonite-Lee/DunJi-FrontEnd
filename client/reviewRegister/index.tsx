import { useEffect } from 'react';
import BottomNextBtn from 'client/reviewRegister/bottomNextBtn';
import Header from 'client/reviewRegister/header';
import ReviewRegister from 'client/reviewRegister/reviewRegisterPage';
import AddressRegister from 'client/reviewRegister/addressPage';
import useReviewRegisterRedux from 'hooks/useReviewRegisterRedux';
import { dispatchRegistrant } from 'store/modules/reviewRegister';

function Register() {
  const [state, dispatch] = useReviewRegisterRedux();
  function localStorageGetUserID()  {
    dispatch(dispatchRegistrant(localStorage.getItem('userId')));
  }
  useEffect(() => {
    localStorageGetUserID()
  }, [dispatch]);

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
