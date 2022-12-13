import Policy from 'client/pages/register/policy';

export default function PolicyPage({}) {
  return <Policy />;
}

export async function getServerSideProps() {
  return { props: {} };
}
