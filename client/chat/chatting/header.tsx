import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import chevronLeftThickIcon from 'assets/icon/chat/chevron-left-thick.svg';
import threeDotsVerticalIcon from 'assets/icon/chat/three-dots-vertical.svg';
import Modal from 'components/common/Modal';
import MoreWindow from './modal/more';
import ReportWindow from './modal/report';

function Header() {
  const router = useRouter();

  // 모달창 열림 상태 (더보기창, 신고사유 선택창)
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  /** 뒤로가기 버튼 */
  const backBtnHandler = useCallback(() => {
    router.push('/chat');
  }, [router]);

  /** 더보기 버튼 - 더보기 모달창 열기 */
  const moreBtnHandler = useCallback(() => {
    setMoreModalOpen(true);
  }, []);

  const handleMoreModalClose = () => {
    setMoreModalOpen(false);
  };

  const handleReportModalClose = () => {
    setReportModalOpen(false);
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
            onClick={moreBtnHandler}
          >
            <Image src={threeDotsVerticalIcon} alt="더보기 버튼" />
          </button>
        </div>
      </div>
      <Modal
        isOpen={moreModalOpen}
        onClose={handleMoreModalClose}
        position="right"
      >
        <MoreWindow
          setMoreModalOpen={setMoreModalOpen}
          setReportModalOpen={setReportModalOpen}
        />
      </Modal>
      <Modal isOpen={reportModalOpen} onClose={handleReportModalClose}>
        <ReportWindow />
      </Modal>
    </header>
  );
}

export default Header;
