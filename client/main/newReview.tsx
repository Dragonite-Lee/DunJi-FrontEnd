import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { mainApi } from '_api';
import NewReviewItem from 'client/main/newReviewItem';
import useMainRedux from 'hooks/useMainRedux';
import { dispatchNewReview, newReviewType } from 'store/modules/main';

function NewReview() {
  const [state, dispatch] = useMainRedux();
  const id = localStorage.getItem('userId');

  const newReviewListData = useCallback(()=>{
    mainApi
      .newReview(id)
      .then((res) => {
        dispatch(dispatchNewReview(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },[id])
  
  useEffect(() => {
    newReviewListData()
  }, [dispatch]);

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
        {state.newReview.map((data: newReviewType, index: number) => (
          <NewReviewItem key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default NewReview;
