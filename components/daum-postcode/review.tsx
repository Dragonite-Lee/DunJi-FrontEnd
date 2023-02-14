import DaumPostcode from 'react-daum-postcode';
import { useDispatch, useSelector } from 'react-redux';
import {
  dispatchMainAddress,
  dispatchPostCodeOpen,
} from 'store/modules/reviewRegister';
import { RootState } from 'types';

const PostCode = () => {

  const { POSTCODE_OPEN, ADDRESS_OPEN } = useSelector(
    (state: RootState) => state.reviewRegister,
  );

  const dispatch = useDispatch();

  const handleComplete = (data: any) => {
    const fullAddress = data.autoJibunAddress || data.jibunAddress;
    dispatch(dispatchPostCodeOpen(!POSTCODE_OPEN));
    dispatch(dispatchMainAddress(fullAddress));
  };

  const postCodeStyle = {
    height: '70vh',
  };
  return (
    <>
      {ADDRESS_OPEN && (
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
