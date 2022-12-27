import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import CategoryHeader from 'components/common/CategoryHeader';
import NoDuplicateSelectBtn from 'components/common/NoDuplicateSelectBtn';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import { dispatchDealType } from 'store/modules/filter';

import type { RootState } from 'store/modules';

function TransactionType() {
  const mapFilter = useSelector((state: RootState) => state.mapFilter);

  const btnArr = useMemo(() => ['단기임대', '양도'], []);
  const [selectArr, checkHandler] = useNoDuplicateSelect(
    btnArr,
    dispatchDealType,
    mapFilter.dealType,
  );

  return (
    <>
      <CategoryHeader title="거래 유형" />
      <div className="grid grid-cols-2 gap-room_register_gap">
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
    </>
  );
}

export default TransactionType;
