import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { MainState, RootState } from 'types';

// main-redux state,dispatch 반환 훅
export default function useMainRedux(): [MainState, Dispatch] {
  const state = useSelector((state: RootState) => state.main);
  const dispatch = useDispatch();

  return [state, dispatch];
}
