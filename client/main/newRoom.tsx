import { useEffect, useCallback } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { mainApi } from '_api/main';
import NewRoomItem from 'client/main/newRoom-item';
import { dispatchNewRoom } from 'store/modules/main';
import { NewRoomType, RootState } from 'types';

function NewRoom() {
  const dispatch = useDispatch();

  const { newRoom } = useSelector((state: RootState) => state.main);

  let userId: any;
  if (typeof window !== 'undefined') {
    userId = localStorage.getItem('userId');
  }
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
  }, [dispatch, newRoomListData]);

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
        {newRoom.map((newRoomData: NewRoomType, index: number) => (
          <NewRoomItem key={index} data={newRoomData} />
        ))}
      </div>
    </div>
  );
}

export default NewRoom;
