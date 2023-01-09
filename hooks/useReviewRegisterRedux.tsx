import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { ReviewRegisterState, RootState } from 'types';

// review-register-redux state,dispatch 반환 훅
export default function useReviewRegisterRedux(): [
  ReviewRegisterState,
  Dispatch,
] {
  const state = useSelector((state: RootState) => state.reviewRegister);
  const dispatch = useDispatch();

  return [state, dispatch];
}
