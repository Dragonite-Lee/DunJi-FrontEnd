import Header from "components/room-detail/Header";
import ImageSlide from "components/room-detail/ImageSlide";
import Title from "components/room-detail/Title";
import BriefInfo from "components/room-detail/BriefInfo";
import Review from "components/room-detail/Review";
import Info from "components/room-detail/Info";
import Price from "components/room-detail/Price";
import Option from "components/room-detail/Option";
import Location from "components/room-detail/Location";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { mapApi } from "_api";
import { dispatchRoomInfoList, dispatchRoomPostList } from "store/modules/room";
import useRoomRedux from "hooks/useRoomRedux";
import { useEffect,useState } from "react";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import CompleteModal from "components/room-detail/CompleteModal";
// import LifeInfo from "components/room-detail/LifeInfo";

export default function RoomDetail() {
    const [state,dispatch] = useRoomRedux();
    const [state2, dispatch2] = useRoomRegisterRedux();
    const router = useRouter();
    const { id } = router.query;
    const [popUp, setPopUp] = useState(false);
    
    useEffect(() => {
        // *방상세정보 id별로 받아옴
        mapApi.getRoomDetail(id)
        .then((res) => {
            console.log(res);
            dispatch(dispatchRoomPostList(res.data.Room_Post));
            dispatch(dispatchRoomInfoList(res.data.Room_Info));
        })
        // console.log(state.ROOM_POST.image)
        // *모달창 3초 뒤 사라짐
        setPopUp(true);
        setTimeout(() => {
            setPopUp(false)
        },3000)
    },[id,dispatch])

    
    return (
        
        <div className="pb-[12rem] min-h-screen sm:w-[375px] sm:m-auto w-screen bg-background_beige">
            <>
            {popUp && <CompleteModal />}
                <Header title={state.ROOM_POST.address} />
                {/* <ImageSlide RoomID={state.ROOM_POST.roomID}/> */}
                <div className="px-[18px]">
                    <Title
                        buildingID={state.ROOM_POST.buildingID}
                        dealType={state.ROOM_INFO.dealType}
                        
                        price={state.ROOM_INFO.price}
                        deposit={state.ROOM_INFO.deposit}
                        priceUnit={state.ROOM_INFO.priceUnit}
                    />
                    <BriefInfo
                        roomSize={state.ROOM_INFO.roomSize}
                        floor={state.ROOM_INFO.floor}
                        wholeFloor={state.ROOM_INFO.wholeFloor}
                        struct={state.ROOM_INFO.struct}
                        roomType={state.ROOM_INFO.roomType}
                    />
                    <Review 
                        regDate={state.ROOM_POST.regDate}
                        explain={state.ROOM_POST.explain} 
                    />
                    <Info
                        availFrom={state.ROOM_INFO.availFrom}
                        availTo={state.ROOM_INFO.availTo}
                        availConsul={state.ROOM_INFO.availConsul}
                        roomSize={state.ROOM_INFO.roomSize}
                        floor={state.ROOM_INFO.floor}
                        wholeFloor={state.ROOM_INFO.wholeFloor}
                        struct={state.ROOM_INFO.struct}
                        Address={state.ROOM_POST.address}
                    />
                    <Price
                        price={state.ROOM_INFO.price}
                        deposit={state.ROOM_INFO.deposit}
                        manageCost={state.ROOM_INFO.manage}
                        manageElec={state.ROOM_INFO.manageElec}
                        manageGas={state.ROOM_INFO.manageGas}
                        manageWater={state.ROOM_INFO.manageWater}
                        manageInternet={state.ROOM_INFO.manageInternet}
                        manageTV={state.ROOM_INFO.manageTV}
                        manageInclude={state.ROOM_INFO.manageInclude}
                    />
                    {/* <LifeInfo />  생략 컴포넌트 */}
                    <Option 
                        elevator={state.ROOM_INFO.elevator}
                        car={state.ROOM_INFO.car}
                        loan={state.ROOM_INFO.loan}
                        women={state.ROOM_INFO.women}
                        pet={state.ROOM_INFO.pet}
                        aircon={state.ROOM_INFO.aircon}
                        shoe={state.ROOM_INFO.shoe}
                        shelf={state.ROOM_INFO.shelf}
                        induc={state.ROOM_INFO.induc}
                        micro={state.ROOM_INFO.micro}
                        refri={state.ROOM_INFO.refri}
                        desk={state.ROOM_INFO.desk}
                        sink={state.ROOM_INFO.sink}
                        washer={state.ROOM_INFO.washer}
                        closet={state.ROOM_INFO.closet}
                        gas={state.ROOM_INFO.gas}
                        bed={state.ROOM_INFO.bed}
                    />
                    <Location
                        latitude={state2.latitude}
                        longitude={state2.longitude}
                    />
                </div>
            </>
        </div>
    );
}
