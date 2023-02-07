import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapApi } from '_api/room';
import BriefInfo from 'client/room/detail/content/BriefInfo';
import CompleteModal from 'components/common/CompleteModal';
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
import { dispatchRoomList } from 'store/modules/room';

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
      dispatch(dispatchRoomList(res.data));
      
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
          {popUp && <CompleteModal title="방 내놓기 완료!"/>}
          <Header title={room.RoomInfo.address} />
          <div className="px-[18px]">
            <Title
              buildingID={room.RoomReview.buildingID}
              dealType={room.RoomInfo.dealType}
              price={room.RoomInfo.price}
              deposit={room.RoomInfo.deposit}
              priceUnit={room.RoomInfo.priceUnit}
            />
            <BriefInfo
              roomSize={room.RoomInfo.roomSize}
              floor={room.RoomInfo.floor}
              totalFloor={room.RoomInfo.totalFloor}
              structure={room.RoomInfo.structure}
              roomType={room.RoomInfo.roomType}
            />
            <ReviewContent
              regDate={room.RoomInfo.regDate}
              explain={room.RoomInfo.content}
            />
            <Info
              startedAt={room.RoomInfo.startedAt}
              finishedAt={room.RoomInfo.finishedAt}
              tenancyAgreement={room.RoomInfo.tenancyAgreement}
              roomSize={room.RoomInfo.roomSize}
              floor={room.RoomInfo.floor}
              totalFloor={room.RoomInfo.totalFloor}
              structure={room.RoomInfo.structure}
              address={room.RoomInfo.address}
            />
            <Price
              price={room.RoomInfo.price}
              deposit={room.RoomInfo.deposit}
              managementCost={room.RoomInfo.managementCost}
              utility={room.RoomInfo.utility}
            />
            <Option
              advantage={room.RoomInfo.advantage}
              option={room.RoomInfo.option}
            />
            <Location latitude={room.RoomInfo.latitude} longitude={room.RoomInfo.longitude} />
            <ReviewScore 
              totalRate={room.RoomReview.totalRate}
              cleanRate={room.RoomReview.cleanRate}
              noiseRate={room.RoomReview.noiseRate}
              accessRate={room.RoomReview.accessRate}
              hostRate={room.RoomReview.hostRate}
              facilityRate={room.RoomReview.facilityRate}
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
