import Header from "components/room-register/Header";
import AddressRegister from "components/room-register/AddressComponents";
import BottomNextBtn from "components/room-register/BottomNextBtn";
import DetailInfo from "components/room-register/extraComponents";
import BasicInfo from "components/room-register/basicComponents";
import PhotoRegister from "components/room-register/PhotoComponents";
import { useEffect } from "react";
import { dispatchRegistrant } from "store/modules/roomRegister";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";

export default function Register() {
    const [state,dispatch] = useRoomRegisterRedux();
    useEffect(() => {
        dispatch(dispatchRegistrant(localStorage.getItem('userId')));
    },[dispatch])
    return (
        <div className="bg-background_beige sm:w-[375px] sm:m-auto pb-[12rem] min-h-screen relative">
            <Header />
            <AddressRegister />
            <BasicInfo />
            <DetailInfo />
            <PhotoRegister />
            <BottomNextBtn />
        </div>
    );
}
