<<<<<<< HEAD
import ContractContent from 'components/contract/transfer-agreement/ContractContent';
import Explanation from 'components/contract/transfer-agreement/Explanation';
import Header from 'components/contract/transfer-agreement/Header';
=======
import TransferAgreement from 'client/pages/room/contract/transfer-agreement';
>>>>>>> 8ac79486c0fedf3a4ea2f69b3e556116675a0e4e

function TransferAgreementPage() {
  return <TransferAgreement />;
}

export default TransferAgreementPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
