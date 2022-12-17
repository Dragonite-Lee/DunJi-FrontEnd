import useRoomSizeConvert from 'hooks/useRoomSizeConvert';

interface NewRoomItemProps {
    latitude: number;
    longitude: number;
    roomID: string;
    roomType: string;
    dealType: string;
    priceUnit: string;
    deposit: number;
    price: number;
    floor: string;
    struct: string;
    roomSize: number;
    image: number;
    recommend: number;
    address: string;
}

function NewRoomItem({data}: {data: NewRoomItemProps}): JSX.Element {
  return (
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
        {data.roomSize}m<sup>2</sup> /{' '}
        {useRoomSizeConvert(data.roomSize)}평
        </div>
    </div>
  );
}

export default NewRoomItem;