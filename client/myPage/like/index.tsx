import Card from 'client/myPage/like/Card';
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
  return (
    <div className="bg-background_beige min-h-full sm:w-[375px] sm:m-auto pb-[120px] p-[18px]">
      <Header title="찜한매물" />

      {DUMMY.map((data) => (
        <Card key={data.roomId} {...data} />
      ))}
    </div>
  );
}
export default Like;
