import { ReactNode, useMemo, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;

  position?: 'center' | 'right'; //default : center
}

function Modal({ isOpen, onClose, children, position }: ModalProps) {
  // 모달창 바깥 부분 참조
  const modalMarginRef = useRef(null);

  const positionStyle = useMemo(() => {
    if (position === 'right') return 'justify-end items-start';

    return 'justify-center items-center';
  }, [position]);

  /** 모달창 바깥 부분 클릭시 모달창 닫기 */
  const handleModalClose = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (isOpen && modalMarginRef.current === e.target) {
      onClose();
    }
  };

  if (!isOpen) {
    return (
      <div className="hidden" ref={modalMarginRef} onClick={handleModalClose}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`flex w-[100%] h-[100%] fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.3)] 
${positionStyle}`}
      ref={modalMarginRef}
      onClick={handleModalClose}
    >
      {children}
    </div>
  );
}

export default Modal;
