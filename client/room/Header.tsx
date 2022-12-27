import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGoBack from 'hooks/useGoback';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const goBack = useGoBack();

  return (
    <header
      className="flex w-full justify-between px-[18px] 
        py-4  Pretendard-SemiBold h-24 items-center text-[17px]  border-b"
    >
      <div className="flex items-center">
        <a onClick={goBack}>
          <FontAwesomeIcon icon="chevron-left" />
        </a>
        <div className="ml-4">{title}</div>
      </div>
      <div className="flex gap-4">
        <Image
          src={require('assets/icon/하트_찜_X.svg')}
          width={22}
          height={22}
          alt="heart"
        />
        <Image
          src={require('assets/icon/공유.svg')}
          width={22}
          height={22}
          alt="share"
        />
        <Image
          src={require('assets/icon/더보기.svg')}
          width={22}
          height={22}
          alt="three-dot"
        />
      </div>
    </header>
  );
}

export default Header;
