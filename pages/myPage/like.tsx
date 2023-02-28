import MyApelike from 'client/myPage/like';

function MyPageLike() {
  return <MyApelike />;
}

export async function getServerSideProps() {
  //TODO: 이메일등 개인정보에 예상
  return { props: {} };
}

export default MyPageLike;
