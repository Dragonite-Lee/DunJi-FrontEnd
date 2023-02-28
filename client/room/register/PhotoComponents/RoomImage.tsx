import PhotoHeader from 'client/room/register/PhotoComponents/PhotoHeader';
import UploadImageSmall from 'client/room/register/PhotoComponents/UploadImageSmall';

function RoomImage() {
  return (
    <div className="pt-[30px] ">
      <PhotoHeader
        title="거실/방 사진"
        subTitle="최대 사진으로 구조를 파악할 수 있도록 모든 방의 사진을 다양한 각도로 찍어주세요. (최소 2장 최대 6장)"
      />
      <div className="h-32 mt-[12px]">
        <UploadImageSmall />
      </div>
    </div>
  );
}

export default RoomImage;
