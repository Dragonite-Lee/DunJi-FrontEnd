import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { MapFilterState, RootState } from 'types';

// room-redux state,dispatch 반환 훅
export default function useMapFilterRedux(): [MapFilterState, Dispatch] {
  const state = useSelector((state: RootState) => state.mapFilter);
  const dispatch = useDispatch();

  return [state, dispatch];
}
