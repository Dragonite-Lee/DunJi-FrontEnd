import Login from 'client/login';

function LoginPage() {
  return <Login />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default LoginPage;
