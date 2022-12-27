import TransferAgreement from 'client/pages/room/contract/transfer-agreement';

function TransferAgreementPage() {
  return <TransferAgreement />;
}

export default TransferAgreementPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
