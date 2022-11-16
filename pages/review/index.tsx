import Header from "components/review-register/Header";
import AddressRegister from "components/review-register/AddressComponents";
import ReviewRegister from "components/review-register/ReviewComponents";
import { useEffect } from "react";
import { dispatchRegistrant } from "store/modules/reviewRegister";
import useReviewRegisterRedux from "hooks/useReviewRegisterRedux";
import BottomNextBtn from "components/review-register/BottomNextBtn";

export default function Register() {
    const [state,dispatch] = useReviewRegisterRedux();
    useEffect(() => {
        dispatch(dispatchRegistrant(localStorage.getItem('userId')));
    },[dispatch])
    
    return (
        <div className="bg-background_beige sm:w-[375px] sm:m-auto pb-[12rem] relative min-h-screen">
            <Header />
            <AddressRegister />
            <ReviewRegister />
            <BottomNextBtn />
        </div>
    );
}
