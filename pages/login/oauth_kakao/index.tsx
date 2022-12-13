import OauthKakao from 'client/pages/login/oauth_kakao';

export default function Auth({}) {
  return <OauthKakao />;
}

export async function getServerSideProps() {
  const data = 'login server side empty data';

  return { props: { data } };
}
