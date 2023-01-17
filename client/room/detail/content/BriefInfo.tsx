import convertRoomSize from 'utils/convertRoomSize';

interface BriefInfoProps {
  floor: number;
  roomSize: number;
  roomType: string;
  struct: string;
  wholeFloor: number;
}

function BriefInfo({
  floor,
  roomSize,
  roomType,
  struct,
  wholeFloor,
}: BriefInfoProps) {
  const convertedRoomSize = convertRoomSize(roomSize);

  return (
    <div className="h-[50px] w-full bg-white rounded-standard_rounded flex items-center justify-evenly text-[15px] Pretendard-SemiBold">
      <div className="flex items-center justify-center">
        {roomSize}m<sup>2</sup> / {convertedRoomSize}평
      </div>
      <div className="h-full border-r" />
      <div className="flex items-center justify-center">
        {floor}층 / {wholeFloor}층
      </div>
      <div className="h-full border-r" />
      <div className="flex items-center justify-center">
        {struct} {roomType}
      </div>
    </div>
  );
}

export default BriefInfo;
