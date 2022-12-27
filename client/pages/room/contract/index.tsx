import ContractType from 'client/room/contract/ContractType';
import Header from 'client/room/contract/Header';

function ContractGuide() {
  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto bg-background_beige h-screen">
      <Header />
      <ContractType />
    </div>
  );
}

export default ContractGuide;
