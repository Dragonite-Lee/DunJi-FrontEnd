import ContractContent from '../../../components/contract/sublease/ContractContent';
import Explanation from '../../../components/contract/sublease/Explanation';
import Header from '../../../components/contract/sublease/Header';

export default function Sublease() {
  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto h-full min-h-screen bg-background_beige">
      <Header />
      <Explanation />
      <ContractContent />
    </div>
  );
}
