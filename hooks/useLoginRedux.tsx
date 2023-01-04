import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';

// login-redux state,dispatch 반환 훅
export default function useLoginRedux(): [any, Dispatch<any>] {
  const state = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  return [state, dispatch];
}
