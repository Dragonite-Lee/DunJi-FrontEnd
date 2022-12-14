import PolicyForm from 'client/pages/register/form';

function PolicyFormPage() {
  return <PolicyForm />;
}

export async function getServerSideProps() {
  // TODO : server side 적용
  return { props: {} };
}

export default PolicyFormPage;
