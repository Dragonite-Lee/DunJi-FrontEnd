import { ReactNode } from 'react';
import ReviewStarRate from 'components/common/ReviewStarRate';

interface TotalProps {
    address: string;
    averagetotalRate: number;
    imageElement: ReactNode;
}

function Total({
    address,
    averagetotalRate,
    imageElement
    }: TotalProps) {
    return (
        <div className="px-[18px] py-[16px] mb-[6px] bg-white flex">
            <div>
                {imageElement}
            </div>
            <div className='ml-[14px]'>
                <div className='Pretendard-Regular text-[14px] mb-[49px]'>
                    {address}
                </div>
                <div className='flex'>
                    <ReviewStarRate rate={averagetotalRate} wh={30} />
                    <div className="ml-[2px] flex justify-center items-center">
                        <div className="text-[20px] Pretendard-ExtraBold text-dealType_Btn mr-[2px]">
                            {averagetotalRate}
                        </div>
                        <div className="text-[12px] Pretendard-Regular text-font_gray">
                            (5)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Total;
  
