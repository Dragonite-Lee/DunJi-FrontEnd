import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGoBack from 'hooks/useGoback';

function NoRoomHeader() {
  const goBack = useGoBack();

  return (
    <header className="flex w-screen justify-between px-[18px] mb-[25px] py-4  h-24 items-center  border-b sm:w-[375px] sm:m-auto">
      <div className="flex text-[17px] items-center Pretendard-SemiBold">
        <Link href="/" passHref>
          <a onClick={goBack}>
            <FontAwesomeIcon icon="chevron-left" />
          </a>
        </Link>
        <div className="ml-[6px]">방 상세페이지</div>
      </div>
      <Link href="/" passHref>
        <a>
          <div className="text-[12px] Pretendard-Regular text-hover_orange">
            취소
          </div>
        </a>
      </Link>
    </header>
  );
}

export default NoRoomHeader;
