import Header from 'components/layout/Header';
import ContractContent from 'client/room/contract/transfer-agreement/ContractContent';
import Explanation from 'client/room/contract/transfer-agreement/Explanation';


function TransferAgreement() {
  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto h-full min-h-screen bg-background_beige">
      <Header title="양도양수 계약서 가이드" />
      <Explanation />
      <ContractContent />
    </div>
  );
}

export default TransferAgreement;
