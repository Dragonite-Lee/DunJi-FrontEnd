<<<<<<< HEAD
import ContractType from 'components/contract/ContractType';
import Header from 'components/contract/Header';
=======
import ContractGuide from 'client/pages/room/contract';
>>>>>>> 8ac79486c0fedf3a4ea2f69b3e556116675a0e4e

function ContractGuidePage() {
  return <ContractGuide />;
}

export default ContractGuidePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
