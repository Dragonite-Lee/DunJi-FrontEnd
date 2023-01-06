import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { nanoid } from '@reduxjs/toolkit';

import personCircleIcon from 'assets/icon/chat/person-circle.svg';

const dummyMessageHistory = [
  {
    userName: 'user1',
    message: '잠시만요 집주인 분께 알아보고 연락 드릴게요 :)',
    date: '오후 10:44',
  },
  { userName: 'user2', message: '넵 감사합니다!', date: '오후 10:45' },
  {
    userName: 'user1',
    message: '잠시만요 집주인 분께 알아보고 연락 드릴게요 :)',
    date: '오후 10:46',
  },
  { userName: 'user2', message: '넵 감사합니다!', date: '오후 10:47' },
  {
    userName: 'user2',
    message: '저기요...?',
    date: '오후 10:48',
  },
  {
    userName: 'user1',
    message: '잠시만요 집주인 분께 알아보고 연락 드릴게요 :)',
    date: '오후 10:44',
  },
  { userName: 'user2', message: '넵 감사합니다!', date: '오후 10:45' },
  {
    userName: 'user1',
    message: '잠시만요 집주인 분께 알아보고 연락 드릴게요 :)',
    date: '오후 10:46',
  },
  { userName: 'user2', message: '넵 감사합니다!', date: '오후 10:47' },
  {
    userName: 'user2',
    message: '저기요...?',
    date: '오후 10:48',
  },
];

const dummyMyInfo = {
  userName: 'user2',
};

function History() {
  // 채팅 내용 영역 선택자
  const chattingRef = useRef<HTMLDivElement>(null);

  /** 스크롤바 위치를 가장 아래로 이동 */
  const moveScrolBottom = useCallback(() => {
    if (chattingRef.current) {
      chattingRef.current.scrollTop = chattingRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    moveScrolBottom();
  }, []);

  return (
    <div
      ref={chattingRef}
      className="grow flex flex-col px-[18px] overflow-y-auto"
    >
      {dummyMessageHistory.map((msg) => {
        return msg.userName !== dummyMyInfo.userName ? (
          <div
            key={nanoid()}
            className="flex Pretendard-Regular justify-start my-[12px]"
          >
            <span className="mr-[8px]">
              <Image
                src={personCircleIcon}
                alt="프로필 이미지"
                width={30}
                height={30}
              />
            </span>
            <span className="max-w-[50vw] bg-[#f9f9f9] rounded-[10px] text-[14px] p-[12px]">
              {msg.message}
            </span>
            <span className="relative h-[12px] top-[calc(100%-13px)] text-[#A9A7A2] text-[8px] ml-[4px]">
              {msg.date}
            </span>
          </div>
        ) : (
          <div
            key={nanoid()}
            className="flex Pretendard-Regular justify-end my-[12px]"
          >
            <span className="relative h-[12px] top-[calc(100%-13px)] text-[#A9A7A2] text-[8px] mr-[4px]">
              {msg.date}
            </span>
            <span className="max-w-[50vw] bg-[#a9a7a2] rounded-[10px] text-white text-[14px] p-[12px]">
              {msg.message}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default History;
