import Image from 'next/image';
import Header from 'components/layout/Header';

interface HeaderProps {
  title: string;
}

function RoomHeader({ title }: HeaderProps) {
  return (
    <Header
      title={title}
      rightElement={
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
      }
    />
  );
}

export default RoomHeader;
