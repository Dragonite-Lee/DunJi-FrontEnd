import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch } from 'redux';

export default function Login({}) {
  const [check, setCheck] = useState(false);

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;

  return (
    <div className="h-screen bg-background_beige sm:w-[375px] sm:m-auto">
      <div className="flex items-center flex-col pt-56">
        <div className="flex flex-col items-center">
          <div className="px-52">
            <Image
              alt="둥지로고"
              src={require('../assets/icon/logo/logo_main.png')}
            />
          </div>

          <div className="text-center mt-12 text-[14px] Pretendard-Regular leading-7">
            간편하게 로그인하고 <br />
            <span className="Pretendard-SemiBold">
              둥지의 다양한 서비스를
            </span>{' '}
            이용하세요
          </div>
        </div>
      </div>
      <Link href={KAKAO_AUTH_URL}>
        <a>
          <div className="flex mt-96 items-center justify-center bg-kakao mx-12 py-3.5 rounded-standard_rounded">
            <Image
              width={26}
              height={26}
              alt="카카오톡로고"
              src={require('../assets/icon/logo/kakao_logo.png')}
            />
            <div className="ml-4 text-[16px] Pretendard-Regular">
              카카오톡으로 시작하기
            </div>
          </div>
        </a>
      </Link>
      <div className="flex mt-4 items-center justify-center bg-white mx-12 py-3.5 rounded-standard_rounded">
        <Image
          width={26}
          height={26}
          alt="구글로고"
          src={require('../assets/icon/logo/google_logo.png')}
        />
        <div className="ml-4 text-[16px] Pretendard-Regular">
          Google로 시작하기
        </div>
      </div>
    </div>
  );
}
