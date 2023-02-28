import { ReactNode } from 'react';
import ReviewRateBar from 'components/common/ReviewRateBar';

interface SatisfactionProps {
    cleanRate: number;
    noiseRate: number;
    accessRate: number;
    hostRate: number;
    facilityRate: number;
}

function Satisfaction({
    cleanRate,
    noiseRate,
    accessRate,
    hostRate,
    facilityRate
    }: SatisfactionProps) {
    return (
        <div className="px-[18px] pt-[16px] pb-[6px] mb-[6px] bg-white">
           <div className='Pretendard-SemiBold text-[17px] mb-[10px]'>
                만족도
            </div>
            <div>
                <ReviewRateBar title="청결도" rate={cleanRate} />
                <ReviewRateBar title="방음" rate={noiseRate} />
                <ReviewRateBar title="접근성" rate={accessRate} />
                <ReviewRateBar title="집주인 친절" rate={hostRate} />
                <ReviewRateBar title="시설 만족도" rate={facilityRate} />
            </div>
        </div>
    );
}

export default Satisfaction;
