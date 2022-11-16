import useReviewRegisterReudx from "hooks/useReviewRegisterRedux";
import { useMemo } from "react";
import useNoDuplicateSelect from "hooks/useNoDuplicateSelect";
import { dispatchLandlord } from "store/modules/reviewRegister";
import NoDuplicateSelectBtn from "../NoDuplicateSelectBtn";

export default function Landlord() {
    const useTypeArr = useMemo(() => ["만족", "보통", "불만족"], []);
    const [state,dispatch] = useReviewRegisterReudx();

    const [selectArr, checkHandler] = useNoDuplicateSelect(
        useTypeArr,
        dispatchLandlord,
        state.landlord
    );

    return(
        <div className="mt-[8px] flex text-[15px] Pretendard-Regular items-center justify-between">
            <div className="w-1/4">집주인 친절</div>
            <div className="grid grid-cols-3 w-3/4">
                {useTypeArr.map((item, index) => (
                        <NoDuplicateSelectBtn
                            key={index}
                            value={item}
                            check={selectArr[index]}
                            index={index}
                            checkHandler={checkHandler}
                        />
                ))}
            </div>
        </div>
    )
}