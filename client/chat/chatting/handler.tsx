import React, { useCallback } from 'react';
import Image from 'next/image';
import plusCircleIcon from 'assets/icon/chat/plus-circle.svg';
import sendFillIcon from 'assets/icon/chat/send-fill.svg';

const Handler = () => {
  /** 더하기 버튼 */
  const plusBtnHandler = useCallback(() => {
    // TODO: 더하기 버튼 기능 구현
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  /** 메시지 전송 */
  const sendMessage = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: 채팅 전송 기능 구현
    console.log(e.currentTarget.message.value);
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  return (
    <div className="flex bg-[#F9F9F9] px-[18px] py-4 h-24 items-center min-w-[375px] sm:w-[375px]">
      <div>
        <button
          className="flex w-[20px] h-[20px] justify-center items-center"
          onClick={plusBtnHandler}
        >
          <Image
            src={plusCircleIcon}
            alt="기능모음 버튼"
            width={20}
            height={20}
          />
        </button>
      </div>
      <form onSubmit={sendMessage} className="grow flex items-center">
        <input
          className="grow h-[40px] bg-[#F9F9F9] border border-[#E3E2E0] rounded-[10px] outline-none Pretendard-Regular text-[12px] mx-[14px] px-[16px] py-[12px]"
          placeholder="메시지 보내기"
          name="message"
        />
        <button className="flex w-[20px] h-[20px] justify-center items-center">
          <Image
            src={sendFillIcon}
            alt="기능모음 버튼"
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
};

export default Handler;
