import { useState } from 'react';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchMainImage } from 'store/modules/roomRegister';
import PhotoHeader from './PhotoHeader';
import UploadImage from './UploadImage';

export default function MainImage() {
  const [state, dispatch] = useRoomRegisterRedux();

  return (
    <div className="py-4 ">
      <PhotoHeader
        title="대표사진"
        subTitle="방을 대표하는 사진입니다. 밝고 선명한 사진이 좋습니다. (1장)"
      />
      <div className="h-48 mt-[12px]">
        <UploadImage />
      </div>
    </div>
  );
}
