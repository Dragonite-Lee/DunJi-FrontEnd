import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { componentHandle } from 'store/modules/reviewRegister';
import BottomNextBtnLayout from 'components/common/BottomNextBtnLayout';
import { RootState } from 'types';

function BottomNextBtn() {
    const dispatch = useDispatch();
    
    const { address, addressDetail, periodFrom, periodTo } = useSelector(
        (state: RootState) => state.reviewRegister,
    );
    
    const componentNextHandler = useCallback(() => {
        dispatch(componentHandle(1));
    },[]);

  return (
    <BottomNextBtnLayout state={address && addressDetail && periodFrom && periodTo} content="다음으로" onClick={componentNextHandler} />
  );
}

export default BottomNextBtn;
