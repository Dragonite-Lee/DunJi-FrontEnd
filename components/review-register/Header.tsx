import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useReviewRegisterRedux from "hooks/useReviewRegisterRedux";
import { dispatchPostCodeOpen } from "store/modules/reviewRegister";
import Router from "next/router";

export default function Header() {
    const [state, dispatch] = useReviewRegisterRedux();
    

    return (
        <>
            {state.POSTCODE_OPEN ? (
                <header
                    className="flex w-screen justify-between px-[18px]
        py-4  h-24 items-center text-xl  border-b sm:w-[375px] sm:m-auto "
                >
                    <div className="flex text-2xl items-center">
                        <div
                            onClick={() => {
                                dispatch(
                                    dispatchPostCodeOpen(!state.POSTCODE_OPEN)
                                );
                            }}
                        >
                            <FontAwesomeIcon icon="chevron-left" />
                        </div>
                        <div className="ml-4 Pretendard-SemiBold text-[17px]">주소 찾기</div>
                    </div>
                </header>
            ) : (
                <header
                    className="flex w-screen justify-between px-[14px] 
                py-4  h-24 items-center text-xl  border-b sm:w-[375px] sm:m-auto"
                >
                    <div className="flex text-2xl items-center">
                        <div>
                            <FontAwesomeIcon icon="chevron-left" />
                        </div>
                        <div className="ml-4 Pretendard-SemiBold text-[17px]">후기 작성하기</div>
                    </div>
                    <div className="text-main text-[12px] Pretendard-Regular"
                        onClick={() => {
                            Router.back();
                        }}
                    >취소</div>
                </header>
            )}
        </>
    );
}
