import useReviewRegisterRedux from "hooks/useReviewRegisterRedux";
import { componentHandle } from "store/modules/reviewRegister";

export default function SubHeader() {
    const [state, dispatch] = useReviewRegisterRedux();

    const onClickHandler = (num: number) => {
        dispatch(componentHandle(num));
    };
    const btnArr = ["주소 등록", "후기 작성"];
    return (
        <div className="sm:w-[375px] sm:m-auto text-font_gray flex w-full justify-around px-[18px] bg-component_white items-center border-b border-border_color">
            {btnArr.map((title, index) => (
                <button
                    className={`py-4 px-20 text-[14px] Pretendard-Regular  h-max ${
                        state.COMPONENT_HANDLER === index &&
                        "text-main border-b-2 border-main"
                    }`}
                    onClick={() => onClickHandler(index)}
                    key={index}
                >
                    {title}
                </button>
            ))}
        </div>
    );
}
