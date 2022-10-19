import ContractContent from "../../../components/contract/transfer-agreement/ContractContent";
import Header from "../../../components/contract/transfer-agreement/Header";
import Explanation from "../../../components/contract/transfer-agreement/Explanation";

export default function TransferAgreement() {
    
    

    return (
        <div className="min-w-[375px] sm:w-[375px] mx-auto h-[100%] bg-background_beige">
            <Header />
            <Explanation />
            <ContractContent />
        </div>
    )
}