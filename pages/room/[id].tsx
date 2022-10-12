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
import { useEffect } from "react";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
// import LifeInfo from "components/room-detail/LifeInfo";

export default function RoomDetail() {
    const [state,dispatch] = useRoomRedux();
    const [state2, dispatch2] = useRoomRegisterRedux();
    const router = useRouter();
    const { id } = router.query;
    
    useEffect(() => {
        mapApi.getRoomDetail(id)
        .then((res) => {
            console.log(res);
            dispatch(dispatchRoomPostList(res.data.Room_Post));
            dispatch(dispatchRoomInfoList(res.data.Room_Info));
        })
        // console.log(state.ROOM_POST.image)
    },[id])


    return (
        
        <div className="pb-[12rem] h-screen sm:w-[375px] sm:m-auto w-screen bg-background_beige">
            <>
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
                        title={state.ROOM_POST.title}
                        explain={state.ROOM_POST.explain} 
                    />
                    <Info
                        availPeriodFrom={state.ROOM_POST.availFrom}
                        availPeriodTo={state.ROOM_POST.availTo}
                        availPeriodConsul={state.ROOM_POST.availConsul}
                        roomSize={state.ROOM_INFO.roomSize}
                        floor={state.ROOM_INFO.floor}
                        struct={state.ROOM_INFO.struct}
                        detailAddress={state.ROOM_POST.detailAddress}
                    />
                    <Price
                        price={state.ROOM_INFO.price}
                        deposit={state.ROOM_INFO.deposit}
                        manageCost={state.ROOM_INFO.manageCost}
                        manageElec={state.ROOM_INFO.manageElec}
                        manageGas={state.ROOM_INFO.manageGas}
                        manageWater={state.ROOM_INFO.manageWater}
                        manageInternet={state.ROOM_INFO.manageInternet}
                        manageTV={state.ROOM_INFO.manageTV}
                    />
                    {/* <LifeInfo />  생략 컴포넌트 */}
                    <Option />
                    <Location
                        latitude={state2.latitude}
                        longitude={state2.longitude}
                    />
                </div>
            </>
        </div>
    );
}
