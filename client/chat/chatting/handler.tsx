import React, { useCallback, useState } from 'react';
import Image from 'next/image';

import buildingIcon from 'assets/icon/chat/building.svg';
import cameraIcon from 'assets/icon/chat/camera.svg';
import imageFillIcon from 'assets/icon/chat/image-fill.svg';
import plusCircleIcon from 'assets/icon/chat/plus-circle.svg';
import sendFillIcon from 'assets/icon/chat/send-fill.svg';
import xLgIcon from 'assets/icon/chat/x-lg.svg';

const Handler = () => {
  // 추가 기능 파트 열림 상태
  const [addOnPartOpen, setAddOnPartOpen] = useState(false);

  /** 추가 기능 파트 토글 버튼 */
  const addOnPartToggleBtnHandler = useCallback(() => {
    setAddOnPartOpen((prev) => !prev);
  }, []);

  /** 메시지 전송 */
  const sendMessage = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: 채팅 전송 기능 구현
    console.log(e.currentTarget.message.value);
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  /** 추가 기능 버튼 */
  const btnHandler = useCallback(() => {
    // TODO: 각각 버튼의 추가 기능 구현
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  return (
    <section className="bg-[#F9F9F9]">
      <div className="flex px-[18px] py-4 h-24 items-center min-w-[375px] sm:w-[375px]">
        <div>
          <button
            className="flex w-[20px] h-[20px] justify-center items-center"
            onClick={addOnPartToggleBtnHandler}
          >
            {addOnPartOpen ? (
              <Image
                src={xLgIcon}
                alt="추가 기능 파트 닫기 버튼"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={plusCircleIcon}
                alt="추가 기능 파트 열기 버튼"
                width={20}
                height={20}
              />
            )}
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
      {addOnPartOpen ? (
        <>
          <div className="flex justify-between px-[18px] items-center min-w-[375px] sm:w-[375px]">
            <div>
              <button
                className="w-[70px] h-[70px] border border-[#E3E2E0] rounded-[50%]"
                onClick={btnHandler}
              >
                <Image
                  src={buildingIcon}
                  alt="매물번호입력 버튼"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div>
              <button
                className="w-[70px] h-[70px] border border-[#E3E2E0] rounded-[50%]"
                onClick={btnHandler}
              >
                <Image
                  src={imageFillIcon}
                  alt="사진앨범 버튼"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div>
              <button
                className="w-[70px] h-[70px] border border-[#E3E2E0] rounded-[50%]"
                onClick={btnHandler}
              >
                <Image
                  src={cameraIcon}
                  alt="카메라 버튼"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div>
              <button
                className="w-[70px] h-[70px] border border-[#E3E2E0] rounded-[50%]"
                onClick={btnHandler}
              ></button>
            </div>
          </div>
          <div className="flex justify-between Pretendard-Regular text-[12px] px-[18px] items-center min-w-[375px] sm:w-[375px] my-4">
            <div className="w-[70px] text-center">매물번호입력</div>
            <div className="w-[70px] text-center">사진앨범</div>
            <div className="w-[70px] text-center">카메라</div>
            <div className="w-[70px] text-center">준비중</div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Handler;
