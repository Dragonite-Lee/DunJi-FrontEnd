import Image from 'next/image';
import useToggle from 'hooks/useToggle';

interface ReviewContentProps {
  explain: string;
  regDate: string;
}

function ReviewContent({ explain, regDate }: ReviewContentProps) {
  const [open, handlerOpen] = useToggle();

  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={handlerOpen}
        className={`${open && `border-b border-border_color`}`}
      >
        <div className=" h-28 flex justify-between items-center px-[18px]">
          <div>
            <div className="text-[17px] Pretendard-SemiBold">둥지냉면</div>
            <div className="flex gap-1 text-font_gray text-[14px] Pretendard-Regular">
              {regDate && regDate.slice(0, -9)}
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
            {explain}가나
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewContent;
