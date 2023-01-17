import Agree from 'client/room/register/agree';


function AgreePage() {
  return <Agree />;
}

export default AgreePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
