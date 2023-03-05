import Image from 'next/image';
import Link from 'next/link';

import KakaoLoginBtn from 'assets/icon/login/kakao_login_medium_wide.png';
import LogoImg from 'assets/icon/logo/logo_main.png';

function Login() {
  return (
    <div className="h-screen bg-background_beige sm:w-[375px] sm:m-auto">
      <div className="flex flex-col h-[70%] justify-center space-y-[3rem]">
        <div className="px-52">
          <Image alt="둥지로고" src={LogoImg} />
        </div>
        <div className="text-center text-[16px] Pretendard-Regular">
          <div>간편하게 로그인하고</div>
          <div>
            <span className="Pretendard-SemiBold">둥지의 다양한 서비스</span>
            <span>를 이용하세요</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={`${process.env.NEXT_PUBLIC_KAKAO_AUTH_URL}`}>
          <a>
            <Image src={KakaoLoginBtn} alt="카카오 로그인 버튼" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
