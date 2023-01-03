import { useCallback } from 'react';

import type { Dispatch, SetStateAction } from 'react';

interface AppProps {
  setMoreModalOpen: Dispatch<SetStateAction<boolean>>;
  setReportModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MoreWindow = ({ setMoreModalOpen, setReportModalOpen }: AppProps) => {
  /** 채팅방 나가기 버튼 */
  const exitBtnHandler = useCallback(() => {
    // TODO: 채팅방 나가기 기능 구현
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  /** 신고하기 버튼 - 더보기창 닫은 후 신고사유 선택창 열기 */
  const reportBtnHandler = useCallback(() => {
    setMoreModalOpen(false);
    setReportModalOpen(true);
  }, []);

  return (
    <div className="flex flex-col justify-between bg-white w-[144px] relative top-[60px] right-[20px] rounded-[7px] p-[6px]">
      <button
        className="Pretendard-Regular text-left text-[14px] p-[8px] my-[4px]"
        onClick={exitBtnHandler}
      >
        채팅방 나가기
      </button>
      <button
        className="Pretendard-Regular text-left text-[14px] p-[8px] my-[4px]"
        onClick={reportBtnHandler}
      >
        신고
      </button>
    </div>
  );
};

export default MoreWindow;
