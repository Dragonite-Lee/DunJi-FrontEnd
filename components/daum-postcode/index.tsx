import DaumPostcode from 'react-daum-postcode';
import { useDispatch, useSelector } from 'react-redux';
import {
  dispatchMainAddress,
  dispatchPostCodeOpen,
  dispatchSigungu,
  dispatchDong,
} from 'store/modules/roomRegister';
import { RootState } from 'types';

const PostCode = () => {
  const dispatch = useDispatch();
  const { POSTCODE_OPEN, ADDRESS_OPEN } = useSelector(
    (state: RootState) => state.roomRegister,
  );

  const handleComplete = (data: any) => {
    const fullAddress = data.autoJibunAddress || data.jibunAddress;
    dispatch(dispatchPostCodeOpen(!POSTCODE_OPEN));
    dispatch(dispatchMainAddress(fullAddress));
    dispatch(dispatchSigungu(data.sigungu));
    dispatch(dispatchDong(data.bname || data.bname1 || data.bname2));
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
