import { useCallback } from 'react';

const ReportWindow = () => {
  /** 신고 버튼 */
  const btnHandler = useCallback(() => {
    // TODO: 신고 기능 구현
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  return (
    <div className="justify-between bg-white w-[250px] rounded-[7px]">
      <div className="Pretendard-Regular text-center text-[15px] border-b py-[16px]">
        신고사유 선택
      </div>
      <div className="flex flex-col justify-between p-[6px]">
        <button
          className="Pretendard-Regular text-left text-[14px] p-[8px] my-[4px]"
          onClick={btnHandler}
        >
          허위 매물 신고
        </button>
        <button
          className="Pretendard-Regular text-left text-[14px] p-[8px] my-[4px]"
          onClick={btnHandler}
        >
          음란물/불건전한 만남 및 대화
        </button>
        <button
          className="Pretendard-Regular text-left text-[14px] p-[8px] my-[4px]"
          onClick={btnHandler}
        >
          상업적 광고 및 판매
        </button>
        <button
          className="Pretendard-Regular text-left text-[14px] p-[8px] my-[4px]"
          onClick={btnHandler}
        >
          욕설/비하
        </button>
        <button
          className="Pretendard-Regular text-left text-[14px] p-[8px] my-[4px]"
          onClick={btnHandler}
        >
          유출/사칭/사기
        </button>
      </div>
    </div>
  );
};

export default ReportWindow;
