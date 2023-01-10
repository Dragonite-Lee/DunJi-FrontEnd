import Image from 'next/image';
import Link from 'next/link';

function Search() {
  function close() {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('home')) {
        localStorage.removeItem('home');
        localStorage.setItem('search', 'true');
      } else if (localStorage.getItem('chat')) {
        localStorage.setItem('search', 'true');
        localStorage.removeItem('chat');
      } else if (localStorage.getItem('mypage')) {
        localStorage.setItem('search', 'true');
        localStorage.removeItem('mypage');
      }
    }
  }
  const search =
    typeof window !== 'undefined' ? localStorage.getItem('search') : null;

  return (
    <div>
      {search ? (
        <Image
          width={30}
          height={30}
          alt="검색로고"
          src={require('../../../assets/icon/main/tabBar/메뉴바_검색_활성화.svg')}
          onLoad={() => {
            localStorage.clear();
            localStorage.setItem('search', 'true');
          }}
        />
      ) : (
        <Link href="/map">
          <a>
            <Image
              onClick={close}
              width={30}
              height={30}
              alt="검색로고"
              src={require('../../../assets/icon/main/tabBar/메뉴바_검색_비활성화.svg')}
            />
          </a>
        </Link>
      )}
    </div>
  );
}

export default Search;
