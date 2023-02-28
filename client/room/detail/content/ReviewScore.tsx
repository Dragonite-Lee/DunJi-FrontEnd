import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useToggle from 'hooks/useToggle';
import {mapApi} from '_api/room'
import ReviewRateBar from 'components/common/ReviewRateBar';
import ReviewMore from 'client/room/detail/content/ReviewMore';
import { dispatchReviewDetail } from 'store/modules/room';
import ReviewStarRate from '../../../../components/common/ReviewStarRate';

interface ReviewScoreProps {
  totalRate: number;
  cleanRate: number;
  noiseRate: number;
  accessRate: number;
  hostRate: number;
  facilityRate: number;
  buildingID: string;
}

function ReviewScore({ totalRate, cleanRate, noiseRate, accessRate, hostRate, facilityRate, buildingID }: ReviewScoreProps) {
  const [openChevron, handlerOpenChevron] = useToggle();
  const [openMore, handlerOpenMore, ToggleTools] = useToggle();
  const dispatch = useDispatch();

  const fetchReviewDetail = (buildingID: string | string[] | undefined) => {
    mapApi.getReviewDetail(buildingID).then((res) => {
      dispatch(dispatchReviewDetail(res.data));
    });
  };

  useEffect(() => {
    // fetchReviewDetail()
  }, [dispatch]);

  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={handlerOpenChevron}
        className={`${openChevron && `border-b border-border_color`}`}
      >
        <div className="h-16 flex justify-between items-center px-[18px]">
          <div>
            <div className="text-[17px] Pretendard-SemiBold">이 건물 후기</div>
            <div className="text-font_gray text-[12px] Pretendard-Regular">
              <span className='text-red mr-[2px]'>*</span>이 건물에 살았던 둥지인들의 후기를 참고해보세요
            </div>
          </div>
          <div className={`ml-auto w-8 h-8 relative ${openChevron && 'rotate-180'}`}>
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
          <div className="px-[18px] border-b border-border_color">
            <div>
              <ReviewStarRate rate={totalRate} wh={110}/>
              <div className="flex justify-center items-center">
                <div className="text-[20px] Pretendard-ExtraBold text-dealType_Btn mr-[4px]">{totalRate}</div>
                <div className="text-[12px] Pretendard-Regular text-font_gray">(5)</div>
              </div>
              <div>
                <ReviewRateBar title="청결도" rate={cleanRate} />
                <ReviewRateBar title="방음" rate={noiseRate} />
                <ReviewRateBar title="접근성" rate={accessRate} />
                <ReviewRateBar title="집주인 친절절" rate={hostRate} />
                <ReviewRateBar title="시설 만족도" rate={facilityRate} />
              </div>
            </div>
          </div>
          <div className='pb-[16px] bg-component_white rounded-standard_rounded'>
            {openMore ? (
              <>
                <div>
                  <ReviewMore list={[{
                    "reviewId": "aaa",
                    "userNickname": "둥지냉면",
                    "roomType" : "원룸",
                    "totalRate" : 1.5,
                    "image": ["https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/room/021U7YL3/image.jpg", 
                              "https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/room/021U7YL3/image2.jpg",
                              "https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/room/021U7YL3/image3.jpg"],
                    "period": "2022-06-02 ~ 2022-08-20",
                    "content": "방후기내용",
                    "addressDetail": "행복관 211호",
                    "regDate": "2022-09-12 03:49:37"
                },
                {
                    "reviewId": "bbb",
                    "userNickname": "밥줘아저씨",
                    "roomType" : "원룸",
                    "totalRate" : 1.5,
                    "image": ["https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/room/021U7YL3/image.jpg", 
                              "https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/room/021U7YL3/image2.jpg",
                              "https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/room/021U7YL3/image3.jpg"],
                    "period": "2022-06-02 ~ 2022-08-20",
                    "content": "방후기내용",
                    "addressDetail": "행복관 212호",
                    "regDate": "2022-09-12 03:49:37"
                }]}/>
                </div>
                <div className='text-[15px] pt-[16px] border-t border-border_color Pretendard-SemiBold text-center' onClick={ToggleTools.toggleOff}>간략히 보기</div>
              </>
            ):(
              <div className='text-[15px] pt-[16px] Pretendard-SemiBold text-center' onClick={ToggleTools.toggleOn}>더보기</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewScore;
