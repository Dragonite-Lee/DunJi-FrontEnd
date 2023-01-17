import Image from 'next/image';
import useToggle from 'hooks/useToggle';

interface ReviewScoreProps {
  
}

function ReviewScore({  }: ReviewScoreProps) {
  const [open, handlerOpen] = useToggle();

  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={handlerOpen}
        className={`${open && `border-b border-border_color`}`}
      >
        <div className=" h-28 flex justify-between items-center px-[18px]">
          <div>
            <div className="text-[17px] Pretendard-SemiBold">이 건물 후기</div>
            <div className="text-font_gray text-[12px] Pretendard-Regular">
              <span className='text-red mr-[2px]'>*</span>이 건물에 살았던 둥지인들의 후기를 참고해보세요
            </div>
          </div>
          <div className={`ml-auto w-10 h-12 relative ${open && 'rotate-180'}`}>
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
      {open && (
        <div className="px-[18px]">
          <div className="text-[14px] Pretendard-Regular py-[16px]">
            가나다
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewScore;
