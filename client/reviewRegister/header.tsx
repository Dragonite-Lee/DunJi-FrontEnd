import Header from 'components/layout/Header';
import CancelHeader from 'components/layout/Header/CancelHeader';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGoBack from 'hooks/useGoback';
import { dispatchPostCodeOpen } from 'store/modules/reviewRegister';
import { RootState } from 'types';


function ReviewRegisterHeader() {
  const reviewRegister = useSelector((state: RootState) => state.reviewRegister);
  const dispatch = useDispatch();
  
  const postCodeOpen = useCallback(() => {
    dispatch(dispatchPostCodeOpen(!reviewRegister.POSTCODE_OPEN));
  },[reviewRegister])
  const goBack = useGoBack();

  return (
    <>
      {reviewRegister.POSTCODE_OPEN ? (
        <Header backAction={goBack} title="주소 찾기" />
      ) : (
        <CancelHeader title="후기 작성하기" />
      )}
    </>
  );
}

export default ReviewRegisterHeader;
