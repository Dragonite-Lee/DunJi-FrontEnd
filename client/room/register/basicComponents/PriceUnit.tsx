import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import CategoryHeader from 'components/common/CategoryHeader';
import NoDuplicateSelectBtn from 'components/common/NoDuplicateSelectBtn';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import { dispatchPriceUnit } from 'store/modules/roomRegister';
import { RootState } from 'types';

function PriceUnit() {
  const { priceUnit } = useSelector((state: RootState) => state.roomRegister);

  const typeArr = useMemo(() => ['주세', '월세', '전세', '반전세'], []);

  const [selectArr, checkHandler] = useNoDuplicateSelect(
    typeArr,
    dispatchPriceUnit,
    priceUnit,
  );

  return (
    <>
      <CategoryHeader title="가격 단위" />
      <div className="w-full grid grid-cols-2 gap-room_register_gap Pretendard-Regular">
        {typeArr.map((item, index) => (
          <NoDuplicateSelectBtn
            key={index}
            value={item}
            check={selectArr[index]}
            index={index}
            checkHandler={checkHandler}
          />
        ))}
      </div>
    </>
  );
}

export default PriceUnit;
