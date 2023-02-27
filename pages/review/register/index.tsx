import ReviewRegister from 'client/reviewRegister/index';

function ReviewRegisterPage() {
  return <ReviewRegister />;
}

export async function getServerSideProps() {
  //TODO: serverside적용 map과 id정도
  return { props: {} };
}

export default ReviewRegisterPage;
