import { useState } from 'react';
import InfoField from 'client/room/InfoField';
import OpenLayout from 'client/room/OpenLayout';
import useRoomSizeConvert from 'utils/convertRoomSize';

interface infoProps {
  availFrom: string;
  availTo: string;
  availConsul: boolean;
  roomSize: string;
  floor: number;
  wholeFloor: number;
  struct: string;
  Address: string;
}

function Info({
  availFrom,
  availTo,
  availConsul,
  roomSize,
  floor,
  wholeFloor,
  struct,
  Address,
}: infoProps) {
  const convertedRoomSize = useRoomSizeConvert(Number(roomSize));

  const [open, setOpen] = useState(false);

  const moveInDate = `${availFrom} 부터 \n ${availTo}${
    availConsul ? '(협의가능)' : '(협의불가)'
  }`;

  const moveInDateEnter = moveInDate.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const infoArr = [
    {
      title: '입주가능일',
      data: moveInDateEnter,
    },
    {
      title: '면적',
      data: roomSize + 'm2 / ' + convertedRoomSize + '평',
    },
    { title: '층수', data: floor + '층 / ' + wholeFloor + '층' },
    { title: '구조', data: struct },
    { title: '상세주소', data: Address },
  ];

  return (
    <OpenLayout open={open} setOpen={setOpen} title="방 정보">
      {infoArr.map((item, index) => (
        <InfoField
          key={index}
          title={item.title}
          content={item.data}
          last={index !== infoArr.length - 1}
        />
      ))}
    </OpenLayout>
  );
}

export default Info;
