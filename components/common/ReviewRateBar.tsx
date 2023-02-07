interface ReviewRateBarProps {
  title: string;
  rate: number;
}

function ReviewRateBar({ title, rate }: ReviewRateBarProps) {
  
  return (
    <div className={`py-[12px] flex justify-between items-center ${title==='시설 만족도'?null:'border-b'} border-border_color Pretendard-Regular`}>
        <div className='text-[14px]'>{title}</div>
        <div className='flex justify-between items-center'>
            <div className='w-[130px] h-[4px] bg-border_color rounded-standard_rounded mr-[12px]'>
                <div className={`w-[${Math.round(130-130/rate)+'px'}] h-[4px] bg-rate_bar rounded-standard_rounded`}></div>
            </div>
            <div className='text-[12px] w-[20px]'>{rate}</div>
        </div>
    </div>
  );
}

export default ReviewRateBar;
