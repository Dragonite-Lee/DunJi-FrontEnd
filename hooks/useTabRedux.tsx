import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/modules";

// main-redux state,dispatch 반환 훅
export default function useTabRedux(): [any, Dispatch<any>] {
    const state = useSelector((state: RootState) => state.tab);
    const dispatch = useDispatch();

    return [state, dispatch];
}