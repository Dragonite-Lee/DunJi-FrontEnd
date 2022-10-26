import CategoryHeader from "components/common/CategoryHeader";
import useReviewRegisterReudx from "hooks/useReviewRegisterRedux";
import { dispatchContent } from "store/modules/reviewRegister";

export default function Content() {
    const [state, dispatch] = useReviewRegisterReudx();
    const content = state.content;
    return (
        <>
            <div className="text-[17px] Pretendard-SemiBold mt-[16px]">상세설명</div>
            <textarea
                className="mt-[8px] h-[180px] w-full rounded-standard_rounded  text-[15px] pl-[15px] pt-[15px] placeholder-font_gray outline-0 Pretendard-Regular "
                value={content}
                placeholder="거주 기간동안의 방에 대해 공유해주세요."
                onChange={(e) => dispatch(dispatchContent(e.target.value))}
            />
        </>
    );
}
