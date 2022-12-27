import Register from 'client/pages/room/register';

function RegisterPage() {
  return <Register />;
}

export default RegisterPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
