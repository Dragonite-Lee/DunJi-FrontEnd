import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainApi } from '_api';
import useMainRedux from 'hooks/useMainRedux';
import { dispatchNewRoom } from 'store/modules/main';
import NewRoomItem from 'client/main/NewRoom';

function NewRoom() {
  const [state, dispatch] = useMainRedux();
  const id = localStorage.getItem('userId');

  const newRoomListData = useCallback(()=> {
    mainApi
      .newRoom(id)
      .then((res) => {
        // console.log(res.data)
        dispatch(dispatchNewRoom(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },[id]);

  useEffect(() => {
    newRoomListData()
  }, [dispatch]);

  return (
    <div className="pt-[55px]">
      <div className="flex justify-between items-center">
        <div className="text-[17px] Pretendard-SemiBold">
          새로 들어온 둥지에요!
        </div>
        <Link href="#">
          <a className="text-[12px] Pretendard-Regular text-font_gray">
            더보기
          </a>
        </Link>
      </div>
      <div className="pt-[14px] h-full flex overflow-x-auto overflow-y-hidden">
        {state.newRoom.map((a: any, index: number) => (
          <div key={index} className="w-[140px] mr-[16px]">
            <div>
              {/* *이미지칸 */}
              <Image
                src={require('../../assets/icon/main/main_char.png')}
                layout="fixed"
                objectFit="fill"
                width={140}
                height={105}
                alt="대표방이미지"
              />
            </div>
            <NewRoomItem data={a} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewRoom;