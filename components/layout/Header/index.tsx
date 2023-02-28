import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGoBack from 'hooks/useGoback';

interface HeaderProps {
  title: string;
  rightElement?: ReactNode;
  subElement?: ReactNode;
  backAction?: () => void;
}

function Header({ title, rightElement, subElement, backAction }: HeaderProps) {
  const goBack = useGoBack();

  return (
    <header className="flex w-screen justify-between px-[18px] bg-background_beige py-2  h-16 items-center text-xl  border-b min-w-[375px] sm:w-[375px]">
      <div className="flex text-[17px] items-center">
        <div onClick={backAction ?? goBack}>
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <div className="text-[17px] ml-4 Pretendard-SemiBold">{title}</div>
        {subElement}
      </div>
      {rightElement}
    </header>
  );
}

export default Header;
