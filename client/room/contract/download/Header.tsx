import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div className="">
      <header className="flex w-full justify-between px-[18px] py-4 h-24 items-center text-[17px] border-b mb-10 Pretendard-SemiBold">
        <div className="flex text-2xl items-center">
          <div>
            <Link href="/room/contract">
              <a>
                <FontAwesomeIcon icon="chevron-left" />
              </a>
            </Link>
          </div>
          <div className="text-3xl ml-4 Pretendard-SemiBold">파일다운로드</div>
        </div>
        <Image src={require('assets/icon/더보기.svg')} alt="더보기" />
      </header>
    </div>
  );
}

export default Header;
