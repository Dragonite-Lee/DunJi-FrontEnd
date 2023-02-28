import Image from 'next/image';
import { AllRoomType } from 'types';

interface CardProps extends AllRoomType {
  isTransfer?: boolean;
}
function Card({
  price,
  deposit,
  sigungu,
  dong,
  roomType,
  floor,
  structure,
  roomSize,
  priceUnit,
  isTransfer,
  image,
}: CardProps) {
  return (
    <div>
      <div className="h-[180px] relative overflow-hidden  rounded-[5px]">
        <div className="overflow-hidden w-full h-full	">
          <Image
            src={require('assets/images/room2.png')}
            alt="추가 기능 파트 닫기 버튼"
            layout="fill"
          />
        </div>
        {isTransfer && (
          <div className="absolute top-4 left-4 text-white w-[30px] h-[18px] text-center  bg-[#7DE1FF] leading-[18px] rounded-[5px]">
            양도
          </div>
        )}
        <div className="absolute top-3 right-4">
          <Image
            src={require('assets/icon/myPage/찜한매물.svg')}
            alt="추가 기능 파트 닫기 버튼"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="mt-[6px] mb-[32px]">
        <div className="flex justify-between	">
          <span className="text-[12px]">
            흥부하우스 B동 / {sigungu} {dong}
          </span>
          <span className="text-[14px] text-[#A9A7A2]">
            {structure} {roomType}, {floor}층
          </span>
        </div>
        <div className="flex justify-between	">
          <span className="text-[17px] font-bold">
            {priceUnit} {price} / {deposit}
          </span>
          <span className="text-[14px] text-[#A9A7A2]">{roomSize}m² / 7평</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
