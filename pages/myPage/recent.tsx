import RecentRoom from 'client/myPage/recentRoom';

function React() {
  return <RecentRoom />;
}

export async function getServerSideProps() {
  //TODO: 이메일등 개인정보에 예상
  return { props: {} };
}

export default React;
