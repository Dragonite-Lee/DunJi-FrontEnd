import ContractContent from 'client/room/contract/transfer-agreement/ContractContent';
import Explanation from 'client/room/contract/transfer-agreement/Explanation';
import Header from 'client/room/contract/transfer-agreement/Header';

function TransferAgreement() {
  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto h-full min-h-screen bg-background_beige">
      <Header />
      <Explanation />
      <ContractContent />
    </div>
  );
}

export default TransferAgreement;
