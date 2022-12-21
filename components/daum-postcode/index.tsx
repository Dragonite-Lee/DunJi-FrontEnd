import DaumPostcode from 'react-daum-postcode';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import {
  dispatchMainAddress,
  dispatchPostCodeOpen,
  dispatchSido,
  dispatchSigungu,
  dispatchDong,
  dispatchRi,
  dispatchJibun,
} from 'store/modules/roomRegister';

const PostCode = () => {
  const [state, dispatch] = useRoomRegisterRedux();

  const handleComplete = (data: any) => {
    const fullAddress = data.autoJibunAddress || data.jibunAddress;
    dispatch(dispatchPostCodeOpen(!state.POSTCODE_OPEN));
    dispatch(dispatchMainAddress(fullAddress));
    dispatch(dispatchSido(data.sido));
    dispatch(dispatchSigungu(data.sigungu));
    dispatch(dispatchDong(data.bname || data.bname1 || data.bname2));
    dispatch(dispatchRi(data.roadname));
    dispatch(dispatchJibun(data.roadname));
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
