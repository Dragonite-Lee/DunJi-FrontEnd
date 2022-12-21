import ContractContent from '../../../components/contract/transfer-agreement/ContractContent';
import Explanation from '../../../components/contract/transfer-agreement/Explanation';
import Header from '../../../components/contract/transfer-agreement/Header';

export default function TransferAgreement() {
  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto h-full min-h-screen bg-background_beige">
      <Header />
      <Explanation />
      <ContractContent />
    </div>
  );
}
