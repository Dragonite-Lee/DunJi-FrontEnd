import { useState } from 'react';
import { useSelector } from 'react-redux';

import CategoryHeader from 'components/common/CategoryHeader';
import NoDuplicateSelectBtn from 'components/common/NoDuplicateSelectBtn';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import { dispatchPriceUnit } from 'store/modules/filter';
import { RootState } from 'types';

function TransactionType() {
  const { priceUnit } = useSelector((state: RootState) => state.mapFilter);

  const [btnArr] = useState(['주', '월세', '전세', '반전세']);

  const [selectArr, checkHandler] = useNoDuplicateSelect(
    btnArr,
    dispatchPriceUnit,
    priceUnit,
  );

  return (
    <div>
      <CategoryHeader title="가격 단위" />
      <div className="w-full grid grid-cols-2 gap-room_register_gap">
        {btnArr.map((item, index) => (
          <NoDuplicateSelectBtn
            key={index}
            value={item}
            check={selectArr[index]}
            index={index}
            checkHandler={checkHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default TransactionType;
