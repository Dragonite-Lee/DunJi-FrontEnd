import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { mapApi } from '_api/room';
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
import { dispatchRoomInfoList, dispatchRoomPostList } from 'store/modules/room';
import { RootState } from 'types';

function RoomDetail() {
  const dispatch = useDispatch();

  const { ROOM_POST, ROOM_INFO } = useSelector(
    (state: RootState) => state.room,
  );
  const { latitude, longitude } = useSelector(
    (state: RootState) => state.roomRegister,
  );

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
          <Header title={ROOM_POST.address} />
          <div className="px-[18px]">
            <Title
              buildingID={ROOM_POST.buildingID}
              dealType={ROOM_INFO.dealType}
              price={ROOM_INFO.price}
              deposit={ROOM_INFO.deposit}
              priceUnit={ROOM_INFO.priceUnit}
            />
            <BriefInfo
              roomSize={ROOM_INFO.roomSize}
              floor={ROOM_INFO.floor}
              wholeFloor={ROOM_INFO.wholeFloor}
              struct={ROOM_INFO.struct}
              roomType={ROOM_INFO.roomType}
            />
            <Review regDate={ROOM_POST.regDate} explain={ROOM_POST.explain} />
            <Info
              availFrom={ROOM_INFO.availFrom}
              availTo={ROOM_INFO.availTo}
              availConsul={ROOM_INFO.availConsul}
              roomSize={ROOM_INFO.roomSize}
              floor={ROOM_INFO.floor}
              wholeFloor={ROOM_INFO.wholeFloor}
              struct={ROOM_INFO.struct}
              Address={ROOM_POST.address}
            />
            <Price
              price={ROOM_INFO.price}
              deposit={ROOM_INFO.deposit}
              manageCost={ROOM_INFO.manage}
              manageElec={ROOM_INFO.manageElec}
              manageGas={ROOM_INFO.manageGas}
              manageWater={ROOM_INFO.manageWater}
              manageInternet={ROOM_INFO.manageInternet}
              manageTV={ROOM_INFO.manageTV}
              manageInclude={ROOM_INFO.manageInclude}
            />
            <Option
              elevator={ROOM_INFO.elevator}
              car={ROOM_INFO.car}
              loan={ROOM_INFO.loan}
              women={ROOM_INFO.women}
              pet={ROOM_INFO.pet}
              aircon={ROOM_INFO.aircon}
              shoe={ROOM_INFO.shoe}
              shelf={ROOM_INFO.shelf}
              induc={ROOM_INFO.induc}
              micro={ROOM_INFO.micro}
              refri={ROOM_INFO.refri}
              desk={ROOM_INFO.desk}
              sink={ROOM_INFO.sink}
              washer={ROOM_INFO.washer}
              closet={ROOM_INFO.closet}
              gas={ROOM_INFO.gas}
              bed={ROOM_INFO.bed}
            />
            <Location latitude={latitude} longitude={longitude} />
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
