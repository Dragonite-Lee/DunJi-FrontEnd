import Image from 'next/image';
import ReviewStarRate from 'components/common/ReviewStarRate';
import { ReviewlistTypes } from 'types';

interface DetailReviewProps {
    list: ReviewlistTypes[]
}

function ReviewMore({
    list
    }: DetailReviewProps) {
    
    return (
        <div className="px-[18px] pb-[14px] mb-[6px] bg-component_white">
            <div className='mt-[16px]'>
                {list.map((data,index) => (
                    <div key={index} className="py-[16px]">
                        <div className='flex justify-between items-center mb-[11px]'>
                            <div className='flex items-center'>
                                <div className='Pretendard-SemiBold text-[14px] mr-[8px]'>
                                    {data.userNickname}
                                </div>
                                <div className='Pretendard-Regular text-[12px] text-font_gray'>
                                    {data.addressDetail} · {data.period}
                                </div>
                            </div>
                            <div className='Pretendard-ExtraBold text-[14px] text-font_gray'>
                                ···
                            </div>
                        </div>
                        <div className='flex justify-start items-center mb-[6px]'>
                            <ReviewStarRate rate={data.totalRate} wh={20} />
                            <div className='Pretendard-Regular text-[12px] text-font_gray ml-[8px]'>
                                {data.regDate.slice(0,10)}
                            </div>
                        </div>
                        <div className='Pretendard-Regular text-[14px] mb-[12px]'>
                            {data.content}
                        </div>
                        <div>
                            {data.image.length === 1 ? (
                                <>
                                    <Image 
                                        src={require(`${data.image}`)}
                                        alt="방 사진"
                                        width={340}
                                        height={150}
                                        className="rounded-standard_rounded"
                                    />
                                </>
                            ) : (
                                <div className='flex overflow-scroll overflow-y-hidden'>
                                    {data.image.map((src,index) => (
                                        <div key={index}>
                                            <Image 
                                                src={`${src}`}
                                                // src={require('assets/images/room.png')}
                                                alt="방 사진"
                                                width={200}
                                                height={150}
                                                className="rounded-standard_rounded"
                                                layout="fixed"
                                                objectFit="fill"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewMore;