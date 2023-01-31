import { useState } from 'react';
import Card from 'client/myPage/Card';
import EmptyLike from 'client/myPage/EmptyLike';
import Header from 'components/layout/Header';
import { RoomInfoType } from 'types';

const DUMMY: RoomInfoType[] = [
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
    floor: '2',
    roomSize: 25,
    heartNum: 2,
    image: 'assets/images/room2.png',
  },
];

function Like() {
  const [list, setList] = useState<RoomInfoType[]>(DUMMY);
  return (
    <div className="bg-background_beige h-full min-h-[100vh] sm:w-[375px] sm:m-auto flex flex-col">
      <Header title="찜한매물" />
      <div className="p-[18px] flex-1 flex flex-col">
        {list.length === 0 && <EmptyLike title={'찜한 매물'} />}
        {list.map((data) => (
          <Card key={data.roomId} {...data} />
        ))}
      </div>
    </div>
  );
}
export default Like;
