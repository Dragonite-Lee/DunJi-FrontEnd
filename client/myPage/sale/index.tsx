import { useState } from 'react';
import Card from 'client/myPage/Card';
import EmptyLike from 'client/myPage/EmptyLike';
import ToggleNav from 'components/common/ToggleNav';
import { AllRoomType } from 'types';

const NAV = [
  {
    key: 'put',
    title: '내놓은 방',
  },
  {
    key: 'complete',
    title: '거래 완료된 방',
  },
];

const DUMMY: AllRoomType[] = [
  {
    roomId: '8L72IJCK',
    latitude: 35.45049592,
    longitude: 127.571393,
    sigungu: '안산시 상록구',
    dong: '사동',
    priceUnit: '월세',
    price: 50,
    deposit: 10,
    roomType: '원룸',
    dealType: '단기임대',
    structure: '오픈형',
    floor: 2,
    roomSize: 25,
    heartNum: 2,
    image: 'assets/images/room2.png',
  },
];

function Sale() {
  const [list, setList] = useState<AllRoomType[]>([]);

  return (
    <>
      <ToggleNav list={NAV} />
      <div className="p-[18px] flex-1 flex flex-col">
        {list.length === 0 && (
          <EmptyLike
            title={'내놓은 방'}
            desc={'매물이 있다면 방을 등록해보세요!'}
          />
        )}

        {list.map((data) => (
          <Card key={data.roomId} {...data} />
        ))}
      </div>
    </>
  );
}
export default Sale;
