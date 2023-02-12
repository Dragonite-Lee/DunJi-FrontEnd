import Home from 'client/main';

function HomePage() {
  return <Home />;
}

export async function getServerSideProps() {
  //TODO: serverside적용 이벤트베너, 학교변경부분, 방과 후기부분 예상
  return { props: {} };
}

export default HomePage;
