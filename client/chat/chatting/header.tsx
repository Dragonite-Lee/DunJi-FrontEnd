import { useCallback } from 'react';
import { useRouter } from 'next/router';
import MoreWindow from 'client/chat/chatting/modal/more';
import ReportWindow from 'client/chat/chatting/modal/report';
import ModalContainer from 'components/common/ModalContainer';
import MoreHeader from 'components/layout/Header/MoreHeader';
import useToggle from 'hooks/useToggle';

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
    <MoreHeader
      title="상대방 정보"
      backAction={backBtnHandler}
      onAction={handleMoreModalOpenToggle}
    >
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
    </MoreHeader>
  );
}

export default Header;
