import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/modules";

// review-register-redux state,dispatch 반환 훅
export default function useReviewRegisterRedux(): [any, Dispatch<any>] {
    const state = useSelector((state: RootState) => state.reviewRegister);
    const dispatch = useDispatch();

    return [state, dispatch];
}
