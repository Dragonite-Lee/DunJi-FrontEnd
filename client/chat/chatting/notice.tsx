import { useCallback, useState } from 'react';
import Image from 'next/image';

import chevronDownIcon from 'assets/icon/chat/chevron-down.svg';
import chevronUpIcon from 'assets/icon/chat/chevron-up.svg';

const dummyNoticeMessage = `전자계약 꼭 요청하세요!\n숨겨진 공지사항 내용 숨겨진 공지사항 내용 숨겨진 공지사항 내용 숨겨진 공지사항 내용 숨겨진 공지사항 내용`;

const Notice = () => {
  // 공지사항 열림 상태
  const [noticeOpen, setNoticeOpen] = useState(false);

  /** 공지사항 토글 버튼 */
  const noticeToggleBtnHandler = useCallback(() => {
    setNoticeOpen((prev) => !prev);
  }, []);

  return (
    <nav className="flex justify-between pl-[18px] pr-[23px] py-4 min-h-16 items-center border-b min-w-[375px] sm:w-[375px]">
      {noticeOpen ? (
        <>
          <div className="text-[14px] Pretendard-SemiBold mr-[8px] whitespace-pre-line">
            {dummyNoticeMessage}
          </div>
          <div>
            <button
              className="flex w-[16px] h-[16px] justify-center items-center"
              onClick={noticeToggleBtnHandler}
            >
              <Image
                src={chevronUpIcon}
                alt="숨기기 버튼"
                width={12}
                height={12}
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-[14px] Pretendard-SemiBold mr-[8px] truncate">
            {dummyNoticeMessage}
          </div>
          <div>
            <button
              className="flex w-[16px] h-[16px] justify-center items-center"
              onClick={noticeToggleBtnHandler}
            >
              <Image
                src={chevronDownIcon}
                alt="숨기기 버튼"
                width={12}
                height={12}
              />
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Notice;
