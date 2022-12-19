import Policy from 'client/register/policy';

function PolicyPage() {
  return <Policy />;
}

export async function getServerSideProps() {
  // TODO : server side 또는 static 적용
  return { props: {} };
}

export default PolicyPage;
