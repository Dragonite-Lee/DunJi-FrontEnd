import Header from 'components/common/Header';
import CancelHeader from 'components/common/Header/CancelHeader';
import useReviewRegisterRedux from 'hooks/useReviewRegisterRedux';
import { dispatchPostCodeOpen } from 'store/modules/reviewRegister';
import { RootState } from 'types';

function ReviewRegisterHeader() {
  const [state, dispatch] = useReviewRegisterRedux();

  const postCodeOpen = () => {
    dispatch(dispatchPostCodeOpen(!state.POSTCODE_OPEN));
  };

  return (
    <>
      {state.POSTCODE_OPEN ? (
        <Header onClick={postCodeOpen} title="주소 찾기" />
      ) : (
        <CancelHeader title="후기 작성하기" />
      )}
    </>
  );
}

export default ReviewRegisterHeader;
