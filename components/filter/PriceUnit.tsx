import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryHeader from 'components/common/CategoryHeader';
import NoDuplicateSelectBtn from 'components/common/NoDuplicateSelectBtn';
import useMapFilterRedux from 'hooks/useMapFilterRedux';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import { dispatchPriceUnit } from 'store/modules/filter';
import { RootState } from '../../store/modules/index';
import CommonBtn from '../common/Btn';

export default function TransactionType() {
  const [state, dispatch] = useMapFilterRedux();

  const btnArr = useMemo(() => ['주', '월세', '전세', '반전세'], []);

  const [selectArr, checkHandler] = useNoDuplicateSelect(
    btnArr,
    dispatchPriceUnit,
    state.priceUnit,
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
