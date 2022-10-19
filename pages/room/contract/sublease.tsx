import Header from "../../../components/contract/sublease/Header";
import Explanation from "../../../components/contract/sublease/Explanation";
import ContractContent from "../../../components/contract/sublease/ContractContent";

export default function Sublease() {
    
    

    return (
        <div className="min-w-[375px] sm:w-[375px] mx-auto h-[100%] bg-background_beige">
            <Header />
            <Explanation />
            <ContractContent />
        </div>
    )
}