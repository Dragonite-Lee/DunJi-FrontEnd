import Image from 'next/image';

interface EmptyLikeProps {
  title: string;
  desc: string;
}
function EmptyLike({ title, desc }: EmptyLikeProps) {
  return (
    <div className="flex-1 justify-center flex flex-col text-center items-center">
      <div className="bg-white w-[60px] h-[60px] flex justify-center rounded-[50%] mb-[5px]">
        <Image
          src={require('assets/icon/myPage/매물.svg')}
          alt="추가 기능 파트 닫기 버튼"
          width={30}
          height={30}
        />
      </div>
      <div className="my-[8px] text-[17px] ">{title}이 없습니다.</div>
      <div className="text-[14px]">{desc} </div>
    </div>
  );
}

export default EmptyLike;
