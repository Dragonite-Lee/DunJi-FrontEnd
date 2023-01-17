import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import CategoryHeader from 'components/common/CategoryHeader';
import NoDuplicateSelectBtn from 'components/common/NoDuplicateSelectBtn';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import { dispatchTransactionType } from 'store/modules/roomRegister';
import { RootState } from 'types';

function TransactionType() {
  const { dealType } = useSelector((state: RootState) => state.roomRegister);

  const typeArr = useMemo(() => ['단기임대', '양도'], []);

  const [selectArr, checkHandler] = useNoDuplicateSelect(
    typeArr,
    dispatchTransactionType,
    dealType,
  );

  return (
    <>
      <CategoryHeader title="거래유형" />
      <div className="w-full flex gap-room_register_gap Pretendard-Regular h-room_register_btn_height1">
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

export default TransactionType;
