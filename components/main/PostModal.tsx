import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import {
  dispatchTabBarOpenPostModal,
  dispatchTabBarOpenPlus,
} from 'store/modules/tab';
import { RootState } from 'types';

function PostModal() {
  const dispatch = useDispatch();

  const { TABBAR_OPEN_PLUS, TABBAR_OPEN_POSTMODAL } = useSelector(
    (state: RootState) => state.tab,
  );

  const [imageHover1, setImageHover1] = useState(false);
  const [imageHover2, setImageHover2] = useState(false);

  const mouseOver1 = () => {
    setImageHover1(true);
  };
  const mouseLeave1 = () => {
    setImageHover1(false);
  };

  const mouseOver2 = () => {
    setImageHover2(true);
  };
  const mouseLeave2 = () => {
    setImageHover2(false);
  };

  return (
    <div
      className="bg-blur w-full sm:w-[375px] h-screen fixed z-30"
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          dispatch(dispatchTabBarOpenPlus(!TABBAR_OPEN_PLUS));
          dispatch(dispatchTabBarOpenPostModal(!TABBAR_OPEN_POSTMODAL));
        }
      }}
    >
      <div className="gap-4 flex items-center justify-between bg-white top-[350px] w-[250px] h-[120px] absolute z-30 rounded-standard_rounded translate-x-2/4 right-[50%] ">
        <Link href="/room/register/agreePage">
          <a>
            <div
              className="ml-[36px] hover:text-hover_orange"
              onMouseOver={mouseOver1}
              onMouseLeave={mouseLeave1}
            >
              <div className="ml-[6px]">
                {imageHover1 ? (
                  <Image
                    alt="채팅로고"
                    src={require('assets/icon/채팅메뉴_작성_활성화.svg')}
                  />
                ) : (
                  <Image
                    alt="채팅로고"
                    src={require('assets/icon/채팅메뉴_작성.svg')}
                  />
                )}
              </div>
              <div className=" Pretendard-SemiBold text-[15px]">방 내놓기</div>
            </div>
          </a>
        </Link>
        <div className="h-full border-r"></div>
        <div
          className="mr-[36px] hover:text-hover_orange"
          onMouseOver={mouseOver2}
          onMouseLeave={mouseLeave2}
        >
          <Link href="/review/">
            <a>
              <div className="ml-[8px]">
                {imageHover2 ? (
                  <Image
                    alt="채팅로고"
                    src={require('assets/icon/채팅메뉴_작성_활성화.svg')}
                  />
                ) : (
                  <Image
                    alt="채팅로고"
                    src={require('assets/icon/채팅메뉴_작성.svg')}
                  />
                )}
              </div>
            </a>
          </Link>
          <div className=" Pretendard-SemiBold text-[15px]">후기 작성</div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
