import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import roomImg from 'assets/images/room.png';
import { map_room_list_height } from './Variable';
import 'swiper/css';

function RoomListSlider() {
  const slides = [roomImg, roomImg, roomImg, roomImg];

  return (
    <Link href="/room/1" passHref>
      <a>
        <div
          className={`h-[${map_room_list_height}] bg-white w-full pl-[3vw] py-2 border-b `}
        >
          <div className="flex-col w-full">
            <div className="flex  items-center text-[1.5rem] my-2">
              <Image
                src={require('assets/icon/방.svg')}
                width={25}
                height={25}
                alt="room"
              />
              이 구역 인기 방 먼저 둘러보세요!
            </div>
            <Swiper
              spaceBetween={15}
              slidesPerView={2}
              className=""
              breakpoints={{
                400: {
                  slidesPerView: 2.5,
                },
                500: {
                  slidesPerView: 3,
                },
                700: {
                  slidesPerView: 4,
                },
              }}
            >
              {slides.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <Image src={imgSrc} alt="room" className="rounded-[1.5rem]" />
                  <div className="font-[700] text-[1.2rem] ">월세 300 / 30</div>
                  <div>흥부하우스 B동 / 상록구 사동</div>
                  <div className="text-font_gray">분리형 원룸, 2층</div>
                  <div className="text-font_gray">25m2 / 7평</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default RoomListSlider;
