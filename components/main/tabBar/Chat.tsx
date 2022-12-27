import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTabRedux from 'hooks/useTabRedux';
import {
  dispatchTabBarOpenHome,
  dispatchTabBarOpenSearch,
  dispatchTabBarOpenChat,
  dispatchTabBarOpenMypage,
} from 'store/modules/tab';

export default function Chat() {
  const [state, dispatch] = useTabRedux();

  function close() {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('home')) {
        localStorage.setItem('chat', 'true');
        localStorage.removeItem('home');
      } else if (localStorage.getItem('search')) {
        localStorage.setItem('chat', 'true');
        localStorage.removeItem('search');
      } else if (localStorage.getItem('mypage')) {
        localStorage.setItem('chat', 'true');
        localStorage.removeItem('mypage');
      }
    }
  }
  const chat =
    typeof window !== 'undefined' ? localStorage.getItem('chat') : null;

  return (
    <div>
      {chat ? (
        <Image
          width={30}
          height={30}
          alt="채팅로고"
          src={require('../../../assets/icon/main/tabBar/메뉴바_채팅_활성화.svg')}
          onLoad={() => {
            localStorage.clear();
            localStorage.setItem('chat', 'true');
          }}
        />
      ) : (
        <Link href="/chat">
          <a>
            <Image
              onClick={close}
              width={30}
              height={30}
              alt="채팅로고"
              src={require('../../../assets/icon/main/tabBar/메뉴바_채팅_비활성화.svg')}
            />
          </a>
        </Link>
      )}
    </div>
  );
}
