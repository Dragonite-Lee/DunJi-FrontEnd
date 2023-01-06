import { useCallback, useRef } from 'react';

import type { ReactNode, Dispatch, SetStateAction } from 'react';

interface AppProps {
  moreModalOpen: boolean;
  setMoreModalOpen: Dispatch<SetStateAction<boolean>>;
  reportModalOpen: boolean;
  setReportModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({
  moreModalOpen,
  setMoreModalOpen,
  reportModalOpen,
  setReportModalOpen,
  children,
}: AppProps) => {
  // 모달창 바깥 부분 참조
  const modalMarginRef = useRef(null);

  /** 모달창 바깥 부분 클릭시 모달창 닫기 */
  const closeModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (
        (moreModalOpen || reportModalOpen) &&
        modalMarginRef.current === e.target
      ) {
        setMoreModalOpen(false);
        setReportModalOpen(false);
      }
    },
    [moreModalOpen, reportModalOpen],
  );

  return (
    <>
      {moreModalOpen || reportModalOpen ? (
        <div
          className={`flex w-[100%] h-[100%] fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.3)] ${moreModalOpen ? 'justify-end items-start' : 'justify-center items-center'}`}
          }
          ref={modalMarginRef}
          onClick={closeModal}
        >
          {children}
        </div>
      ) : (
        <div className="hidden" ref={modalMarginRef} onClick={closeModal}>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
