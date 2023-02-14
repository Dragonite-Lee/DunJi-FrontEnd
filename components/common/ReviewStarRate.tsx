import { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import harfActive from 'assets/icon/별점_반.svg';
import noActive from 'assets/icon/별점_비활성화.svg';
import active from 'assets/icon/별점_활성화.svg';

interface ReviewStarRateProps {
  rate: number;
  wh: number;
}

function ReviewStarRate({ rate, wh }: ReviewStarRateProps) {
  const StarRating: Array<string> = [];
  const [starUrl, setStarUrl] = useState<string[]>([]);
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
    setStarUrl(StarRating);
  };

  // StarRateHandler(rate*2)
  useEffect(() => {
    StarRateHandler(rate);
  }, []);

  const map_result = starUrl.map((star: any, index: number) => {
    return (
      <div key={index}>
        <Image alt="별점" src={star} width={wh} height={wh} />
      </div>
    );
  });

  return (
    <div className="py-[6px]">
      <div className="flex justify-center">{map_result}</div>
    </div>
  );
}

export default ReviewStarRate;
