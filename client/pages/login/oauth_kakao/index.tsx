import useLoginRedux from 'hooks/useLoginRedux';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import Router from 'next/router';
import { useEffect } from 'react';
import { dispatchHandleLogin } from 'store/modules/login';
import { logInApi } from '_api';

function OauthKakao() {
  const [state, dispatch] = useLoginRedux();
  const [state2, dispatch2] = useRoomRegisterRedux();

  const login = () => {
    if (typeof window === 'undefined') {
      return;
    }

    const href = window.location.href;
    const code: string | null = new URL(href).searchParams.get('code');

    logInApi
      .postPermissionCode(code)
      .then((res) => {
        console.log(res);
        localStorage.setItem('userId', res.data.user_id);
        localStorage.setItem('userNickname', res.data.user_nickname);
        dispatch(
          dispatchHandleLogin({
            USER_ID: res.data.user_id,
            USER_NICKNAME: res.data.user_nickname,
            status: true,
          }),
        );
        Router.push('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert('로그인실패');
        Router.push('/login');
      });
  };

  useEffect(() => {
    login();
  }, [dispatch]);

  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto min-h-screen">
      로그인 중입니다.
    </div>
  );
}

export default OauthKakao;
