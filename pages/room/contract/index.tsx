import ContractGuide from 'client/pages/room/contract';


function ContractGuidePage() {
  return <ContractGuide />;
}

export default ContractGuidePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
