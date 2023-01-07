import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import chevronLeftThickIcon from 'assets/icon/chat/chevron-left-thick.svg';
import threeDotsVerticalIcon from 'assets/icon/chat/three-dots-vertical.svg';
import ModalContainer from 'components/common/ModalContainer';
import useToggle from 'hooks/useToggle';
import MoreWindow from './modal/more';
import ReportWindow from './modal/report';

function Header() {
  const router = useRouter();

  // 모달창 열림 상태 (더보기창, 신고사유 선택창)
  const [isMoreModalOpen, handleMoreModalOpenToggle] = useToggle();
  const [isReportModalOpen, handleReportModalOpenToggle] = useToggle();

  /** 뒤로가기 버튼 */
  const backBtnHandler = useCallback(() => {
    router.push('/chat');
  }, [router]);

  /** 신고하기 버튼 - 더보기창 닫은 후 신고사유 선택창 열기 */
  const handleReportBtnClick = () => {
    handleMoreModalOpenToggle();
    handleReportModalOpenToggle();
  };

  return (
    <header>
      <div className="flex justify-between px-[18px] py-4 h-24 items-center text-xl border-b min-w-[375px] sm:w-[375px]">
        <div className="flex text-[17px] items-center">
          <button
            className="flex w-[20px] h-[20px] justify-center items-center"
            onClick={backBtnHandler}
          >
            <Image src={chevronLeftThickIcon} alt="더보기 버튼" />
          </button>
          <div className="text-[17px] ml-4 Pretendard-SemiBold">
            상대방 정보
          </div>
        </div>
        <div>
          <button
            className="flex w-[20px] h-[20px] justify-center items-center"
            onClick={handleMoreModalOpenToggle}
          >
            <Image src={threeDotsVerticalIcon} alt="더보기 버튼" />
          </button>
        </div>
      </div>

      <ModalContainer
        isOpen={isMoreModalOpen}
        onClose={handleMoreModalOpenToggle}
        position="right"
      >
        <MoreWindow reportBtnHandler={handleReportBtnClick} />
      </ModalContainer>
      <ModalContainer
        isOpen={isReportModalOpen}
        onClose={handleReportModalOpenToggle}
      >
        <ReportWindow />
      </ModalContainer>
    </header>
  );
}

export default Header;
