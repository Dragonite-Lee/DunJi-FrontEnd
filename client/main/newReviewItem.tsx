import React from 'react';
import Image from 'next/image';

import { NewReviewType } from 'types';

interface NewReviewItemProps {
  data: NewReviewType;
}

function NewReviewItem({ data }: NewReviewItemProps) {
  return (
    <div className="w-[340px] px-[12px] pt-[20px] pb-[15px] bg-white rounded-standard_rounded">
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
            <div className="ml-[8px] text-[12px] text-font_gray">등록날짜</div>
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
  );
}

export default NewReviewItem;
