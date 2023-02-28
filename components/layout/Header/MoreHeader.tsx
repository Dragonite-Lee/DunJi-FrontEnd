import { ReactNode } from 'react';
import Image from 'next/image';
import threeDotsVerticalIcon from 'assets/icon/chat/three-dots-vertical.svg';
import Header from 'components/layout/Header';

interface MoreHeaderProps {
  title: string;
  backAction?: () => void;

  children?: ReactNode;
  onAction?: () => void;
}

function MoreHeader({ onAction, children, ...props }: MoreHeaderProps) {
  return (
    <>
      <Header
        {...props}
        rightElement={
          <div>
            <button
              className="flex w-[20px] h-[20px] justify-center items-center"
              onClick={onAction}
            >
              <Image src={threeDotsVerticalIcon} alt="더보기 버튼" />
            </button>
          </div>
        }
      />
      {children}
    </>
  );
}
export default MoreHeader;
