import Image from 'next/image';

import { NewRoomType } from 'types';
import convertRoomSize from 'utils/convertRoomSize';

interface NewRoomItemProps {
  data: NewRoomType;
}

function NewRoomItem({ data }: NewRoomItemProps): JSX.Element {
  return (
    <div className="w-[140px] mr-[16px]">
      <div>
        {/* *이미지칸 */}
        <Image
          src={require('../../assets/icon/main/main_char.png')}
          layout="fixed"
          objectFit="fill"
          width={140}
          height={105}
          alt="대표방이미지"
        />
      </div>
      <div>
        <div className="pt-[8px] text-[15px] Pretendard-SemiBold">
          {data.priceUnit}세 {data.deposit} / {data.price}
        </div>
        <div className="pt-[4px] text-[12px] Pretendard-Regular">
          {data.address}
        </div>
        <div className="pt-[2px] text-font_gray text-[14px] Pretendard-Regular">
          {data.struct} {data.roomType}, {data.floor}층
        </div>
        <div className="pt-[2px] text-font_gray text-[14px] Pretendard-Regular">
          {data.roomSize}m<sup>2</sup> / {convertRoomSize(data.roomSize)}평
        </div>
      </div>
    </div>
  );
}

export default NewRoomItem;
