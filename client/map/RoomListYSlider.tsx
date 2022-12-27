import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useSelector } from 'react-redux';

import roomImg from 'assets/images/room.png';
import { listTypes } from 'store/modules/room';
import round from 'utils/convertRoomSize';

import type { RootState } from 'store/modules';

function RoomListYSlider() {
  const { MAP_ROOM_LIST } = useSelector((state: RootState) => state.room);

  const [slideData, setSideData] = useState([]);

  useEffect(() => {
    if (Object.keys(MAP_ROOM_LIST).length !== 0) {
      setSideData(Object.values(MAP_ROOM_LIST));
    }
  }, [MAP_ROOM_LIST]);

  return (
    <div className="w-full  bg-white  px-[18px] h-[76vh] overflow-scroll overflow-x-hidden">
      {slideData.map((item: listTypes, index) => (
        <Link key={index} href={`/room/${item.roomID}`} passHref>
          <a>
            <div className="border-b pt-6">
              <Image
                src={roomImg}
                alt="room"
                className="rounded-[1.5rem]"
                width={400}
                height={180}
              />
              <div className="flex justify-between items-center mt-2">
                <div>
                  {item.address} / {item.detailAddress}
                </div>
                <div className="text-font_gray">
                  {item.struct} , {item.floor}
                </div>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div className="font-[700] text-[1.5rem] ">
                  {item.priceUnit} {item.deposit} / {item.price}
                </div>
                <div className="text-font_gray ">
                  {item.roomSize}m<sup>2</sup> / {round(item.roomSize)}평
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default RoomListYSlider;
