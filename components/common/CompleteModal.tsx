import Image from 'next/image';

interface CompleteModalProps {
  title: string;
}

function CompleteModal({title}:CompleteModalProps) {
  return (
    <div className="bg-blur w-full sm:w-[375px] h-screen fixed z-30">
      <div className="bg-white top-[350px] w-[250px] h-[130px] absolute z-30 rounded-standard_rounded translate-x-2/4 right-[50%]">
        <div className="mt-[20px] text-center">
          <Image
            width={60}
            height={60}
            alt="체크로고"
            src={require('assets/icon/팝업_체크.svg')}
          />
        </div>
        <div className="Pretendard-SemiBold text-[15px] text-center mt-[13px]">
          {title}
        </div>
      </div>
    </div>
  );
}

export default CompleteModal;
