import { useSelector, useDispatch } from "react-redux";
import SubHeader from "../SubHeader";
import Total from "./Total";
import Clean from "./Clean";
import Facility from "./Facility";
import Sound from "./Sound";
import Landlord from "./Landlord";
import Accessible from "./Accessible";
import Content from "./Content";
import ReviewImg from "./ReviewImg";


export default function ReviewRegister() {
    const reviewRegister = useSelector((state: any) => state.reviewRegister);

    return (
        <>
            {reviewRegister.COMPONENT_HANDLER === 1 && (
                <div className="h-full ">
                    <SubHeader />
                    <div className="px-[18px] w-screen mb-4 sm:w-[375px] sm:m-auto">
                        <Total />
                        <Clean />
                        <Sound />
                        <Accessible />
                        <Landlord />
                        <Facility />
                        <Content />
                        <div className="mt-[30px]">
                            <div className="text-[17px] Pretendard-SemiBold">사진등록</div>
                            <div className="mt-[4px] mb-[15px] text-[12px] Pretendard-Regular text-font_gray">최대 3장 / 밝고 선명한 사진이 좋습니다.</div>
                            <ReviewImg />
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    );
}