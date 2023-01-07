import Image from 'next/image';
import Router from 'next/router';

interface SquareZoneItemProps {
  image: string | HTMLImageElement;
  content: string;
  path: string;
}

function SquareZoneItem({ image, content, path }: SquareZoneItemProps) {
  const handleMove = () => {
    Router.push(path);
  };
  return (
    <div className="h-[83px] flex items-center justify-center text-[17px] Pretendard-SemiBold bg-white py-[30px] rounded-standard_rounded">
      <Image src={image} width={35} height={35} alt={content} />
      <div className="ml-[4px]" onClick={handleMove}>
        {content}
      </div>
    </div>
  );
}

export default SquareZoneItem;
