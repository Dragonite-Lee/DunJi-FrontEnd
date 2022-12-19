import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Content() {
  function loggedOut() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userId');
      localStorage.removeItem('userNickname');
    }
    location.reload();
  }

  return (
    <div className="mx-[18px] bg-white rounded-standard_rounded">
      <div className="px-[22px]">
        <div className="pt-[28px] Pretendard-SemiBold text-[17px] pb-[16px]">
          둥지 안내
        </div>
        <div className="flex items-center justify-between text-[15px] Pretendard-Regular py-[16px]">
          <div>공지사항</div>
          <Link href="/#">
            <a>
              <FontAwesomeIcon icon="chevron-right" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between text-[15px] Pretendard-Regular py-[16px]">
          <div>계약서 가이드</div>
          <Link href="/room/contract">
            <a>
              <FontAwesomeIcon icon="chevron-right" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between text-[15px] Pretendard-Regular py-[16px]">
          <div>둥지 서비스</div>
          <Link href="/#">
            <a>
              <FontAwesomeIcon icon="chevron-right" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between text-[15px] Pretendard-Regular border-b pt-[16px] pb-[30px]">
          <div>매물번호 조회</div>
          <Link href="/#">
            <a>
              <FontAwesomeIcon icon="chevron-right" />
            </a>
          </Link>
        </div>
        <div className=" Pretendard-SemiBold text-[17px] pb-[16px] pt-[26px]">
          기타
        </div>
        <div className="flex items-center justify-between text-[15px] Pretendard-Regular py-[16px]">
          <div>서비스 이용약관</div>
          <Link href="/#">
            <a>
              <FontAwesomeIcon icon="chevron-right" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between text-[15px] Pretendard-Regular py-[16px]">
          <div>회원 탈퇴</div>
          <Link href="/#">
            <a>
              <FontAwesomeIcon icon="chevron-right" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between text-[15px] Pretendard-Regular pt-[16px] pb-[32px]">
          <div>로그아웃</div>
          <Link href="/" passHref>
            <div onClick={loggedOut}>
              <a>
                <FontAwesomeIcon icon="chevron-right" />
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
