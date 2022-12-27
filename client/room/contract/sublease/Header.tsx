import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <>
      <header className="flex w-screen justify-between px-[18px] min-w-[375px] sm:w-[375px] mx-auto py-4  h-24 items-center text-xl  border-b bg-background_beige">
        <div className="flex text-[17px] items-center">
          <div>
            <Link href="/room/contract">
              <a>
                <FontAwesomeIcon icon="chevron-left" />
              </a>
            </Link>
          </div>
          <div className="text-[17px] ml-4 Pretendard-SemiBold">
            전대차 계약서 가이드
          </div>
        </div>
        <Image src={require('assets/icon/더보기.svg')} alt="더보기" />
      </header>
    </>
  );
}

export default Header;
