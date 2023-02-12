import Agree from 'client/pages/room/register/agree';

function AgreePage() {
  return <Agree />;
}

export default AgreePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
