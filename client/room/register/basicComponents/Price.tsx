import { ChangeEvent, useEffect, useState } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import CategoryHeader from 'components/common/CategoryHeader';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchDeposit, dispatchPrice } from 'store/modules/roomRegister';

function Price() {
  const [state, dispatch] = useRoomRegisterRedux();

  const [unitPlaceHolder, setUnitPlaceHolder] = useState('월세');

  const unit = state.priceUnit;
  const deposit = state.deposit;
  const price = state.price;

  const priceArr = [
    {
      value: deposit,
      valueHandler: dispatchDeposit,
      placeHolder: '보증금',
    },
    {
      value: price,
      valueHandler: dispatchPrice,
      placeHolder: unitPlaceHolder,
    },
  ];

  useEffect(() => {
    const unitHandler = () => {
      if (unit === '주세') setUnitPlaceHolder(unit);
      else if (unit === '일세') setUnitPlaceHolder(unit);
      else setUnitPlaceHolder('월세');
    };
    unitHandler();
  }, [unit]);

  const onChangeHandler = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    handler: ActionCreatorWithPayload<any, string>,
  ) => {
    if (value !== '' && value !== '0') {
      const num = Number(value);
      if (num < 999999999999999 && num > 0) dispatch(handler(num));
    } else {
      dispatch(handler(''));
    }
  };

  const errorHandler = (index: number) => {
    if (unit === '전세' && index === 1) priceArr[index].value = 0;
  };

  return (
    <>
      <CategoryHeader title="가격" />
      <div className="mb-4 w-full rounded-standard_rounded overflow-hidden Pretendard-Regular">
        {priceArr.map(
          (item, index) =>
            (unit !== '전세' || index === 0) && (
              <div className="relative" key={index}>
                <input
                  type="number"
                  className={`h-room_register_btn_height2 w-full text-[15px] pl-4 placeholder-font_gray outline-0   ${
                    index === 0 && 'border-b'
                  }`}
                  placeholder={item.placeHolder}
                  value={item.value}
                  onChange={(e) => {
                    onChangeHandler(e, item.valueHandler);
                    errorHandler(index);
                  }}
                />
                <div
                  className="absolute  text-[15px]
            right-8 bottom-[50%] translate-y-[50%] "
                >
                  만원
                </div>
              </div>
            ),
        )}
      </div>
    </>
  );
}

export default Price;
