import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { mapApi } from '_api';
import BriefInfo from 'client/room/BriefInfo';
import CompleteModal from 'client/room/CompleteModal';
import Header from 'client/room/Header';
import Header2 from 'client/room/Header2';
import Info from 'client/room/Info';
import Location from 'client/room/Location';
import Option from 'client/room/Option';
import Price from 'client/room/Price';
import Review from 'client/room/Review';
import Title from 'client/room/Title';
import useRoomRedux from 'hooks/useRoomRedux';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchRoomInfoList, dispatchRoomPostList } from 'store/modules/room';

function RoomDetail() {
  const [state, dispatch] = useRoomRedux();
  const [state2] = useRoomRegisterRedux();
  const router = useRouter();
  const { id } = router.query;
  const [popUp, setPopUp] = useState(false);

  const fetchRoomDetail = (id: string | string[] | undefined) => {
    mapApi.getRoomDetail(id).then((res) => {
      dispatch(dispatchRoomPostList(res.data.Room_Post));
      dispatch(dispatchRoomInfoList(res.data.Room_Info));
    });
  };

  const openPopup = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };

  useEffect(() => {
    if (router.isReady) {
      //  fetchRoomDetail(id);
    }

    openPopup();
  }, [id, dispatch, router.isReady]);

  return (
    <div className="pb-[12rem] min-h-screen sm:w-[375px] sm:m-auto w-screen bg-background_beige">
      {id ? (
        <>
          {popUp && <CompleteModal />}
          <Header title={state.ROOM_POST.address} />
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
            <Location latitude={state2.latitude} longitude={state2.longitude} />
          </div>
        </>
      ) : (
        <div>
          <Header2 />
          <div className="text-[17px] p-[30px]">존재하지 않는 방입니다.</div>
        </div>
      )}
    </div>
  );
}

export default RoomDetail;
