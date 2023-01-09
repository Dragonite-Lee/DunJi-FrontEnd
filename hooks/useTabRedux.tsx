import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState, TabState } from 'types';

// main-redux state,dispatch 반환 훅
export default function useTabRedux(): [TabState, Dispatch] {
  const state = useSelector((state: RootState) => state.tab);
  const dispatch = useDispatch();

  return [state, dispatch];
}
