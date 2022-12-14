import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryHeader2 from 'components/common/CategoryHeader2';
import useMapFilterRedux from 'hooks/useMapFilterRedux';
import {
  dispatchOpenType,
  dispatchSeparateType,
  dispatchTwoFloorType,
} from 'store/modules/filter';
import CommonBtn from './CommonBtn';

export default function TransactionType() {
  const [state, dispatch] = useMapFilterRedux();

  const [btn1Check, setBtn1Check] = useState(false);
  const [btn2Check, setBtn2Check] = useState(false);
  const [btn3Check, setBtn3Check] = useState(false);

  const btnArr = [
    {
      check: btn1Check,
      checkHandler: setBtn1Check,
      type: '오픈형',
      dispatch: dispatchOpenType,
    },
    {
      check: btn2Check,
      checkHandler: setBtn2Check,
      type: '분리형',
      dispatch: dispatchSeparateType,
    },
    {
      check: btn3Check,
      checkHandler: setBtn3Check,
      type: '복층형',
      dispatch: dispatchTwoFloorType,
    },
  ];

  return (
    <>
      <CategoryHeader2 title="방 구조" />
      <div className="w-full grid grid-cols-3 gap-room_register_gap">
        {btnArr.map((item, index) => (
          <CommonBtn
            key={index}
            value={item.type}
            check={item.check}
            checkHandler={item.checkHandler}
            dispatchType={item.dispatch}
            dispatchValue={item.check}
          />
        ))}
      </div>
    </>
  );
}
