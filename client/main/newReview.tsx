import { useEffect, useCallback } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { mainApi } from '_api/main';
import NewReviewItem from 'client/main/newReviewItem';
import { dispatchNewReview } from 'store/modules/main';
import { AllReviewType, RootState } from 'types';

function NewReview() {
  const dispatch = useDispatch();

  const { newReview } = useSelector((state: RootState) => state.main);

  let userId: any;
  if (typeof window !== 'undefined') {
    userId = localStorage.getItem('userId');
  }

  const newReviewListData = useCallback(() => {
    mainApi
      .newReview(userId)
      .then((res) => {
        dispatch(dispatchNewReview(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, userId]);

  useEffect(() => {
    newReviewListData();
  }, [dispatch, newReviewListData]);

  return (
    <div className="pt-[55px] ">
      <div className="flex justify-between items-center">
        <div className="text-[17px] Pretendard-SemiBold">둥지를 떠나며...</div>
        <Link href="#">
          <a className="text-[12px] Pretendard-Regular text-font_gray">
            더보기
          </a>
        </Link>
      </div>
      <div className="pt-[14px] h-full flex overflow-x-hidden overflow-y-auto">
        {newReview.map((data: AllReviewType, index: number) => (
          <NewReviewItem key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default NewReview;
