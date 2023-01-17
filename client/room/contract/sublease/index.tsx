import Header from 'components/layout/Header';
import ContractContent from 'client/room/contract/sublease/ContractContent';
import Explanation from 'client/room/contract/sublease/Explanation';

function Sublease() {
  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto h-full min-h-screen bg-background_beige">
      <Header title="전대차 계약서 가이드" />
      <Explanation />
      <ContractContent />
    </div>
  );
}

export default Sublease;
