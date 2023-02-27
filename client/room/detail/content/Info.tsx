import ContentField from 'client/room/detail/ContentField';
import OpenLayout from 'client/room/detail/OpenLayout';
import useToggle from 'hooks/useToggle';
import useRoomSizeConvert from 'utils/convertRoomSize';

interface infoProps {
  startedAt: string;
  finishedAt: string;
  tenancyAgreement: boolean;
  roomSize?: string;
  floor: number;
  totalFloor: number;
  structure: string;
  address: string;
}

function Info({
  startedAt,
  finishedAt,
  tenancyAgreement,
  roomSize,
  floor,
  totalFloor,
  structure,
  address,
}: infoProps) {

  const convertedRoomSize = useRoomSizeConvert(Number(roomSize));
  const [open, handlerOpen] = useToggle()
  const moveInDate = `${startedAt} 부터 \n ${finishedAt}${
    tenancyAgreement ? '(협의가능)' : '(협의불가)'
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
    { title: '층수', data: floor + '층 / ' + totalFloor + '층' },
    { title: '구조', data: structure },
    { title: '상세주소', data: address },
  ];

  return (
    <OpenLayout open={open} handlerOpen={handlerOpen} title="방 정보">
      {infoArr.map((item, index) => (
        <ContentField
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
