import { useState } from 'react';
import Link from 'next/link';
import Header from 'components/room-register/Header';

export default function AgreePage() {
  const [isCheck1, SetIsCheck1] = useState<boolean>(false);
  const [isCheck2, SetIsCheck2] = useState<boolean>(false);

  const ChangeHandler = (
    setState: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setState((state) => !state);
  };

  return (
    <div className="bg-background_beige min-h-screen sm:w-[375px] sm:m-auto">
      <Header />
      <div className="pb-[105px] mx-[17px] mt-[25px]">
        <div className="text-[25px] Pretendard-SemiBold">
          방 내놓기 전 꼭! 확인해주세요
        </div>
        <div className="mt-[5px] text-[14px] Pretendard-Regular">
          궁금한 점이 있으시다면 둥지 채팅에 문의해주세요.
        </div>
        <div className="mt-[57px] text-[16px] Pretendard-Regular">
          <div>
            1. 방을 내놓을 때는{' '}
            <span className="Pretendard-SemiBold">집주인(임대인)의 동의</span>가
            반드시 필요합니다.
          </div>
          <div className="mt-10">
            2. 방을 내놓기 위해서는{' '}
            <span className="Pretendard-SemiBold">&apos;전대동의서&apos;</span>
            (전대차 계약의 경우) 혹은{' '}
            <span className="Pretendard-SemiBold">&apos;양도승낙서&apos;</span>
            (양도·양수 계약의 경우)를 받아주세요!
          </div>
          <div className="mt-10">
            3. 해당 내용은{' '}
            <Link href="/room/contract">
              <a>
                <span className="Pretendard-SemiBold underline">
                  계약서 가이드
                </span>
              </a>
            </Link>
            에서 자세히 확인하실 수 있으며 계약서 파일을 다운받아보실 수
            있습니다.
          </div>
          <div className="mt-10">
            4. 방 등록에 대한 모든 책임은 당사자에게 있으니 집주인의 사전 동의를
            얻은 후 허위 사실 없이 정확하게 입력해주시기 바랍니다.
          </div>
        </div>
        <div className="mt-[130px] w-full border-y border-stone-300"></div>
        <div className="mt-[16px] Pretendard-Regular text-[15px]">
          <div className="flex items-center justify-between">
            <div>방 등록에 대해 집주인의 동의 및 동의 서면을 얻었음</div>
            <input
              id="check1"
              type="checkbox"
              checked={isCheck1}
              onChange={() => {
                ChangeHandler(SetIsCheck1);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              방 등록에 대한 모든 책임은 당사자에게 있음을 확인하고 동의함
            </div>
            <input
              id="check2"
              type="checkbox"
              checked={isCheck2}
              onChange={() => {
                ChangeHandler(SetIsCheck2);
              }}
            />
          </div>
        </div>
      </div>
      {isCheck1 && isCheck2 ? (
        <Link href="/room/register">
          <a>
            <div className="min-w-[375px] sm:w-[375px] sm:m-auto bg-main fixed bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around">
              <div className="text-[17px] Pretendard-SemiBold text-white">
                방 내놓기
              </div>
              <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
            </div>
          </a>
        </Link>
      ) : (
        <div className="min-w-[375px] sm:w-[375px] sm:m-auto bg-font_gray fixed bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around">
          <div className="text-[17px] Pretendard-SemiBold text-white">
            방 내놓기
          </div>
          <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
      )}
    </div>
  );
}
