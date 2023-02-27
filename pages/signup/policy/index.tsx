import PolicyReg from 'client/signup/policy';

function PolicyRegPage() {
  return <PolicyReg />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default PolicyRegPage;
