import Header from 'components/common/Header';
import useGoBack from 'hooks/useGoback';
import { dispatchPostCodeOpen } from 'store/modules/reviewRegister';
import { RootState } from 'types';

function ReviewRegisterHeader() {
  const [state, dispatch] = useReviewRegisterRedux();
  const goBack = useGoBack();

  const postCodeOpen = () => {
    dispatch(dispatchPostCodeOpen(!state.POSTCODE_OPEN));
  };

  if (state.POSTCODE_OPEN) {
    return <Header backAction={postCodeOpen} title="주소 찾기" />;
  }
  return (
    <Header
      title="후기 작성하기"
      rightElement={
        <div
          className="text-main text-[12px] Pretendard-Regular"
          onClick={goBack}
        >
          취소
        </div>
      }
    />
  );
}

export default ReviewRegisterHeader;
