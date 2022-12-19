import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <header className="flex w-screen justify-between px-[18px] mb-[25px] py-4  h-24 items-center  border-b sm:w-[375px] sm:m-auto">
      <div className="flex text-[17px] items-center Pretendard-SemiBold">
        {/* *메인화면으로 이동 */}
        <Link href="/">
          <a>
            <FontAwesomeIcon icon="chevron-left" />
          </a>
        </Link>
        <div className="ml-[6px]">마이페이지</div>
      </div>
    </header>
  );
}

export default Header;
