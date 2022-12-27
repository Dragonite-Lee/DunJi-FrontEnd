import PolicyForm from 'client/register/form';

function PolicyFormPage() {
  return <PolicyForm />;
}

export async function getServerSideProps() {
  // TODO : server side 적용
  return { props: {} };
}

export default PolicyFormPage;
