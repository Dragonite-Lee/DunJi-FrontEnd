<<<<<<< HEAD
import ContractContent from 'components/contract/sublease/ContractContent';
import Explanation from 'components/contract/sublease/Explanation';
import Header from 'components/contract/sublease/Header';
=======
import Sublease from 'client/pages/room/contract/sublease';
>>>>>>> 8ac79486c0fedf3a4ea2f69b3e556116675a0e4e

function SubleasePage() {
  return <Sublease />;
}

export default SubleasePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
