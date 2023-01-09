import DaumPostcode from 'react-daum-postcode';

import useReviewRegisterRedux from 'hooks/useReviewRegisterRedux';
import {
  dispatchMainAddress,
  dispatchPostCodeOpen,
} from 'store/modules/reviewRegister';

const PostCode = () => {
  const [state, dispatch] = useReviewRegisterRedux();

  const handleComplete = (data: any) => {
    const fullAddress = data.autoJibunAddress || data.jibunAddress;
    dispatch(dispatchPostCodeOpen(!state.POSTCODE_OPEN));
    dispatch(dispatchMainAddress(fullAddress));
  };

  const postCodeStyle = {
    height: '70vh',
  };
  return (
    <>
      {state.ADDRESS_OPEN && (
        <DaumPostcode
          className=""
          style={postCodeStyle}
          onComplete={handleComplete}
        />
      )}
    </>
  );
};

export default PostCode;
