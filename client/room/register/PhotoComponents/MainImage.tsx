import PhotoHeader from 'client/room/register/PhotoComponents/PhotoHeader';
import UploadImage from 'client/room/register/PhotoComponents/UploadImage';

function MainImage() {
  return (
    <div className="py-4 ">
      <PhotoHeader
        title="대표사진"
        subTitle="방을 대표하는 사진입니다. 밝고 선명한 사진이 좋습니다. (1장)"
      />
      <div className="h-32 mt-[12px]">
        <UploadImage />
      </div>
    </div>
  );
}

export default MainImage;
