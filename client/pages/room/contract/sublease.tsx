import ContractContent from 'client/room/contract/sublease/ContractContent';
import Explanation from 'client/room/contract/sublease/Explanation';
import Header from 'client/room/contract/sublease/Header';

function Sublease() {
  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto h-full min-h-screen bg-background_beige">
      <Header />
      <Explanation />
      <ContractContent />
    </div>
  );
}

export default Sublease;
