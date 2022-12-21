import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import { useSelector, useDispatch } from 'react-redux';
import CategoryHeader from 'components/common/CategoryHeader';
import useMapFilterRedux from 'hooks/useMapFilterRedux';
import { dispatchManageFrom, dispatchManageTo } from 'store/modules/filter';
import { RootState } from '../../store/modules/index';
import CommonBtn from '../common/Btn';

export default function Price() {
  const [state, dispatch] = useMapFilterRedux();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);

  return (
    <div className="pb-[30px]">
      {/* 카테고리헤더 옆 별 처리 필요 */}
      <div className="mt-[20px] border-t border-border_color flex justify-between items-center">
        <CategoryHeader title="관리비" />
        <div className=" text-[17px] Pretendard-SemiBold">
          {min}만원 ~ {max}만원
        </div>
      </div>
      <div className="px-4 py-2">
        <Slider
          range
          allowCross={false}
          defaultValue={[min, max]}
          max={20}
          onChange={(e: any) => {
            setMin(e[0]);
            setMax(e[1]);
            dispatch(dispatchManageFrom(e[0]));
            dispatch(dispatchManageTo(e[1]));
          }}
        />
      </div>
      <div className="text-[12px] Pretendard-Regular grid grid-cols-5 text-font_gray">
        <span>0원</span>
        <span className="ml-[8px]">5만원</span>
        <span className="text-center">10만원</span>
        <span className="sm:ml-[34px] ml-[40px]">15만원</span>
        <span className="text-right">20만원 이상</span>
      </div>
    </div>
  );
}
