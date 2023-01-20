import OauthKakao from 'client/login/oauth_kakao';

function KakaoLoginPage() {
  return <OauthKakao />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default KakaoLoginPage;
