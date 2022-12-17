import { useState } from 'react';

import CategoryHeader2 from 'components/common/CategoryHeader2';
import {
  dispatchFloorfive,
  dispatchFloorsixup,
  dispatchFloortenup,
  dispatchBasement,
  dispatchRooftop,
} from 'store/modules/filter';
import CommonBtn from './CommonBtn';

function Floor() {
  const [btn1Check, setBtn1Check] = useState(false);
  const [btn2Check, setBtn2Check] = useState(false);
  const [btn3Check, setBtn3Check] = useState(false);
  const [btn4Check, setBtn4Check] = useState(false);
  const [btn5Check, setBtn5Check] = useState(false);

  const btnArr = [
    {
      check: btn1Check,
      checkHandler: setBtn1Check,
      type: '5층 이하',
      dispatch: dispatchFloorfive,
    },
    {
      check: btn2Check,
      checkHandler: setBtn2Check,
      type: '6층~10층',
      dispatch: dispatchFloorsixup,
    },
    {
      check: btn3Check,
      checkHandler: setBtn3Check,
      type: '10층 이상',
      dispatch: dispatchFloortenup,
    },
    {
      check: btn4Check,
      checkHandler: setBtn4Check,
      type: '반지하',
      dispatch: dispatchBasement,
    },
    {
      check: btn5Check,
      checkHandler: setBtn5Check,
      type: '옥탑방',
      dispatch: dispatchRooftop,
    },
  ];

  return (
    <div className="border-t border-border_color">
      <CategoryHeader2 title="층 수" />
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
    </div>
  );
}

export default Floor;
