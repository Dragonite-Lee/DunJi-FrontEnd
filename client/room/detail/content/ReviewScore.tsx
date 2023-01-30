import Image from 'next/image';
import useToggle from 'hooks/useToggle';
import ReviewRateBar from 'client/room/detail/content/ReviewRateBar';
import ReviewStarRate from './ReviewStarRate';

interface ReviewScoreProps {
  totalRate: number;
  cleanRate: number;
  noiseRate: number;
  accessRate: number;
  hostRate: number;
  facilityRate: number;
}

function ReviewScore({ totalRate, cleanRate, noiseRate, accessRate, hostRate, facilityRate }: ReviewScoreProps) {
  const [openChevron, handlerOpenChevron] = useToggle();
  const [openMore, handlerOpenMore, ToggleTools] = useToggle();

  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={handlerOpenChevron}
        className={`${openChevron && `border-b border-border_color`}`}
      >
        <div className=" h-28 flex justify-between items-center px-[18px]">
          <div>
            <div className="text-[17px] Pretendard-SemiBold">이 건물 후기</div>
            <div className="text-font_gray text-[12px] Pretendard-Regular">
              <span className='text-red mr-[2px]'>*</span>이 건물에 살았던 둥지인들의 후기를 참고해보세요
            </div>
          </div>
          <div className={`ml-auto w-10 h-12 relative ${openChevron && 'rotate-180'}`}>
            <Image
              src={require('assets/icon/화살표_펼치기.svg')}
              alt="arrow"
              objectFit="contain"
              layout="fill"
              className="rotate-180"
            />
          </div>
        </div>
      </div>
      {openChevron && (
        <>
          <div className="px-[18px]">
            <div>
              <ReviewStarRate rate={totalRate} />
              <div>
                <ReviewRateBar title="청결도" rate={cleanRate} />
                <ReviewRateBar title="방음" rate={noiseRate} />
                <ReviewRateBar title="접근성" rate={accessRate} />
                <ReviewRateBar title="집주인 친절절" rate={hostRate} />
                <ReviewRateBar title="시설 만족도" rate={facilityRate} />
              </div>
            </div>
          </div>
          <div className='py-[16px] border-t border-border_color '>
              
              {openMore ? (
                <>
                  <div>
                    후기 상세 페이지
                  </div>
                  <div className='text-[15px] Pretendard-SemiBold text-center' onClick={ToggleTools.toggleOff}>간략히 보기</div>
                </>
              ):(
                <div className='text-[15px] Pretendard-SemiBold text-center' onClick={ToggleTools.toggleOn}>더보기</div>
              )}
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewScore;
