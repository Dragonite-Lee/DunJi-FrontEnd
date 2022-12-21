import { useEffect, useState } from 'react';
import Image from 'next/image';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchRoom1Image } from 'store/modules/roomRegister';
import PhotoHeader from './PhotoHeader';
import UploadImageSmall from './UploadImageSmall';

export default function RoomImage() {
  const [state, dispatch] = useRoomRegisterRedux();

  return (
    <div className="pt-[30px] ">
      <PhotoHeader
        title="거실/방 사진"
        subTitle="최대 사진으로 구조를 파악할 수 있도록 모든 방의 사진을 다양한 각도로 찍어주세요. (최소 2장 최대 6장)"
      />
      <div className="h-48 mt-[12px]">
        <UploadImageSmall />
      </div>
    </div>
  );
}
