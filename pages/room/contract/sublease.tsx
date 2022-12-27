import Sublease from 'client/pages/room/contract/sublease';

function SubleasePage() {
  return <Sublease />;
}

export default SubleasePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
