import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { mainApi } from '_api';
import NewRoomItem from 'client/main/newRoom-item';
import useMainRedux from 'hooks/useMainRedux';
import { dispatchNewRoom, newRoomType } from 'store/modules/main';

function NewRoom() {
  const [state, dispatch] = useMainRedux();
  const userId = localStorage.getItem('userId');

  const newRoomListData = useCallback(() => {
    mainApi
      .newRoom(userId)
      .then((res) => {
        // console.log(res.data)
        dispatch(dispatchNewRoom(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, userId]);

  useEffect(() => {
    newRoomListData();
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
        {state.newRoom.map((newRoomData: newRoomType, index: number) => (
          <NewRoomItem key={index} data={newRoomData} />
        ))}
      </div>
    </div>
  );
}

export default NewRoom;
