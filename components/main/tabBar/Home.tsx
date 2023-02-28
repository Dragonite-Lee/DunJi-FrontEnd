import Image from 'next/image';
import Link from 'next/link';

function Home() {
  const close = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('search')) {
        localStorage.setItem('home', 'true');
        localStorage.removeItem('search');
      } else if (localStorage.getItem('chat')) {
        localStorage.setItem('home', 'true');
        localStorage.removeItem('chat');
      } else if (localStorage.getItem('mypage')) {
        localStorage.setItem('home', 'true');
        localStorage.removeItem('mypage');
      }
    }
  };

  const home =
    typeof window !== 'undefined' ? localStorage.getItem('home') : null;

  return (
    <div className="pl-[36px]">
      {home ? (
        <Image
          width={30}
          height={30}
          alt="홈로고"
          src={require('assets/icon/main/tabBar/메뉴바_홈_활성화.svg')}
          onLoad={() => {
            localStorage.clear();
            localStorage.setItem('home', 'true');
          }}
        />
      ) : (
        <Link href="/">
          <a>
            <Image
              onClick={close}
              width={30}
              height={30}
              alt="홈로고"
              src={require('assets/icon/main/tabBar/메뉴바_홈_비활성화.svg')}
            />
          </a>
        </Link>
      )}
    </div>
  );
}

export default Home;
