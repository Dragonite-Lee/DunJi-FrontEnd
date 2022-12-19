import Image from 'next/image'

interface SquareZoneItemProps {
    image: string | HTMLImageElement;
    alt: string;
    content: string;
}

function SquareZoneItem({image, alt, content} :SquareZoneItemProps) {
    return (
        <div className="h-[83px] flex items-center justify-center text-[17px] Pretendard-SemiBold bg-white py-[30px] rounded-standard_rounded">
          <Image
            src={image}
            width={34}
            height={34}
            alt={alt}
          />
          <div className="ml-[4px]">
            {/* *각 페이지로 이동해야함 */}
            {content}
          </div>
        </div>
    );
}

export default SquareZoneItem;