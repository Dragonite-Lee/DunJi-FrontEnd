import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import chevronLeftThickIcon from 'assets/icon/chat/chevron-left-thick.svg';
import threeDotsVerticalIcon from 'assets/icon/chat/three-dots-vertical.svg';

const Header = () => {
  const router = useRouter();

  /** 뒤로가기 버튼 */
  const backBtnHandler = useCallback(() => {
    router.push('/chat');
  }, []);

  /** 더보기 버튼 */
  const moreBtnHandler = useCallback(() => {
    // TODO: 더보기 버튼 기능 구현
    alert('현재 지원하지 않는 기능입니다.');
  }, []);

  return (
    <header className="flex justify-between px-[18px] py-4 h-24 items-center text-xl border-b min-w-[375px] sm:w-[375px]">
      <div className="flex text-[17px] items-center">
        <button
          className="flex w-[20px] h-[20px] justify-center items-center"
          onClick={backBtnHandler}
        >
          <Image src={chevronLeftThickIcon} alt="더보기 버튼" />
        </button>
        <div className="text-[17px] ml-4 Pretendard-SemiBold">상대방 정보</div>
      </div>
      <div>
        <button
          className="flex w-[20px] h-[20px] justify-center items-center"
          onClick={moreBtnHandler}
        >
          <Image src={threeDotsVerticalIcon} alt="더보기 버튼" />
        </button>
      </div>
    </header>
  );
};

export default Header;
