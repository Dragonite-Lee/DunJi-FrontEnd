import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { map_room_list_header_height, map_header_height } from './Variable';

type propsType = {
  setUpDown: Dispatch<SetStateAction<number>>;
  touchY: number;
  setTouchY: Dispatch<SetStateAction<number>>;
  setMargin: Dispatch<
    SetStateAction<{
      marginTop: string;
    }>
  >;
  innerHeight: number;
  windowHeight: number;
  setWindowHeight: Dispatch<SetStateAction<number>>;
};

export default function RoomListHeader({
  setUpDown,
  touchY,
  setTouchY,
  setMargin,
  innerHeight,
  windowHeight,
  setWindowHeight,
}: propsType) {
  // resize 이벤트 발생 시 화면 y값 변경
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const getInnerHeight = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', getInnerHeight);
    setTouchY(windowHeight);
    return () => window.removeEventListener('resize', getInnerHeight);
  }, [setWindowHeight, setTouchY, windowHeight]);
  //touchY랑 windowHeight가 똑같이 화면 높이
  //드래그시 margin 설정
  // const touchHandler = (e: TouchEvent<HTMLDivElement>) => {
  //     let clientY = Math.round(e.touches[0].clientY);
  //     // Header 의 높이 9.5rem 보다 마우스가 위로 가는 경우
  //     console.log(e.currentTarget.clientTop)
  //     if (clientY < 95) clientY = 95;
  //     else if (clientY > windowHeight - 60) clientY = windowHeight - 60;
  //     setTouchY(clientY);
  //     setMargin({
  //         marginTop: `calc(${clientY}px - ${map_header_height})`,
  //     }); // touchY(화면 최상단에서 마우스까지의 위치)에서 Header의 높이 11rem을 제외한 margin: ;
  // };

  return (
    <div
      className={`w-screen sm:w-[375px]  bg-white flex flex-col items-center
                border-b border-1 h-[6rem] relative`}
    >
      <div className=" w-16 h-2 bg-border_color rounded-[2rem] my-2" />
      <div className="text-[1.5rem] flex items-center mt-2">
        <Image
          src={require('assets/icon/방.svg')}
          width={25}
          height={25}
          alt="room"
        />
        33개의 방
      </div>
    </div>
  );
}
