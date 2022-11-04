import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import NoDuplicateSelectBtn from "components/common/NoDuplicateSelectBtn";
import { RootState } from "../../store/modules/index";
import CategoryHeader from "components/common/CategoryHeader";
import useNoDuplicateSelect from "hooks/useNoDuplicateSelect";
import { useMemo } from "react";
import useMapFilterRedux from "hooks/useMapFilterRedux";
import { dispatchDealType } from "store/modules/filter";

export default function TransactionType() {
    
    const [state,dispatch] = useMapFilterRedux();

    const btnArr = useMemo(
        () => ["단기임대", "양도"],
        []
    );
    const [selectArr, checkHandler] = useNoDuplicateSelect(
        btnArr,
        dispatchDealType,
        state.dealType
    );
    
    return (
        <>
            <CategoryHeader title="거래 유형" />
            <div className="grid grid-cols-2 gap-room_register_gap">
                {btnArr.map((item, index) => (
                    <NoDuplicateSelectBtn
                        key={index}
                        value={item}
                        check={selectArr[index]}
                        index={index}
                        checkHandler={checkHandler}
                    />
                ))}
            </div>
        </>
    );
}
