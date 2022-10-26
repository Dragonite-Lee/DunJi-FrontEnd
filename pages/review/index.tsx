import Header from "components/review-register/Header";
import AddressRegister from "components/review-register/AddressComponents";
import ReviewRegister from "components/review-register/ReviewComponents";
import { useEffect } from "react";
import { dispatchRegistrant } from "store/modules/roomRegister";
import useReviewRegisterRedux from "hooks/useReviewRegisterRedux";

export default function Register() {
    const [state,dispatch] = useReviewRegisterRedux();
    useEffect(() => {
        dispatch(dispatchRegistrant(localStorage.getItem('userId')));
    },[])
    return (
        <div className="bg-background_beige sm:w-[375px] sm:m-auto pb-[12rem] min-h-screen relative">
            <Header />
            <AddressRegister />
            <ReviewRegister />
        </div>
    );
}
