import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';

// room-redux state,dispatch 반환 훅
export default function useMapFilterRedux(): [any, Dispatch<any>] {
  const state = useSelector((state: RootState) => state.mapFilter);
  const dispatch = useDispatch();

  return [state, dispatch];
}
