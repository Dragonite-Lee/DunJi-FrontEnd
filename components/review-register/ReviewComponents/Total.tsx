import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import useReviewRegisterReudx from 'hooks/useReviewRegisterRedux';
import { dispatchTotal, dispatchTotalNum } from 'store/modules/reviewRegister';
import harfActive from '../../../assets/icon/별점_반.svg';
import noActive from '../../../assets/icon/별점_비활성화.svg';
import active from '../../../assets/icon/별점_활성화.svg';

export default function Total() {
  const [state, dispatch] = useReviewRegisterReudx();

  const starRatingState: Array<string> = useMemo(() => [], []);

  // const active = "../../../assets/icon/별점_활성화.svg";
  // const noActive = "../../../assets/icon/별점_비활성화.svg";

  function clickRatingHandler(index: number, src: any) {
    const StarRating: Array<string> = [];
    if (src * 2 == 1) {
      StarRating.push(harfActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(0.5));
    } else if (src * 2 == 2) {
      StarRating.push(active);
      StarRating.push(noActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(1));
    } else if (src * 2 == 3) {
      StarRating.push(active);
      StarRating.push(harfActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(1.5));
    } else if (src * 2 == 4) {
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(noActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(2));
    } else if (src * 2 == 5) {
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(harfActive);
      StarRating.push(noActive);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(2.5));
    } else if (src * 2 == 6) {
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(noActive);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(3));
    } else if (src * 2 == 7) {
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(harfActive);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(3.5));
    } else if (src * 2 == 8) {
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(noActive);
      dispatch(dispatchTotalNum(4));
    } else if (src * 2 == 9) {
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(harfActive);
      dispatch(dispatchTotalNum(4.5));
    } else if (src * 2 == 10) {
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      StarRating.push(active);
      dispatch(dispatchTotalNum(5));
    }
    dispatch(dispatchTotal(StarRating));
  }

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      starRatingState.push(noActive);
    }
    dispatch(dispatchTotal(starRatingState));
  }, [dispatch, starRatingState]);

  const url: any = [];

  if (state.total.length) {
    for (let i = 0; i < state.total.length; i++) {
      url.push(state.total[i]);
    }
  }

  function location(num: number, index: number) {
    if (num > 29) {
      return index;
    } else if (num <= 29) {
      return index - 0.5;
    }
  }

  const map_result = url.map(function (star: any, index: number) {
    return (
      <div key={index} className="">
        {star ? (
          <Image
            alt="별점"
            src={star}
            onClick={(e) =>
              clickRatingHandler(
                (index + 1) * 2,
                location(e.nativeEvent.offsetX, index + 1),
              )
            }
            width={80}
            height={80}
          />
        ) : (
          <Image
            alt="별점"
            src={require('../../../assets/icon/별점_활성화.svg')}
            width={80}
            height={60}
          />
        )}
      </div>
    );
  });

  return (
    <div className="mt-[31px] ">
      <div className="flex items-center mb-[17px] text-[17px] Pretendard-SemiBold">
        <div>방 어떠셨나요?</div>
        <div className="ml-[5px] text-hover_orange">*</div>
      </div>
      <div className="flex justify-center mx-10">{map_result}</div>
    </div>
  );
}
