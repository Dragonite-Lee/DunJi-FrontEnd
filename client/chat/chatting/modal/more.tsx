import { useCallback } from 'react';

interface MoreWindowProps {
  reportBtnHandler: () => void;
}

function MoreWindow({ reportBtnHandler }: MoreWindowProps) {
  /** 채팅방 나가기 버튼 */
  const exitBtnHandler = useCallback(() => {
    // TODO: 채팅방 나가기 기능 구현
    alert('현재 지원하지 않는 기능입니다.');
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
}

export default MoreWindow;
