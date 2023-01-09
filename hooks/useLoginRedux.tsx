import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { LoginState, RootState } from 'types';

// login-redux state,dispatch 반환 훅
export default function useLoginRedux(): [LoginState, Dispatch] {
  const state = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  return [state, dispatch];
}
