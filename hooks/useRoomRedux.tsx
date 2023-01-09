import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { RoomState, RootState } from 'types';

// room-redux state,dispatch 반환 훅
export default function useRoomRedux(): [RoomState, Dispatch] {
  const state = useSelector((state: RootState) => state.room);
  const dispatch = useDispatch();

  return [state, dispatch];
}
