import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainApi } from '_api';
import useMainRedux from 'hooks/useMainRedux';
import { dispatchNewReview } from 'store/modules/main';

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
        {state.newReview.map((data: any, index: number) => (
          <div
            key={index}
            className="w-[340px] px-[12px] pt-[20px] pb-[15px] bg-white rounded-standard_rounded"
          >
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center Pretendard-Regular">
                  <div className="text-[14px]">닉네임</div>
                  <div className="ml-[5px] text-[12px] text-font_gray">
                    {data.address}
                  </div>
                </div>
                <div className="mt-[12px] flex items-center Pretendard-Regular">
                  <div>별점</div>
                  <div className="ml-[8px] text-[12px] text-font_gray">
                    등록날짜
                  </div>
                </div>
                <div className="mt-[6px] text-[14px] Pretendard-Regular">
                  {data.content}
                </div>
              </div>
              <div>
                {/* *이미지칸 */}
                <Image
                  src={require('../../assets/icon/main/main_char.png')}
                  layout="fixed"
                  objectFit="fill"
                  width={77}
                  height={56}
                  alt="대표방이미지"
                  className="rounded-standard_rounded"
                />
              </div>
            </div>
            <div className="mt-[11px] text-[10px] Pretendard-Regular">
              <span className="px-[3px] py-[7px] rounded-[5px] border border-border_color">
                {/* {data.roomType} */}방타입
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewReview;
