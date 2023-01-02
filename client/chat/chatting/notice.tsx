import { useCallback } from 'react';
import Image from 'next/image';
import chevronDownIcon from 'assets/icon/chat/chevron-down.svg';
import chevronUpIcon from 'assets/icon/chat/chevron-up.svg';

const Notice = () => {
  /** 공지사항 토글 버튼 */
  const noticeToggleBtnHandler = useCallback(() => {
    // TODO: 공지사항 내용 펼쳐보기/숨기기 버튼 기능 구현
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  return (
    <nav className="flex justify-between pl-[18px] pr-[23px] py-4 h-16 items-center border-b min-w-[375px] sm:w-[375px]">
      <div className="text-[14px] Pretendard-SemiBold">
        전자계약 꼭 요청하세요!
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
    </nav>
  );
};

export default Notice;
