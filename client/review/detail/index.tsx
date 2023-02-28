import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapApi } from '_api/room';
import CompleteModal from 'components/common/CompleteModal';
import Header from 'components/layout/Header';
import Total from 'client/review/detail/content/Total';
import Satisfaction from 'client/review/detail/content/Satisfaction';
import DetailReview from 'client/review/detail/content/DetailReview';
import { RootState } from 'store/modules';
import useToggle from 'hooks/useToggle';
import { dispatchReviewDetail } from 'store/modules/room';

interface ReviewDetailProps {
  buildingId: string | string[] | undefined;
};

function ReviewDetail({buildingId}: ReviewDetailProps) {
  const review = useSelector((room: RootState) => room.room);
  const dispatch = useDispatch();
  const [popUp, handlerPopUp, handlerTool] = useToggle();

  const fetchReviewDetail = (buildingId: string | string[] | undefined) => {
    mapApi.getReviewDetail(buildingId).then((res) => {
      dispatch(dispatchReviewDetail(res.data));
    });
  };
  console.log(review)
  const openPopup = () => {
    handlerTool.toggleOn();
    setTimeout(() => {
      handlerTool.toggleOff();
    }, 3000);
  };

  // useEffect(() => {
  //   openPopup();
  //   // fetchRoomDetail(roomId)
  // }, []);

  return (
    <div className="pb-[12rem] min-h-screen sm:w-[375px] sm:m-auto w-screen bg-background_beige">
      {buildingId && (
        <>
          {popUp && <CompleteModal title="소중한 후기 감사합니다!" />}
          <Header title="둥지 후기" rightElement={<Image src={require('assets/icon/더보기.svg')} />} />
          <div>
            <Total 
              address={review.ReviewDetail.address}
              averagetotalRate={review.ReviewDetail.totalRate}
              imageElement={review.ReviewDetail.image && <Image  
                src={require(`${review.ReviewDetail.image}`)}
                alt="방 대표사진"
                width={140}
                height={105}
                className='rounded-standard_rounded'
              />}
            />
            <Satisfaction
              cleanRate={review.ReviewDetail.cleanRate}
              noiseRate={review.ReviewDetail.noiseRate}
              accessRate={review.ReviewDetail.accessRate}
              hostRate={review.ReviewDetail.hostRate}
              facilityRate={review.ReviewDetail.facilityRate}
            />
            <DetailReview 
              list={[{
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
            }]}
            />
          </div>       
        </>
      )}
    </div> 
  );
}

export default ReviewDetail;