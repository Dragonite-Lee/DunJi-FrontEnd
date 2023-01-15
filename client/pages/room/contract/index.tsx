import ContractType from 'client/room/contract/ContractType';
import MoreHeader from 'components/layout/Header/MoreHeader';

function ContractGuide() {
  const handleMoreAction = () => {
    console.log('more btn click');
  };

  return (
    <div className="min-w-[375px] sm:w-[375px] mx-auto bg-background_beige h-screen">
      <MoreHeader title="계약서 가이드" onAction={handleMoreAction}>
        <></>
      </MoreHeader>

      <ContractType />
    </div>
  );
}

export default ContractGuide;
