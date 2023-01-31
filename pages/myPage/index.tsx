import MyPage from 'client/myPage/index';

function MyPageAuth() {
  return <MyPage />;
}

export async function getServerSideProps() {
  //TODO: 이메일등 개인정보에 예상
  return { props: {} };
}

export default MyPageAuth;
