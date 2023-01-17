import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapApi } from '_api/room';
import BriefInfo from 'client/room/detail/content/BriefInfo';
import CompleteModal from 'client/room/detail/CompleteModal';
import Header from 'client/room/detail/Header';
import NoRoomHeader from 'client/room/detail/NoRoomHeader';
import Info from 'client/room/detail/content/Info';
import Location from 'client/room/detail/content/Location';
import Option from 'client/room/detail/content/Option';
import Price from 'client/room/detail/content/Price';
import ReviewContent from 'client/room/detail/content/ReviewContent';
import Title from 'client/room/detail/content/Title';
import ReviewScore from './content/ReviewScore';
import { RootState } from 'store/modules';
import useToggle from 'hooks/useToggle';
import { dispatchRoomInfoList, dispatchRoomPostList } from 'store/modules/room';

interface RoomDetailProps {
  roomId: string | string[] | undefined;
};

function RoomDetail({roomId}: RoomDetailProps) {
  const room = useSelector((room: RootState) => room.room);
  const roomRegister =useSelector((state: RootState) => state.roomRegister);
  const dispatch = useDispatch();
  const [popUp, handlerPopUp, handlerTool] = useToggle();

  const fetchRoomDetail = (roomId: string | string[] | undefined) => {
    mapApi.getRoomDetail(roomId).then((res) => {
      dispatch(dispatchRoomPostList(res.data.Room_Post));
      dispatch(dispatchRoomInfoList(res.data.Room_Info));
    });
  };

  const openPopup = () => {
    handlerTool.toggleOn();
    setTimeout(() => {
      handlerTool.toggleOff();
    }, 3000);
  };

  useEffect(() => {
    openPopup();
    // fetchRoomDetail(roomId)
  }, [dispatch]);

  return (
    <div className="pb-[12rem] min-h-screen sm:w-[375px] sm:m-auto w-screen bg-background_beige">
      {roomId ? (
        <>
          {popUp && <CompleteModal />}
          <Header title={room.ROOM_POST.address} />
          <div className="px-[18px]">
            <Title
              buildingID={room.ROOM_POST.buildingID}
              dealType={room.ROOM_INFO.dealType}
              price={room.ROOM_INFO.price}
              deposit={room.ROOM_INFO.deposit}
              priceUnit={room.ROOM_INFO.priceUnit}
            />
            <BriefInfo
              roomSize={room.ROOM_INFO.roomSize}
              floor={room.ROOM_INFO.floor}
              wholeFloor={room.ROOM_INFO.wholeFloor}
              struct={room.ROOM_INFO.struct}
              roomType={room.ROOM_INFO.roomType}
            />
            <ReviewContent
              regDate={room.ROOM_POST.regDate}
              explain={room.ROOM_POST.explain}
            />
            <Info
              availFrom={room.ROOM_INFO.availFrom}
              availTo={room.ROOM_INFO.availTo}
              availConsul={room.ROOM_INFO.availConsul}
              roomSize={room.ROOM_INFO.roomSize}
              floor={room.ROOM_INFO.floor}
              wholeFloor={room.ROOM_INFO.wholeFloor}
              struct={room.ROOM_INFO.struct}
              Address={room.ROOM_POST.address}
            />
            <Price
              price={room.ROOM_INFO.price}
              deposit={room.ROOM_INFO.deposit}
              manageCost={room.ROOM_INFO.manage}
              manageElec={room.ROOM_INFO.manageElec}
              manageGas={room.ROOM_INFO.manageGas}
              manageWater={room.ROOM_INFO.manageWater}
              manageInternet={room.ROOM_INFO.manageInternet}
              manageTV={room.ROOM_INFO.manageTV}
              manageInclude={room.ROOM_INFO.manageInclude}
            />
            <Option
              elevator={room.ROOM_INFO.elevator}
              car={room.ROOM_INFO.car}
              loan={room.ROOM_INFO.loan}
              women={room.ROOM_INFO.women}
              pet={room.ROOM_INFO.pet}
              aircon={room.ROOM_INFO.aircon}
              shoe={room.ROOM_INFO.shoe}
              shelf={room.ROOM_INFO.shelf}
              induc={room.ROOM_INFO.induc}
              micro={room.ROOM_INFO.micro}
              refri={room.ROOM_INFO.refri}
              desk={room.ROOM_INFO.desk}
              sink={room.ROOM_INFO.sink}
              washer={room.ROOM_INFO.washer}
              closet={room.ROOM_INFO.closet}
              gas={room.ROOM_INFO.gas}
              bed={room.ROOM_INFO.bed}
            />
            <Location latitude={roomRegister.latitude} longitude={roomRegister.longitude} />
            <ReviewScore 
            
            />
          </div>
        </>
      ) : (
        <div>
          <NoRoomHeader />
          <div className="text-[17px] p-[30px]">존재하지 않는 방입니다.</div>
        </div>
      )}
    </div>
  );
}

export default RoomDetail;
