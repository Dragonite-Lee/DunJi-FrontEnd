import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { RoomRegisterState, RootState } from 'types';

// roomRegister-redux state,dispatch 반환 훅
export default function useRoomRegisterRedux(): [RoomRegisterState, Dispatch] {
  const state = useSelector((state: RootState) => state.roomRegister);
  const dispatch = useDispatch();

  return [state, dispatch];
}
