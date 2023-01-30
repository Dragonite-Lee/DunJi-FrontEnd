import { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import harfActive from 'assets/icon/별점_반.svg';
import noActive from 'assets/icon/별점_비활성화.svg';
import active from 'assets/icon/별점_활성화.svg';


interface ReviewStarRateProps {
    rate: number;
  }
  
  function ReviewStarRate({ rate }: ReviewStarRateProps) {
    
    const StarRating: Array<string> = [];
    const [starUrl, setStarUrl] = useState<string[]>([])
    const StarRateHandler = (rate: number) => {
        if (rate * 2 === 0) {
            StarRating.push(noActive);
            StarRating.push(noActive);
            StarRating.push(noActive);
            StarRating.push(noActive);
            StarRating.push(noActive);
        } else if (rate * 2 === 1) {
          StarRating.push(harfActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
        } else if (rate * 2 === 2) {
          StarRating.push(active);
          StarRating.push(noActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
        } else if (rate * 2 === 3) {
          StarRating.push(active);
          StarRating.push(harfActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
        } else if (rate * 2 === 4) {
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(noActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
        } else if (rate * 2 === 5) {
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(harfActive);
          StarRating.push(noActive);
          StarRating.push(noActive);
        } else if (rate * 2 === 6) {
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(noActive);
          StarRating.push(noActive);
        } else if (rate * 2 === 7) {
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(harfActive);
          StarRating.push(noActive);
        } else if (rate * 2 === 8) {
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(noActive);
        } else if (rate * 2 === 9) {
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(harfActive);
        } else if (rate * 2 === 10) {
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
          StarRating.push(active);
        }
        setStarUrl(StarRating)
    };
    
    // StarRateHandler(rate*2)
    useEffect(() => {
        StarRateHandler(rate)
    },[])

    const map_result = starUrl.map((star: any, index: number) => {
        return (
            <div key={index}>
                <Image
                    alt="별점"
                    src={star}
                    width={100}
                    height={100}
                />
            </div>
        );
    });
      

    return (
      <div className='py-[24px]'>
          <div className="flex justify-center mx-12">
            {map_result}
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[20px] Pretendard-ExtraBold text-dealType_Btn mr-[4px]">{rate}</div>
            <div className="text-[12px] Pretendard-Regular text-font_gray">(5)</div>
          </div>
      </div>
    );
  }
  
  export default ReviewStarRate;
  