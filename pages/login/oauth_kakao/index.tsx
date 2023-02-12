import OauthKakao from 'client/login/oauth_kakao';

function Auth() {
  return <OauthKakao />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default Auth;
