import useRoomSizeConvert from "hooks/useRoomSizeConvert";

type propsType = {
    roomSize: number;
    floor: number;
    wholeFloor: number;
    struct: string;
    roomType: string;
};

export default function BriefInfo({
    roomSize,
    floor,
    wholeFloor,
    struct,
    roomType,
}: propsType) {
    return (
        <div className="h-[50px] w-full bg-white rounded-standard_rounded flex items-center justify-evenly text-[15px] Pretendard-SemiBold">
            <div className="flex items-center justify-center">
                {roomSize}m<sup>2</sup> / {useRoomSizeConvert(roomSize)}평
            </div>
            <div className="h-full border-r"></div>
            <div className="flex items-center justify-center">
                {floor}층 / {wholeFloor}층
            </div>
            <div className="h-full border-r"></div>
            <div className="flex items-center justify-center">
                {struct} {roomType}
            </div>
        </div>
    );
}
