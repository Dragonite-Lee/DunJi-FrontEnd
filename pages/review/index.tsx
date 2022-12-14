import { useEffect } from 'react';
import AddressRegister from 'components/review-register/AddressComponents';
import BottomNextBtn from 'components/review-register/BottomNextBtn';
import Header from 'components/review-register/Header';
import ReviewRegister from 'components/review-register/ReviewComponents';
import useReviewRegisterRedux from 'hooks/useReviewRegisterRedux';
import { dispatchRegistrant } from 'store/modules/reviewRegister';

export default function Register() {
  const [state, dispatch] = useReviewRegisterRedux();
  useEffect(() => {
    dispatch(dispatchRegistrant(localStorage.getItem('userId')));
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
