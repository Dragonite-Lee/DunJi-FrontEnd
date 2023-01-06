import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
  title?: string;
  rightElement?: string;
  backAction?: () => void;
}

function Header({ title, rightElement, backAction }: HeaderProps) {
  return (
    <header className="flex w-screen justify-between px-[18px] bg-background_beige py-4  h-24 items-center text-xl  border-b min-w-[375px] sm:w-[375px] sm:m-auto ">
      <div className="flex text-[17px] items-center Pretendard-SemiBold">
        {backAction ? (
          <div onClick={backAction}>
            <FontAwesomeIcon icon="chevron-left" />
          </div>
        ) : (
          <div>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon="chevron-left" />
              </a>
            </Link>
          </div>
        )}

        <div className="text-[17px] ml-4 Pretendard-SemiBold">{title}</div>
      </div>

      {rightElement}
    </header>
  );
}

export default Header;
