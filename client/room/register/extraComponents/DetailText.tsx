import { useDispatch, useSelector } from 'react-redux';

import CategoryHeader from 'components/common/CategoryHeader';
import { dispatchExplain } from 'store/modules/roomRegister';
import { RootState } from 'types';

function Parking() {
  const dispatch = useDispatch();

  const { explain } = useSelector((state: RootState) => state.roomRegister);

  return (
    <>
      <CategoryHeader title="상세설명" />
      <textarea
        value={explain}
        onChange={(e) => dispatch(dispatchExplain(e.target.value))}
        className="border border-border_color rounded-standard_rounded w-full h-[220px] p-4 text-xl outline-0"
      ></textarea>
    </>
  );
}

export default Parking;
